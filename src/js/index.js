import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Notes from './components/Notes.jsx';

require('./../scss/styles.scss');
const durations = Array(12).fill(200);
const frequencies = [
  Notes('C',4),
  Notes('Cs',4),
  Notes('D',4),
  Notes('Ds',4),
  Notes('E',4),
  Notes('F',4),
  Notes('Fs',4),
  Notes('G',4),
  Notes('Gs',4),
  Notes('A',4),
  Notes('Bb',4),
  Notes('B',4),
  Notes('C',5),
];

ReactDOM.render(
  <App 
    durations={durations}
    frequencies={frequencies}
  />
  , document.getElementById('root'));
