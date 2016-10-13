import React from 'react';

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
