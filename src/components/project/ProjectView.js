import React from 'react';

{/* View for single project, /project/:id, imported into ManageProjectPage */}

const ProjectView = ({ project }) => {
 return (
    <form>
      <h1>{ project.title }</h1>
    </form>
  );
};

ProjectView.propTypes = {
  project: React.PropTypes.object.isRequired
}

export default ProjectView;
