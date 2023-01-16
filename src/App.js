import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from './Admin_panel/admin_panel';
// import Home from './Admin_panel/adminHome/adminHome';
import Login from './auth/login';
import Member from './Admin_panel/memberSection/member'
import Report from './Admin_panel/reportSection/report'
import Nav from './Admin_panel/adminNav/adminNav';
import './App.css'

function App() {
  return (

    <div className='app-container'>

      <>
        <Nav />
      </>

      <>
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<AdminPanel />} />

      <Route path="/auth" element={<Login />} />

      <Route path="/member" element={<Member />} />

      <Route path="/report" element={<Report />} />

      <Route path="/report" element={<Report />} />

    </Routes>
  </BrowserRouter>

      </>

  </div>

  );
}

export default App;
