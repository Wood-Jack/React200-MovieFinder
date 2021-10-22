/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import store from './rootStore';
import  App  from './app';


=======
<<<<<<< HEAD
import store from './rootStore';
import  App  from './app';

=======
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';



import App from './app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore( 
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
>>>>>>> b9d0ca6c8606e6834ae9ae82aa15b84c5fbb33a2

/* eslint-enable */

>>>>>>> 744a98eee8a250c78db5e7aff7afe5e5a4a57396
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  
  document.getElementById('root')
);
