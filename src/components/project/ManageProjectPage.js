import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../../actions/projectActions';
import ProjectForm from './ProjectForm';
import toastr from 'toastr';

export class ManageProjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      project: Object.assign({}, props.project),
      errors: {}
    };
  }

  render(){
    return(
      <div>
        <ProjectForm
          project = { this.state.project }
        />
      </div>
    );
  }
}

ManageProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageProjectPage.contextTypes = {
  router: PropTypes.object
};

function getProjectById(projects, id){
  const project = projects.filter(project => project.id == id);
  if(project.length) return project[0];
  return null;
}

function mapStateToProps(state, ownProps){
  const projectId = ownProps.params.id;

  let project = { id: "", title: "", type: "", linkToSite: "", description: "", objectives: "", tech: ""};

  if(projectId && state.projects.length > 0) {
    project = getProjectById(state.projects, projectId);
  }

  return {
    project: project
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProjectPage);
