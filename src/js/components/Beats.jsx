import React from 'react';
import Beat from './Beat.jsx';

export default class Beats extends React.Component {
  constructor(props) {
    super(props); 

    let map = [];
    const params = new URL(document.location).searchParams;
    if (params.get('beats')) {
      map = params.get('beats').split('|').map(
        (beat) => {
          return parseInt(beat, 36) //convert to decimal
          .toString(2) //convert to binary
          .padStart(props.frequencies.length, 0) //ensure each array is the correct length
          .split('') // set as array
          .map(
            (tile) => {
              return (tile === "1") ? true : false;
            }
          );
        }
      );
    } else {
      map = Array(props.durations.length).fill(null);
      map.forEach(function(beat, index) {
        map[index] = Array(props.frequencies.length).fill(false);
      });
    }

    this.state = {
      current: 0,
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
      const newCurrent = (this.state.current + 1 >= this.props.durations.length ? 0 : this.state.current + 1);
      const duration = this.props.durations[newCurrent];

      this.setState({
        'current': newCurrent
      });
      setTimeout(iterate, duration)
    };
    iterate();  
  }
  
  render() {
    const beats = this.props.durations.map(
      (beat, index) => {
        const isCurrent = this.state.current === index;
        return <Beat
          activeTiles={this.state.map[index]}
          beatIndex={index}
          context={this.props.context}
          duration={this.props.durations[index]}
          frequencies={this.props.frequencies}
          isCurrent={isCurrent}
          onClick = {(beatIndex, tileIndex) => this.handleTileClick(beatIndex, tileIndex)}
        />
      }
    );
    return <div className='beats'>{beats}</div>;
  }
}
