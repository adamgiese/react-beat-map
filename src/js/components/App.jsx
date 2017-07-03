/* global URL, document, window */
/* eslint-disable no-unused-vars */
import React from 'react';
import Beats from './Beats.jsx';
import { scales } from './Utils.jsx';
/* eslint-enable no-unused-vars */

export default class App extends React.Component {
  constructor() {
    super();
    const durations = Array(12).fill(200);
    const params = new URL(document.location).searchParams;

    let frequencies = [];
    if (params.get('scale')) {
      frequencies = scales(params.get('scale'));
    } else {
      frequencies = scales('pentatonic');
    }
    this.state = {
      context: new (window.AudioContext || window.webkitAudioContext)(),
      durations,
      frequencies,
    };
  }
  render() {
    return (
      <div className='app'>
        <Beats
          context={this.state.context}
          durations={this.state.durations}
          frequencies={this.state.frequencies}
        />
      </div>
    );
  }
}
