/* global window */
/* eslint-disable no-unused-vars */
import React from 'react';
import BeatsContainer from '../containers/BeatsContainer.jsx';
/* eslint-enable no-unused-vars */

const App = () => {
  const context = new (window.AudioContext || window.webkitAudioContext)();
  return (
    <div className='app'>
      <BeatsContainer context={context} />
    </div>
  );
};

export default App;
