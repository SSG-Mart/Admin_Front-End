import React from 'react'
import { useState } from "react";
import './chart.scss'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import instance from '../../config/axiosConfig';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function Chart() {

  const [itemdata, setitemData] = useState([])

  useState(() => {
    instance.get('/api/home')
      .then(res => {
        setitemData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  })
  //let x = { itemdata.sellerCount };

  const data = {
    labels: [""],
    datasets: [
      {
        label: "Buyer",
        data: [itemdata.memberCount],
        // data: [0.7, 2, 2, 1.5, 3, 3.1],
        backgroundColor: "Lightred",
        borderColor: "red",
        borderWidth: 1,
      },
      {
        label: "Seller",
        // data: [0, 1.8, 4, 5, 5, 6],
        data: [itemdata.sellerCount],
        backgroundColor: "LightGreen",
        borderColor: "Green",
        pointBorderColor: "transparent",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div className="chart-container">
      <div className="chart-header">Active Chart</div>
      <div className="chart">
        <Bar data={data} options={options}></Bar>
        <div className="colors-title">

          <div style={{ display: "flex", alignItems: 'center' }}>
            <div className="green"></div>
            <p style={{ paddingLeft: '5px' }}>Seller</p>
          </div>

          <div style={{ display: "flex", marginTop: '1px', alignItems: 'center' }}>
            <div className="red"></div>
            <p style={{ paddingLeft: '5px' }}>Buyer</p>
          </div>

        </div>
      </div>
    </div>
  )
}
