/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Beat from './Beat.jsx';
import { mapFromQuery, mapToQuery, stateToUrl } from '../utils/uri';
import scales from '../utils/scales';
/* eslint-ensable no-unused-vars */

export default class Beats extends React.Component {
  constructor() {
    super();
    this.state = {
      current: -1,
    };
  }

  componentDidMount() {
    const iterate = () => {
      const newCurrent = (this.state.current + 1 >= this.props.map.length ? 0 : this.state.current + 1);

      this.setState({
        current: newCurrent,
      });
      setTimeout(iterate, this.props.duration); // TODO remove
    };
    iterate();
  }

  render() {
    const beats = this.props.map.map(
      (beat, index) => {
        const isCurrent = this.state.current === index;
        return <Beat
          key={index}
          activeTiles={this.props.map[index]}
          beatIndex={index}
          context={this.props.context}
          duration={this.props.duration}
          frequencies={scales(this.props.scale)}
          isCurrent={isCurrent}
        />;
      }
    );
    return <div className='beats'>{beats}</div>;
  }
}

Beats.propTypes = {
  context: PropTypes.object.isRequired,
};
