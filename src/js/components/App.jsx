import React from 'react';
import Beats from './Beats.jsx';

export default class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      context: new (window.AudioContext || window.webkitAudioContext)(),
    }
  }
  render() {
    return(
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

