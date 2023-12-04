import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import {useNavigate, Navigate} from 'react-router-dom'

import Login from './Admin_panel/Authontication/Login';
import Member from "./Admin_panel/memberSection/member";
import Report from "./Admin_panel/reportSection/report";
import AdminPanel from "./Admin_panel/admin_panel";
import instance from './config/axiosConfig';

export default function MainRoutes() {

  const navigation = useNavigate()

  const [auth, setAuth] = useState(null)
  const [trigger, setTrigger] = useState(false)

  useEffect(()=> {
    const checkAuth = async() => {
      try{
        const res = await instance.get('/api/admin/check-auth')
        console.log(res.data)
        if(res.status === 200) setAuth(true)
        else setAuth(false)
      }
      catch{
        setAuth(false)
        navigation('/auth')
      }
      
    
    }

    checkAuth()

  },[trigger])

  if(auth !== null) return (
    <Routes>
      <Route path="/auth" element={!auth ? <Login setTrigger={setTrigger} /> : <Navigate to="/" replace={true} />} />
      
      <Route path="/" element={auth ? <AdminPanel /> : <Navigate to="/auth" replace={true} />} />

      <Route path="/member" element={auth ? <Member /> : <Navigate to="/auth" replace={true} />} />

      <Route path="/report" element={auth ? <Report /> : <Navigate to="/auth" replace={true} />} />

      <Route path="/report" element={auth ? <Report /> : <Navigate to="/auth" replace={true} />} />
    </Routes>
  )
}
