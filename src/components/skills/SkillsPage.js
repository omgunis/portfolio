import React from 'react';
import { render } from 'react-dom';

class SkillsPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <h1>Skills</h1>
        <p>Fulls stack web developer with a background in game design.</p>

        Here is a list of all my skills
      </div>
    );
  }
}

export default SkillsPage;
