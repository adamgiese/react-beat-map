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
  const state = getState();
  stateToUrl(state);
  next(action);
};


/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(uriMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
