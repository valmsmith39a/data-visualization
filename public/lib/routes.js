import React from 'react';
import { Route } from 'react-router';
import RootComponent from './components/index.js';

export default (
  <div>
    <Route path='/' component={RootComponent}></Route>
  </div>
);
