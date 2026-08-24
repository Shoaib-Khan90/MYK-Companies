import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/">
        <img
          src="/MYK_Group_Logo.svg"
          alt="MYK Group Logo"
          className="logo"
          width={"150px"}
        />
      </Link>

      {/* MENU */}
      <ul className="menu">

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        {/* ABOUT US */}
        <li className="about-menu">

          <li>About Us</li>

          {/* DROPDOWN */}
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

        {/* //Energy */}

        <li className="about-menu">

          <li>Energy</li>

          {/* DROPDOWN */}
          <div className="dropdown">

            <Link to="/energy/aboutus">
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

            {/* Products  */}

             <li className="products-menu">

  <Link to="/energy/products">
    Products
  </Link>

  <div className="products-dropdown">

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

</li>

             <Link to="/energy/projects">
              Projects
            </Link>

             <Link to="/energy/contact">
              Contact
            </Link>

          </div>

        </li>

              {/* Real Estate */}

              <li className="about-menu">

          <li>Real Estate</li>

          {/* DROPDOWN */}
          <div className="dropdown">

            <Link to="/realestate/aboutus2">
              About Us
            </Link>

            <Link to="/realestate/services1">
              Services
            </Link>

          </div>

        </li>

        {/* Services */}

        
              <li className="about-menu">

          <li>Services</li>

          {/* DROPDOWN */}
          <div className="dropdown">

            <Link to="/services/assetevaluation">
              ASSET EVALUATION
            </Link>

            <Link to="/services/vehiclerolling">
              VEHICLE AND ROLLING EQUIPMENT EVALUATION
            </Link>

               <Link to="/services/stockinspections">
              STOCK INSPECTIONS
            </Link>

          </div>

        </li>

      </ul>
    </nav>
  );
};

export default Navbar;