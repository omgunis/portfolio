import React, { PropTypes } from 'react';
import ProjectListRow from './ProjectListRow';

const ProjectList = ({ projects }) => {
  return (
    <div className="row">
      { projects.map(project =>
        <ProjectListRow key={ project.id } project={ project } />
      )}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;
