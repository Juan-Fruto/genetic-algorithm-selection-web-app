import React, { Component } from 'react';
import { fitnessStatistics } from '../api/geneticAlgorithm';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false
}

var data : {labels: string[], datasets: {label: string, data: number[], backgroundColor: string[], borderColor: string[], borderWidth: number}[]} = {
  labels: [],
  datasets: [
      {
          label: 'Percentage',
          data: [],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
      },
  ],
};

const dataApi = await fitnessStatistics({
  chromosomes: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
});

dataApi.data.forEach((e => {
  data.labels.push(e.fitness.toString()),
  data.datasets[0].data.push(e.percentage)
}));

export class Statistics extends Component {
  render() {
    return (
      <div>
        <p className="title"><b>Pie graph of fitness</b></p>
        <div className="container" style={{width:"450px", height:"250px"}}>
            <div style={{width:"100%", height:"100%", padding:"10px 0"}}>
              <Pie data={data} options={options}></Pie>                      
            </div>
        </div>
      </div>
    )
  }
}




export default Statistics;