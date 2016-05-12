import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { compose, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducers/index';
import routes from './routes.js';

const createStoreWithMiddleware = compose(
  applyMiddleware(promise)
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
