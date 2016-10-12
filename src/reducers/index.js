import { combineReducers } from 'redux';
import projects from './projectReducer';
import contacts from './contactReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // es6 short hand property names
  contacts,
  projects,
  ajaxCallsInProgress
});

export default rootReducer;
