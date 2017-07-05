/* global window */
/* eslint-disable no-unused-vars */
import React from 'react';
import Beats from './Beats.jsx';
/* eslint-enable no-unused-vars */

export default class App extends React.Component {
  constructor() {
    super();
    const durations = Array(12).fill(200);

    this.state = {
      context: new (window.AudioContext || window.webkitAudioContext)(),
      durations,
    };
  }
  render() {
    return (
      <div className='app'>
        <Beats
          context={this.state.context}
          durations={this.state.durations}
        />
      </div>
    );
  }
}
