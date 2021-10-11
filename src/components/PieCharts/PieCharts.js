import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import "./PieCharts.css";

const state = {
  labels: ['Python', 'Java', 'JavaScript',
           'C#', 'PHP'],
  datasets: [
    {
      label: 'Languages',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [29.93, 17.78, 8.79, 6.73, 5.76]
    }
  ]
}

function PieCharts() {
    return (
        <div className="container">
            <div className="pie-chart" >
            <span className="font-languages">Top Computer Languages</span>
            <br/>
            <a  style={{ color: 'red', size: "10px" }} href="https://statisticstimes.com/tech/top-computer-languages.php" target="_blank">Source</a>
            <Doughnut
            data={state}
            
            options={{
                title:{
                display:true,
                text:'Top Computer Languages',
                fontSize:10
                },
                legend:{
                display:true,
                position:'right'
                },
                maintainAspectRatio: true,
            }}
            />
        </div>
      </div>
    )
}

export default PieCharts;