export default class Sound { // edited from https://css-tricks.com/introduction-web-audio-api/#article-header-id-4
  constructor(context) {
    this.context = context;
  }

  init() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.oscillator.type = 'sine';
  }

  play(value, time, duration = 1) {
    this.init();
    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(0.1, this.context.currentTime);
    this.oscillator.start(time);
    this.stop(time, duration);
  }

  stop(time, duration) {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, time + (duration / 300));
    this.oscillator.stop(time + (duration / 300));
  }
}
