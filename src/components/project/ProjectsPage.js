import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../../actions/projectActions';
import ProjectList from './ProjectList';
import { browserHistory } from 'react-router';

{/* Main view for all projects page. /projects */}
class ProjectsPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.redirectToProjectsPage = this.redirectToProjectsPage.bind(this);
  }

  projectRow(project, index){
    return <div key={ index }>{ project.title }</div>;
  }

  redirectToProjectsPage() {
    browserHistory.push('/project');
  }

  render(){
    const { projects } = this.props;
    return(
      <div>
        <h1>Projects</h1>
        <ProjectList  projects={ projects } />
      </div>
    );
  }
}

ProjectsPage.propTypes = {
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
