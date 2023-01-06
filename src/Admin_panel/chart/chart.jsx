import React from 'react'
import './chart.scss'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function chart() {
  const data = {
    labels: [" ", " ", " ", " ", " ", " "],
    datasets: [
      {
        label: "Buyer",
        data: [0, 1.8, 4, 5, 5, 6],
        // data: [0.7, 2, 2, 1.5, 3, 3.1],
        backgroundColor: "transparent",
        borderColor: "red",
        pointBorderColor: "transparent",
      },
      {
        label: "Seller",
        // data: [0, 1.8, 4, 5, 5, 6],
        data: [0.7, 2, 2, 1.5, 3, 3.1],
        backgroundColor: "transparent",
        borderColor: "Green",
        pointBorderColor: "transparent",
      },
    ],
  };

  const options = {};

  return (
    <div className="chart-container">
      <div className="chart-header">Active Chart</div>
      <div className="chart">
        <Line data={data} options={options}></Line>
        <div className="colors-title">

          <div style={{display:"flex", alignItems:'center'}}>
            <div className="green"></div>
            <p style={{paddingLeft:'5px'}}>Seller</p>
          </div>

          <div style={{display:"flex", marginTop:'1px', alignItems:'center'}}>
            <div className="red"></div>
            <p style={{paddingLeft:'5px'}}>Buyer</p>
          </div>

        </div> 
      </div>
  </div>
  )
}
