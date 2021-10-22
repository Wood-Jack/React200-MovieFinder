/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './rootStore';
import  App  from './app';

/* eslint-enable */
render(
  <Provider store={ store }>
    <App />
  </Provider>,

  document.getElementById('root')
);
