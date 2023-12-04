import React from 'react'
import './adminNav.scss'
import { HiOutlineHome } from "react-icons/hi";
import { FiUsers} from "react-icons/fi"; 
import {MdOutlineReport} from "react-icons/md";
import {AiOutlineLogout} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import instance from '../../config/axiosConfig';

export default function AdminNav() {
    const navigate = useNavigate();

    const logout = () => {
        instance.post('api/admin/logout').then((res) => {
            console.log(res.data);
            window.location.reload(false);
        }).catch((err) => {
            console.log(err);
            window.location.reload(false);
        })
    }
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
                <p style={{cursor: 'pointer'}}  >Member Management</p>
            </div>
                <div className="Line">|</div>

            <div className="NI" onClick={() => navigate('/report')} >
                <MdOutlineReport style={{cursor: 'pointer'}}/>
                <p style={{cursor: 'pointer'}}  >Seller Verification</p>
            </div>
            <div className="Line">|</div>

            <div className="NI" onClick={logout}>
                <AiOutlineLogout style={{cursor: 'pointer'}}/>
                <p style={{cursor: 'pointer'}}>Log Out</p>
            </div>
        </div>
    </div>
  )
}
