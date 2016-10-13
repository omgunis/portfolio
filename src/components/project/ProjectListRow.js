import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

const ProjectListRow = ({ project }) => {

  return (
    <div className="col-xs-12 col-md-4">
      <a href={ project.linkToSite } target="_blank">Link To Site</a><br/>
      <div>{ project.title } <Link to={ '/project/' + project.id }>View</Link></div>
      <div>{ project.type }</div>
      <div>{ project.description }</div>
      <div>{ project.objectives }</div>
      <div>{ project.tech }</div>
    </div>
  );
};

ProjectListRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectListRow;
