/* global document */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Notes from './components/Notes.jsx';
/* eslint-ensable no-unused-vars */

require('./../scss/styles.scss');

const durations = Array(12).fill(200);
const frequencies = [
  Notes('G', 3),
  Notes('A', 3),
  Notes('C', 4),
  Notes('D', 4),
  Notes('E', 4),
  Notes('G', 4),
  Notes('A', 4),
  Notes('C', 5),
  Notes('D', 5),
  Notes('E', 5),
];

ReactDOM.render(
  <App
    durations={durations}
    frequencies={frequencies}
  />
  , document.getElementById('root'));
