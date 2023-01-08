import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from './Admin_panel/admin_panel';
import Login from './auth/login';

function App() {
  return (

<BrowserRouter>
<Routes>

  <Route path="/" element={<AdminPanel />} />

  <Route path="/auth" element={<Login />} />

  
</Routes>
</BrowserRouter>


  );
}

export default App;
