import React from "react";
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from "./routes";
import Nav from "./Admin_panel/adminNav/adminNav";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Nav />
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
