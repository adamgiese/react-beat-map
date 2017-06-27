import React from 'react';
import Notes from './Notes.jsx';
import Beat from './Beat.jsx';

export default class Beats extends React.Component {
  constructor() {
    super(); 
    const durations = Array(12).fill(200);
    const frequencies = [
      Notes('C',4),
      Notes('D',4),
      Notes('E',4),
      Notes('G',4),
      Notes('A',4),
      Notes('C',5),
      Notes('D',5),
      Notes('E',5),
      Notes('G',5),
    ];

    let map = Array(durations.length).fill(null);
    map.forEach(function(beat, index) {
      map[index] = Array(frequencies.length).fill(false);
    });

    this.state = {
      current: 0,
      frequencies: frequencies,
      durations: durations,
      map: map
    };  
  }

  handleTileClick(beatIndex, tileIndex) {
    let newMap = this.state.map.slice();
    newMap[beatIndex][tileIndex] = !newMap[beatIndex][tileIndex];

    this.setState({
      map: newMap
    })
  }

  componentDidMount() {
    console.log('iterate?');
    const iterate = () => {
      const newCurrent = (this.state.current + 1 >= this.state.durations.length ? 0 : this.state.current + 1);
      const duration = this.state.durations[newCurrent];

      this.setState({
        'current': newCurrent
      });
      setTimeout(iterate, duration)
    };
    iterate();  
  }
  
  render() {
    const beats = this.state.durations.map(
      (beat, index) => {
        const isCurrent = this.state.current === index;
        return <Beat
          activeTiles={this.state.map[index]}
          beatIndex={index}
          context={this.props.context}
          duration={this.state.durations[index]}
          frequencies={this.state.frequencies}
          isCurrent={isCurrent}
          onClick = {(beatIndex, tileIndex) => this.handleTileClick(beatIndex, tileIndex)}
        />
      }
    );
    return <div className='beats'>{beats}</div>;
  }
}
