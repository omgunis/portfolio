import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function contactReducer(state = initialState.contacts, action){
  switch(action.type){
    case types.CREATE_CONTACT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.contact)
      ];

    default:
      return state;
  }
}
