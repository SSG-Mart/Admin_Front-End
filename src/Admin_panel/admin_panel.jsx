import React from 'react'
import './admin_panel.scss'
import AdminHome from './adminHome/adminHome'

export default function Admin_panel() {
  return (
    <div className='admin-container'>

        <div className='home'>
            <AdminHome />
        </div>
        
    </div>
  )
}
