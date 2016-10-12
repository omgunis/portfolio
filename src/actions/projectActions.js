import * types from './actionTypes';
import projectApi from '../api/projectsApi';
import { ajaxCallError, beginAjaxCall } from './ajaxStatusActions';

export function loadProjectsSuccess(projects){
  return { type: types.LOAD_PROJECTS_SUCCESS, projects };
}

export function loadProjects(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return projectApi.getAllProjects().then(projects => {
      dispatch(loadProjectsSuccess(projects));
    }).catch(error => {
      throw(error);
    });
  };
}
