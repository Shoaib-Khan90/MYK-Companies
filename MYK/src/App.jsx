import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Navbar from "../Components/Navbar";
import AbouttheFounder from '../Pages/About Us/AbouttheFounder'
import MissionVision from "../Pages/About Us/MissionVision";
import CompanyObjectives from '../Pages/About Us/CompanyObjectives'
import HeadOfficeOrganization from '../Pages/About Us/HeadOfficeOrganization'
import KeyProfessionals from '../Pages/About Us/KeyProfessionals'
import DistinctFeatures from '../Pages/About Us/DistinctFeatures'
import Certifications from '../Pages/About Us/Certifications'
import GroupCompanies from '../Pages/About Us/GroupCompanies'
import AboutUs from "../Pages/Energy/AboutUs";
import MissionsVision from "../Pages/Energy/MissionsVision";
import Partners from '../Pages/Energy/Partners'
import KeyProfessional from "../Pages/Energy/KeyProfessional";



const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aboutus/AbouttheFounder" element={<AbouttheFounder />} />
        <Route path="/aboutus/missionvision" element={<MissionVision/>} />
        <Route path="/aboutus/companyobjectives" element={<CompanyObjectives/>} />
        <Route path="/aboutus/headofficeorganization" element={<HeadOfficeOrganization/>} />
        <Route path="/aboutus/keyprofessionals" element={<KeyProfessionals/>} />
        <Route path="/aboutus/distinctfeatures" element={<DistinctFeatures/>} />
        <Route path="/aboutus/certifications" element={<Certifications/>} />
        <Route path="/aboutus/groupcompanies" element={<GroupCompanies/>} />
        <Route path="/energy/aboutus" element={<AboutUs/>} />
        <Route path="/energy/missionsvision" element={<MissionsVision/>} />
        <Route path="/energy/partners" element={<Partners/>} />
        <Route path="/energy/keyprofessional" element={<KeyProfessional/>} />

          
      </Routes>
    </>
  );
};

export default App;