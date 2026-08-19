import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Navbar from "../Components/Navbar";
import AbouttheFounder from '../Pages/About Us/AbouttheFounder'
import MissionVision from "../Pages/About Us/MissionVision";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aboutus/AbouttheFounder" element={<AbouttheFounder />} />
        <Route path="/aboutus/missionvision" element={<MissionVision/>} />

      </Routes>
    </>
  );
};

export default App;