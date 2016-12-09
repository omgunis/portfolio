import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class SkillsPage extends React.Component {
  render() {
    return(
      <div>
        <h1>Skills</h1>
        <p>Fulls stack web developer with a background in game design.</p>

        Here is a list of all my skills
        <Chart
        chartType="ScatterChart"
        data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
        options={{}}
        graph_id="ScatterChart"
        width="100%"
        height="400px"
        legend_toggle
       />

      </div>
    );
  }
}

export default SkillsPage;
