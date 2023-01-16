import React from 'react'
import './adminNav.scss'
import { HiOutlineHome } from "react-icons/hi";
import { FiUsers} from "react-icons/fi"; 
import {MdOutlineReport} from "react-icons/md";
import {AiOutlineLogout} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export default function AdminNav() {
    const navigate = useNavigate();;
  return (
    
    <div className='navigation-container'>
        <div className='container-name'>
            <p>SSG Mart - Admin</p>
        </div>

        <div className='navigation-bar'>

            <div className="NI" onClick={() => navigate('/') } > 
                <HiOutlineHome style={{cursor: 'pointer'}}/>
                <p style={{cursor: 'pointer'}} >Home</p>
            </div>
                <div className="Line">|</div>

            <div className="NI" onClick={() => navigate('/member')}>
                <FiUsers style={{cursor: 'pointer'}}/>
                <p style={{cursor: 'pointer'}}  >Members</p>
            </div>
                <div className="Line">|</div>
                
            <div className="NI" onClick={() => navigate('/report')} >
                <MdOutlineReport style={{cursor: 'pointer'}}/>
                <p style={{cursor: 'pointer'}}  >Report</p>
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
