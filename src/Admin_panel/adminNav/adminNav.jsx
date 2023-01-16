import React from 'react'
import './adminNav.scss'
import { HiOutlineHome } from "react-icons/hi";
import { FiUsers} from "react-icons/fi"; 
import {MdOutlineReport} from "react-icons/md";
import {AiOutlineLogout} from "react-icons/ai";

export default function adminNav() {
  return (
    <div className='navigation-container'>
        <div className='container-name'>
            <p>SSG Mart - Admin</p>
        </div>

        <div className='navigation-bar'>

            <div className="NI"> 
                <HiOutlineHome style={{cursor: 'pointer'}}/>
                <p style={{cursor: 'pointer'}}>Home</p>
            </div>
                <div className="Line">|</div>

            <div className="NI">
                <FiUsers style={{cursor: 'pointer'}}/>
                <p style={{cursor: 'pointer'}}>Members</p>
            </div>
                <div className="Line">|</div>
                
            <div className="NI">
                <MdOutlineReport style={{cursor: 'pointer'}}/>
                <p style={{cursor: 'pointer'}}>Report</p>
            </div>
            <div className="Line">|</div>

            <div className="NI">
                <AiOutlineLogout style={{cursor: 'pointer'}}/>
                <p style={{cursor: 'pointer'}}>Log Out</p>
            </div>
        </div>
    </div>
  )
}
