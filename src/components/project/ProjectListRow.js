import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ProjectModal from './ProjectModal';

const ProjectListRow = ({ project }) => {

  return (
    <div className="col-xs-12 col-md-4">
      <div>Type: { project.type }</div>
      <div>Description: { project.description }</div>
      <div>Objectives: { project.objectives }</div>
      <div>Tech: { project.tech }</div>
      <div>Link to Site: <a href={ project.linkToSite } target="_blank">{ project.title }</a></div>
      <div><Link to={ '/project/' + project.id }>View Project</Link></div>
      <ProjectModal project={ project }/>
    </div>
  );
};

ProjectListRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectListRow;
