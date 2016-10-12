import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ProjectListRow = ({ project }) => {
  return (
    <div className="col-xs-12 col-md-4">
      <a href={ project.linkToSite } target="_blank">Link To Site</a>
      <Link to={ '/project/' + project.id }>{ project.title }</Link>
      { project.type }
      { project.description }
      { project.objectives }
      { project.tech }
    </div>
  );
};

ProjectListRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectListRow;
