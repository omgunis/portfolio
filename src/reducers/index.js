import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // es6 short hand property names
  ajaxCallsInProgress
});

export default rootReducer;
