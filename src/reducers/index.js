import { combineReducers } from 'redux';
import projects from './projectReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // es6 short hand property names
  projects,
  ajaxCallsInProgress
});

export default rootReducer;
