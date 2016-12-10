import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ProjectModal from './ProjectModal';

{/* View for each individual project, imported into ProjectList component */}

const ProjectListRow = ({ project }) => {
  return (
    <div className="row project">
      <div className="col-md-6">

      </div>
      <div className="col-md-4">
        <div>{ project.type }</div>
        <div>{ project.description }</div>
        <div>{ project.objectives }</div>
        <div>{ project.tech }</div>
        <div>View live site: <a href={ project.linkToSite } target="_blank">{ project.title }</a></div>
        <div><Link to={ '/project/' + project.id }>View Project</Link></div>
        <ProjectModal project={ project }/>
      </div>
    </div>
  );
};

ProjectListRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectListRow;
