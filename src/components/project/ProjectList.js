import React, { PropTypes } from 'react';
import ProjectListRow from './ProjectListRow';

{/* Maps all projects into single component, imported into main ProjectsPage */}
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
