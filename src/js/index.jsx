/* global document, window */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index';
import App from './components/App.jsx';
import initialState from './initialState';
import { stateToUrl } from './utils/uri';
/* eslint-ensable no-unused-vars */

require('./../scss/styles.scss');

const uriMiddleware = ({ getState }) => next => (action) => {
  next(action);
  const state = getState();
  stateToUrl(state);
};


/* eslint-disable no-underscore-dangle */
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const enhancer = reduxDevTools ? compose(applyMiddleware(uriMiddleware), reduxDevTools) : applyMiddleware(uriMiddleware);
const store = createStore(
  reducer,
  initialState,
  enhancer,
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
