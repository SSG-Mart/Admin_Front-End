import React from 'react'
import{ Routes, Route } from 'react-router-dom'

import Login from "./auth/login";
import Member from "./Admin_panel/memberSection/member";
import Report from "./Admin_panel/reportSection/report";
import AdminPanel from "./Admin_panel/admin_panel";

export default function MainRoutes() {
  return (
    <Routes>
          <Route path="/" element={<AdminPanel />} />

          <Route path="/auth" element={<Login />} />

          <Route path="/member" element={<Member />} />

          <Route path="/report" element={<Report />} />

          <Route path="/report" element={<Report />} />
        </Routes>
  )
}
