import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faChevronDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">

      <nav className="navbar">

        {/* LOGO */}
        <Link to="/" className="logo-link">
          <img
            src="/MYK_Group_Logo.svg"
            alt="MYK Group Logo"
            className="logo"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon
            icon={menuOpen ? faXmark : faBars}
          />
        </button>

        {/* MENU */}
        <ul className={`menu ${menuOpen ? "menu-open" : ""}`}>

          <li>
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          {/* ABOUT */}
          <li className="menu-item">
            <Link to="/aboutus">
              About Us
              <FontAwesomeIcon icon={faChevronDown} />
            </Link>

            <div className="dropdown">
              <Link to="/aboutus/aboutthefounder">
                About the Founder
              </Link>

              <Link to="/aboutus/missionvision">
                Mission & Vision
              </Link>

              <Link to="/aboutus/companyobjectives">
                Company Objectives
              </Link>

              <Link to="/aboutus/headofficeorganization">
                Head Office Organization
              </Link>

              <Link to="/aboutus/keyprofessionals">
                Key Professionals
              </Link>

              <Link to="/aboutus/distinctfeatures">
                Distinct Features
              </Link>

              <Link to="/aboutus/certifications">
                Certifications
              </Link>

              <Link to="/aboutus/groupcompanies">
                Group Companies
              </Link>
            </div>
          </li>

          {/* ENERGY */}
          <li className="menu-item">
            <span className="menu-title">
              Energy
              <FontAwesomeIcon icon={faChevronDown} />
            </span>

            <div className="dropdown">

              <Link to="/energy/aboutus1">
                About Us
              </Link>

              <Link to="/energy/missionsvision">
                Mission & Vision
              </Link>

              <Link to="/energy/partners">
                Partners
              </Link>

              <Link to="/energy/keyprofessional">
                Key Professionals
              </Link>

              <Link to="/energy/efficiencies">
                Efficiencies
              </Link>

              <div className="submenu-item">
                <Link to="/energy/products">
                  Products
                  <FontAwesomeIcon icon={faChevronDown} />
                </Link>

                <div className="sub-dropdown">
                  <Link to="/energy/products/solarpanel">
                    Solar Panel
                  </Link>

                  <Link to="/energy/products/inverters">
                    Inverters
                  </Link>

                  <Link to="/energy/products/energystorage">
                    XD3 Energy Storage System
                  </Link>

                  <Link to="/energy/products/cables">
                    Cables
                  </Link>
                </div>
              </div>

              <Link to="/energy/projects">
                Projects
              </Link>

              <Link to="/energy/contact">
                Contact
              </Link>
            </div>
          </li>

          {/* REAL ESTATE */}
          <li className="menu-item">
            <span className="menu-title">
              Real Estate
              <FontAwesomeIcon icon={faChevronDown} />
            </span>

            <div className="dropdown">
              <Link to="/realestate/aboutus2">
                About Us
              </Link>

              <Link to="/realestate/services1">
                Services
              </Link>
            </div>
          </li>

          {/* SERVICES */}
          <li className="menu-item">
            <Link to="/services2">
              Services
              <FontAwesomeIcon icon={faChevronDown} />
            </Link>

            <div className="dropdown">
              <Link to="/services/assetevaluation">
                Asset Evaluation
              </Link>

              <Link to="/services/vehiclerolling">
                Vehicle & Rolling Equipment Evaluation
              </Link>

              <Link to="/services/stockinspections">
                Stock Inspections
              </Link>

              <Link to="/services/stockevaluation">
                Stock Evaluation
              </Link>

              <Link to="/services/collateralmanagement">
                Collateral Management
              </Link>

              <Link to="/services/realestate">
                REIT Consultancy
              </Link>

              <Link to="/services/building">
                Building & Project Consultancy
              </Link>

              <Link to="/services/marketresearch">
                Market Research Study
              </Link>

              <Link to="/services/managementservices">
                Real Estate Management Services
              </Link>

              <Link to="/services/mergersacquisitions">
                Mergers & Acquisitions
              </Link>

              <Link to="/services/preinsurance">
              PRE INSURANCE EVALUATION
              </Link>

              <Link to="/services/clearning">
                CLEARING AND FREIGHT FORWARDING SERVICES
              </Link>

              <Link to="/services/projectmanagement">
                PROJECT MANAGEMENT
              </Link>


              <Link to="/services/marketinformation">
                MARKET INFORMATION
              </Link>

              <Link to="/services/incomeestimation">
                INCOME ESTIMATION
              </Link>

              <Link to="/services/credit">
                CREDIT EVALUATIONS & CREDIT REPORTS
              </Link>
              
              <Link to="/services/otherservices">
               OTHER SERVICES
              </Link>
            </div>
          </li>

          <li>
            <Link to="/affiliation/affiliation">
              Affiliation
            </Link>
          </li>

          <li>
            <Link to="/ourclients/ourclients">
              Our Clients
            </Link>
          </li>

          <li>
            <Link to="/ourprojects/ourprojects">
              Our Projects
            </Link>
          </li>

          <li>
            <Link to="/branchlocation/branchlocation">
              Branch Location
            </Link>
          </li>

          {/* INQUIRY */}
          <li className="menu-item">
            <Link to="/inquiry">
              Inquiry
              <FontAwesomeIcon icon={faChevronDown} />
            </Link>

            <div className="dropdown inquiry-dropdown">
              <Link to="/inquiry/career">
                Careers
              </Link>
            </div>
          </li>

        </ul>

      </nav>
    </header>
  );
};

export default Navbar;