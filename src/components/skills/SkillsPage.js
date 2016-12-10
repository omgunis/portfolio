import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class SkillsPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      options:{
        title: 'My Daily Activities',
        pieHole: 0.6,
        legend: 'none',
        pieStartAngle: 102,
        animation:{
          duration: 1000,
          easing: 'out',
        },
        slices: [{}, {color:'white'}]
      },
      data:[
        ['Task', 'Hours per Day'],
        ['Work',     10],
        ['Empty', 4]
      ]
    };
  }
  render() {
    return(
      <div>
        <h1>Skills</h1>
        <p>Fulls stack web developer with a background in game design.</p>

        Here is a list of all my skills
        <Chart
          chartType="PieChart"
          data={this.state.data}
          options={this.state.options}
          graph_id="donutchart"
          width="900px"
          height="500px"
          legend_toggle
       />
      </div>
    );
  }
}

export default SkillsPage;
