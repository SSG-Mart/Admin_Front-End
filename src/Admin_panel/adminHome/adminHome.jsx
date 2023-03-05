import React from 'react'
import './adminHome.scss'
import Chart from '../chart/chart';
import axios from "axios";
import { useState, useEffect } from "react";

export default function AdminHome() {
    const [itemdata, setitemData] = useState([])

    useEffect(()=>{
        axios.get("/api/home")
        .then(res => {
          if(res.data !== "No data found"){
            setitemData(res.data)
          }
          else console.log("No data found");
        })
        .catch(err => console.log(err))
      })

      console.log(itemdata)

  return (
    <div className='admin-home' id='home'>
        <div className='body'>
            <div className='Admin-card'>
                <div className='item'>
                    <div className='item-header'>Items</div>
                    <div className='item-body'>
                        <div className='solide'>
                            <div className='solide-head'>Solide</div>
                            <div className='solide-number'>50</div>
                        </div>
                        <div className='food'>
                            <div className='food-head'>Foods</div>
                            <div className='food-number'>50</div>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-header'>Sellers</div>
                    <div className='card-number'>50</div>
                </div>
                <div className='card'>
                    <div className='card-header'>Member</div>
                    <div className='card-number'>50</div>
                </div>
            </div>
            <div className='chart'>
                <Chart />
            </div>
        </div>
    </div>
  )
}
