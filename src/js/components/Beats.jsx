/* global URL, document, window, history */
/* eslint-disable no-unused-vars */
import React from 'react';
import Beat from './Beat.jsx';
import { mapFromQuery, mapToQuery } from './Utils.jsx';
/* eslint-ensable no-unused-vars */

export default class Beats extends React.Component {
  constructor(props) {
    super(props);

    let map = [];
    const params = new URL(document.location).searchParams;
    if (params.get('beats')) {
      map = mapFromQuery(params.get('beats'), props.frequencies.length);
    } else {
      map = Array(props.durations.length).fill(null);
      map.forEach((beat, index) => {
        map[index] = Array(props.frequencies.length).fill(false);
      });
    }

    this.state = {
      current: 0,
      map,
    };
  }

  handleTileClick(beatIndex, tileIndex) {
    const newMap = this.state.map.slice();
    newMap[beatIndex][tileIndex] = !newMap[beatIndex][tileIndex];

    const mapURL = mapToQuery(newMap);
    if (history.replaceState) {
      const historyState = {
        beats: mapURL,
      };
      const url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}${window.location.pathname}?beats=${mapURL}`;

      history.pushState(historyState, 'Beats', url);
    }

    this.setState({
      map: newMap,
    });
  }

  componentDidMount() {
    const iterate = () => {
      const newCurrent = (this.state.current + 1 >= this.props.durations.length ? 0 : this.state.current + 1);
      const duration = this.props.durations[newCurrent];

      this.setState({
        current: newCurrent,
      });
      setTimeout(iterate, duration);
    };
    iterate();
  }

  render() {
    const beats = this.props.durations.map(
      (beat, index) => {
        const isCurrent = this.state.current === index;
        return <Beat
          key={index}
          activeTiles={this.state.map[index]}
          beatIndex={index}
          context={this.props.context}
          duration={this.props.durations[index]}
          frequencies={this.props.frequencies}
          isCurrent={isCurrent}
          onClick = {(beatIndex, tileIndex) => this.handleTileClick(beatIndex, tileIndex)}
        />;
      }
    );
    return <div className='beats'>{beats}</div>;
  }
}
