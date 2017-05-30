const notes = {
  C: 523.25,
  Cs: 554.37,
  Db: 554.37,
  D: 587.33,
  Ds: 622.25,
  Eb: 622.25,
  E: 659.25,
  F: 698.46,
  Fs: 739.99,
  Gb: 739.99,
  G: 783.99,
  Gs: 830.61,
  Ab: 830.61,
  A: 880.00,
  As: 932.33,
  Bb: 932.33,
  B: 987.77
};

class App extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'app' },
      React.createElement(Beats, null)
    );
  }
}

class Beats extends React.Component {
  constructor() {
    super();

    let durations = Array(12).fill(200);
    let frequencies = [notes.C / 2, notes.D / 2, notes.E / 2, notes.G / 2, notes.A / 2, notes.C, notes.D, notes.E, notes.G, notes.A, notes.C * 2];
    var map = Array(durations.length).fill(null);
    for (var i in map) {
      map[i] = Array(frequencies.length).fill(false);
    }

    this.state = {
      current: 0,
      frequencies: frequencies,
      durations: durations,
      map: map
    };
  }

  handleTileClick(beatIndex, tileIndex) {
    var newMap = this.state.map.slice();
    newMap[beatIndex][tileIndex] = !newMap[beatIndex][tileIndex];
    this.setState({
      map: newMap
    });
  }

  componentDidMount() {
    var iterate = () => {
      var newCurrent = this.state.current + 1 >= this.state.durations.length ? 0 : this.state.current + 1;
      this.setState({
        'current': newCurrent
      });
      var duration = this.state.durations[newCurrent];
      setTimeout(iterate, duration);
    };
    iterate();
  }
  render() {

    var beats = [];
    for (var i = 0; i < this.state.durations.length; i++) {

      var isCurrent = this.state.current === i;
      beats.push(React.createElement(Beat, {
        beatIndex: i,
        activeTiles: this.state.map[i],
        isCurrent: isCurrent,
        duration: this.state.durations[i],
        frequencies: this.state.frequencies,
        onClick: (beatIndex, tileIndex) => this.handleTileClick(beatIndex, tileIndex)
      }));
    }
    return React.createElement(
      'div',
      { className: 'beats' },
      beats
    );
  }
}

class Beat extends React.Component {
  render() {
    var tiles = [];

    for (var i = 0; i < this.props.frequencies.length; i++) {

      tiles.push(React.createElement(Tile, {
        tileIndex: i,
        isActive: this.props.activeTiles[i],
        isCurrent: this.props.isCurrent,
        beatIndex: this.props.beatIndex,
        frequency: this.props.frequencies[i],
        duration: this.props.duration,

        onClick: (beatIndex, tileIndex) => this.props.onClick(beatIndex, tileIndex)
      }));
    }
    var activeState = this.props.isCurrent ? 'active' : 'inactive';
    return React.createElement(
      'div',
      { className: `${activeState} beat` },
      tiles,
      React.createElement('div', { className: 'beat-indicator' })
    );
  }
}

class Tile extends React.Component {

  render() {
    if (this.props.isActive && this.props.isCurrent) {
      let note = new Sound(audioContext);
      let now = audioContext.currentTime;
      note.play(this.props.frequency, now, this.props.duration);
    }
    var activeState = this.props.isActive ? 'active' : 'inactive';
    return React.createElement('button', {
      className: `tile ${activeState}`,
      style: { fontSize: `${this.props.duration / 500}em` },
      onClick: (beatIndex, tileIndex) => this.props.onClick(this.props.beatIndex, this.props.tileIndex)
    });
  }
}

class Sound {
  //edited from https://css-tricks.com/introduction-web-audio-api/#article-header-id-4

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
    this.gainNode.gain.setValueAtTime(1, this.context.currentTime);

    this.oscillator.start(time);
    this.stop(time, duration);
  }

  stop(time, duration) {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, time + duration / 1000);
    this.oscillator.stop(time + duration / 1000);
  }

}

var audioContext = new (window.AudioContext || window.webkitAudioContext)();
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));