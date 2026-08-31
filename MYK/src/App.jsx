import React from "react";
import './index.css'
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
import Efficiencies from '../Pages/Energy/Efficiencies'
import Products from '../Pages/Energy/Products'
import SolarPanel from "../Pages/Energy/SolarPanel";
import Inverters from '../Pages/Energy/Inverters'
import EnergyStorage from '../Pages/Energy/EnergyStorage'
import Cables from '../Pages/Energy/Cables'
import Projects from "../Pages/Energy/Projects";
import Contact from '../Pages/Energy/Contact'
import AboutUs2 from "../Pages/Real Estate/AboutUs2";
import Services1 from '../Pages/Real Estate/Services1'
import AssetEvaluation from '../Pages/Services/AssetEvaluation'
import VehicleRolling from "../Pages/Services/VehicleRolling";
import StockInspections from '../Pages/Services/StockInspections'
import StockEvaluation from '../Pages/Services/StockEvaluation'
import CollateralManagement from "../Pages/Services/CollateralManagement";
import Realestate from "../Pages/Services/Realestate";
import Building from "../Pages/Services/Building";
import MarketResearch from '../Pages/Services/MarketResearch'
import ManagementServices from '../Pages/Services/ManagementServices'
import Affiliation from "../Pages/Affiliation/Affiliation";
import OurClients from '../Pages/Our Clients/OurClients'
import OurProjects from '../Pages/OurProjects/OurProjects'
import BranchLocation from '../Pages/Branch Location/BranchLocation'
import Career from "../Pages/Inquiry/Career";
import Inquiry from "../Pages/Inquiry";
import Services2 from '../Pages/Services2'
import MergersAcquisitions from '../Pages/Services/MergersAcquisitions'
import PreInsurance from "../Pages/Services/PreInsurance";
import Clearning from "../Pages/Services/Clearning";
import ProjectManagement from '../Pages/Services/ProjectManagement'
import MarketInformation from '../Pages/Services/MarketInformation'
import IncomeEstimation from '../Pages/Services/IncomeEstimation'
import Credit from '../Pages/Services/Credit'
import OtherServices from "../Pages/Services/OtherServices";
import Footer from '../Components/Footer'
const App = () => {
  return (
    <>
      <Navbar />
 <main className="page-content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
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
        <Route path="/energy/efficiencies" element={<Efficiencies/>} />
        <Route path="/energy/products" element={<Products/>} />
        <Route path="/energy/products/solarpanel" element={<SolarPanel/>} />
        <Route path="/energy/products/inverters" element={<Inverters/>} />
        <Route path="/energy/products/energystorage" element={<EnergyStorage/>} />
        <Route path="/energy/products/cables" element={<Cables/>} />
        <Route path="/energy/projects" element={<Projects/>} />
        <Route path="/energy/contact" element={<Contact/>} />
        <Route path="/realestate/aboutus2" element={<AboutUs2/>} />
        <Route path="/realestate/services1" element={<Services1/>} />
        <Route path="/services/assetevaluation" element={<AssetEvaluation/>} />
        <Route path="/services/vehiclerolling" element={<VehicleRolling/>} />
        <Route path="/services/stockinspections" element={<StockInspections/>} />
        <Route path="/services/stockevaluation" element={<StockEvaluation/>} />
        <Route path="/services/collateralmanagement" element={<CollateralManagement/>} />
        <Route path="/services/realestate" element={<Realestate/>} />
        <Route path="/services/building" element={<Building/>} />
        <Route path="/services/marketresearch" element={<MarketResearch/>} />
        <Route path="/services/managementservices" element={<ManagementServices/>} />
        <Route path="/services/mergersacquisitions" element={<MergersAcquisitions/>} />
        <Route path="/services/preinsurance" element={<PreInsurance/>} />
        <Route path="/services/clearning" element={<Clearning/>} />
        <Route path="/services/marketinformation" element={<MarketInformation/>} />
        <Route path="/services/incomeestimation" element={<IncomeEstimation/>} />
        <Route path="/services/credit" element={<Credit/>} />
        <Route path="/services/otherservices" element={<OtherServices/>} />
        <Route path="/services/projectmanagement" element={<ProjectManagement/>} />
        <Route path="/affiliation/affiliation" element={<Affiliation/>} />
        <Route path="/ourclients/ourclients" element={<OurClients/>} />
        <Route path="/ourprojects/ourprojects" element={<OurProjects/>} />
        <Route path="/branchlocation/branchlocation" element={<BranchLocation/>} />
        <Route path="/inquiry/career" element={<Career/>} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services2" element={<Services2 />} />
      </Routes>
      </main>
        <Footer/>          
    </>
  );
};

export default App;