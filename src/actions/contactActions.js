import * as types from './actionTypes';
import contactApi from '../api/contactsApi';
import { ajaxCallError, beginAjaxCall } from './ajaxStatusActions';

export function createContactSuccess(contact){
  return { type: types.CREATE_CONTACT_SUCCESS, contact };
}

export function saveContact(contact){
  return function(dispatch, getState){
    dispatch(beginAjaxCall());
    return contactApi.saveContact(contact).then(contact => {
      dispatch(createContactSuccess(contact));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
