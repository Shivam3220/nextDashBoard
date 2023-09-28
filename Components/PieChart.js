

import React from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = () => {

  return (
  <Pie data={{
    labels: ["Blue", "Red", "Yellow", "Green"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  }} ></Pie>
                            
                       
  )
}

export default PieChart