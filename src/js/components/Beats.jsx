/* global URL, document */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Beat from './Beat.jsx';
import { mapFromQuery, mapToQuery, stateToUrl } from '../utils/uri';
import scales from '../utils/scales';
/* eslint-ensable no-unused-vars */

export default class Beats extends React.Component {
  constructor(props) {
    super(props);

    const params = new URL(document.location).searchParams;

    const scale = (params.get('scale') ? params.get('scale') : 'pentatonic');
    const duration = (Number(params.get('duration')) ? Number(params.get('duration')) : 200);
    const frequencies = scales(scale);

    let map = [];
    if (params.get('beats')) {
      map = mapFromQuery(params.get('beats'), frequencies.length);
    } else {
      map = Array(12).fill(null);
      map.forEach((beat, index) => {
        map[index] = Array(frequencies.length).fill(false);
      });
    }

    this.state = {
      current: -1,
      map,
      scale,
      duration,
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
      const newCurrent = (this.state.current + 1 >= this.state.map.length ? 0 : this.state.current + 1);

      this.setState({
        current: newCurrent,
      });
      setTimeout(iterate, this.state.duration);
    };
    iterate();
  }

  render() {
    const beats = this.state.map.map(
      (beat, index) => {
        const isCurrent = this.state.current === index;
        return <Beat
          key={index}
          activeTiles={this.state.map[index]}
          beatIndex={index}
          context={this.props.context}
          duration={this.state.duration}
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
};
