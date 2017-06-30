/* global window */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Beats from './Beats.jsx';
/* eslint-enable no-unused-vars */

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      context: new (window.AudioContext || window.webkitAudioContext)(),
    };
  }
  render() {
    return (
      <div className='app'>
        <Beats
          context={this.state.context}
          durations={this.props.durations}
          frequencies={this.props.frequencies}
        />
      </div>
    );
  }
}

App.propTypes = {
  durations: PropTypes.arrayOf(PropTypes.number).isRequired,
  frequencies: PropTypes.arrayOf(PropTypes.number).isRequired,
};
