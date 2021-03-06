export default class Sound { // edited from https://css-tricks.com/introduction-web-audio-api/#article-header-id-4
  constructor(context) {
    this.context = context;
  }

  init() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
  }

  play(value, time, length = 1, tone = 'sine') {
    this.init();
    this.oscillator.type = tone;
    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(0.1, this.context.currentTime);
    this.oscillator.start(time);
    this.stop(time, length);
  }

  stop(time, length) {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, time + length);
    this.oscillator.stop(time + length);
  }
}
