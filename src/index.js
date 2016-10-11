/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore.dev';
import { Provider } from 'react-redux';                // attaches store to container components
import { Router, browserHistory } from 'react-router';
import routes from './routes';
// import { loadCourses } from './actions/courseActions';
// import { loadAuthors } from './actions/authorActions';
// import './styles/styles.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/toastr/build/toastr.min.css';

// const store = configureStore();
//
// store.dispatch(loadCourses());
// store.dispatch(loadAuthors());

render(
  // Provider wraps the entire app so it can be connected to the redux store
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('app')

);
