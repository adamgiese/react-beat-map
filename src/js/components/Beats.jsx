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

    let map = [];
    const params = new URL(document.location).searchParams;
    if (params.get('beats')) {
      map = params.get('beats').split('|').map(
        (beat) => {
          return parseInt(beat, 36) //convert to decimal
          .toString(2) //convert to binary
          .padStart(frequencies.length, 0) //ensure each array is the correct length
          .split('') // set as array
          .map(
            (tile) => {
              return (tile === "1") ? true : false;
            }
          );
        }
      );
    } else {
      map = Array(durations.length).fill(null);
      map.forEach(function(beat, index) {
        map[index] = Array(frequencies.length).fill(false);
      });
    }

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

    const mapURL = newMap.map(
      (beat) => {
        return parseInt(beat.map(
          (tile) => {
            return tile ? 1 : 0;
          }
        ).join(''), 2).toString(36);
      }
    ).join('|');
    console.log(mapURL);

    if (history.replaceState) {
      const historyState = {
        beats: mapURL
      };
      const url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}${window.location.pathname}?beats=${mapURL}`;

      history.pushState(historyState, 'Beats', url);
    }

    this.setState({
      map: newMap
    })
  }

  componentDidMount() {
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
