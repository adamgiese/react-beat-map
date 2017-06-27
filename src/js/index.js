import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import WebFont from 'webfontloader';

//styling
require('./../scss/styles.scss');
WebFont.load({
  google: {
    families: ['Lato']
  }
});

//polyfill for older browswers
require('es6-promise').polyfill();

// string padStart polyfill
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength,padString) {
    targetLength = targetLength>>0; //floor if number or convert non-number to 0;
    padString = String(padString || ' ');
    if (this.length > targetLength) {
      return String(this);
    }
    else {
      targetLength = targetLength-this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0,targetLength) + String(this);
    }
  };
}

//app init
ReactDOM.render(<App />, document.getElementById('root'));
