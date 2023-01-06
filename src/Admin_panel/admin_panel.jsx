import React from 'react'
import './admin_panel.scss'
import Member from './memberSection/member';
import Filter from './filterSection/filter';
import Chart from './chart/chart';
import { HiOutlineHome, HiOutlineRefresh } from "react-icons/hi";
import { BiLogOut} from "react-icons/bi"; 

export default function Admin_panel() {
  return (
    <div className='admin-container'>
        <div className='container-name'>
            <p>SSG Mart - Admin</p>
        </div>

        <div className='navigation-bar'>

            <div className="NI">
                <HiOutlineHome />
                Home
            </div>
                <div className="Line">|</div>

            <div className="NI">
                <HiOutlineRefresh />
                Refresh
            </div>
                <div className="Line">|</div>

            <div className="NI">
                <BiLogOut />
                Log Out
            </div>

        </div>

        <div className='body'>
            <div className='left'> 
                <Member />
            </div>

            <div className='right'>
                <div className='top'>
                    <Chart />
                </div>
                <div className='down'>
                    <Filter />
                </div>
            </div>
        </div>
    </div>
  )
}
