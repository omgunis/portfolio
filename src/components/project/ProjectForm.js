import React from 'react';

const ProjectForm = ({ project }) => {
  return (
    <form>
      <h1>{ project.title }</h1>
    </form>
  );
};

ProjectForm.propTypes = {
  project: React.PropTypes.object.isRequired
}

export default ProjectForm;
