/* global URL, document */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Beat from './Beat.jsx';
import { mapFromQuery, mapToQuery, stateToUrl, scales } from './Utils.jsx';
/* eslint-ensable no-unused-vars */

export default class Beats extends React.Component {
  constructor(props) {
    super(props);

    const params = new URL(document.location).searchParams;

    const scale = (params.get('scale') ? params.get('scale') : 'pentatonic');
    const frequencies = scales(scale);

    let map = [];
    if (params.get('beats')) {
      map = mapFromQuery(params.get('beats'), frequencies.length);
    } else {
      map = Array(props.durations.length).fill(null);
      map.forEach((beat, index) => {
        map[index] = Array(frequencies.length).fill(false);
      });
    }


    this.state = {
      current: 0,
      map,
      scale,
    };
  }

  handleTileClick(beatIndex, tileIndex) {
    const newMap = this.state.map.slice();
    newMap[beatIndex][tileIndex] = !newMap[beatIndex][tileIndex];

    this.setState({
      map: newMap,
    });
    stateToUrl(this.state);
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
          frequencies={scales(this.state.scale)}
          isCurrent={isCurrent}
          onClick = {(beatIndex, tileIndex) => this.handleTileClick(beatIndex, tileIndex)}
        />;
      }
    );
    return <div className='beats'>{beats}</div>;
  }
}

Beats.propTypes = {
  context: PropTypes.object.isRequired,
  durations: PropTypes.arrayOf(PropTypes.number).isRequired,
};
