import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [productsOpen, setProductsOpen] = useState(false);

  const isMobile = () => window.innerWidth <= 768;

  const toggleDropdown = (name, e) => {
    if (isMobile()) {
      e.preventDefault();

      setOpenDropdown((prev) =>
        prev === name ? null : name
      );

      if (name !== "energy") {
        setProductsOpen(false);
      }
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setProductsOpen(false);
  };

  const toggleMainMenu = () => {
    setMenuOpen((prev) => !prev);

    if (menuOpen) {
      setOpenDropdown(null);
      setProductsOpen(false);
    }
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* LOGO */}
        <Link
          to="/"
          className="logo-link"
          onClick={closeMenu}
        >
          <img
            src="/MYK_Group_Logo.svg"
            alt="MYK Group Logo"
            className="logo"
          />
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={toggleMainMenu}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon
            icon={menuOpen ? faXmark : faBars}
          />
        </button>

        {/* MAIN MENU */}
        <ul className={`menu ${menuOpen ? "menu-open" : ""}`}>

          {/* HOME */}
          <li>
            <Link to="/dashboard" onClick={closeMenu}>
              Home
            </Link>
          </li>

          {/* ================= ABOUT US ================= */}
          <li
            className={`menu-item ${
              openDropdown === "about"
                ? "mobile-submenu-open"
                : ""
            }`}
          >
            <Link
              to="/aboutus"
              onClick={(e) =>
                toggleDropdown("about", e)
              }
            >
              About Us

              <FontAwesomeIcon icon={faChevronDown} />
            </Link>

            <div className="dropdown">

              <Link
                to="/aboutus/aboutthefounder"
                onClick={closeMenu}
              >
                About the Founder
              </Link>

              <Link
                to="/aboutus/missionvision"
                onClick={closeMenu}
              >
                Mission & Vision
              </Link>

              <Link
                to="/aboutus/companyobjectives"
                onClick={closeMenu}
              >
                Company Objectives
              </Link>

              <Link
                to="/aboutus/headofficeorganization"
                onClick={closeMenu}
              >
                Head Office Organization
              </Link>

              <Link
                to="/aboutus/keyprofessionals"
                onClick={closeMenu}
              >
                Key Professionals
              </Link>

              <Link
                to="/aboutus/distinctfeatures"
                onClick={closeMenu}
              >
                Distinct Features
              </Link>

              <Link
                to="/aboutus/certifications"
                onClick={closeMenu}
              >
                Certifications
              </Link>

              <Link
                to="/aboutus/groupcompanies"
                onClick={closeMenu}
              >
                Group Companies
              </Link>

            </div>
          </li>

          {/* ================= ENERGY ================= */}
          <li
            className={`menu-item ${
              openDropdown === "energy"
                ? "mobile-submenu-open"
                : ""
            }`}
          >
            <button
              type="button"
              className="menu-title"
              onClick={(e) =>
                toggleDropdown("energy", e)
              }
            >
              Energy

              <FontAwesomeIcon icon={faChevronDown} />
            </button>

            <div className="dropdown">

              <Link
                to="/energy/aboutus1"
                onClick={closeMenu}
              >
                About Us
              </Link>

              <Link
                to="/energy/missionsvision"
                onClick={closeMenu}
              >
                Mission & Vision
              </Link>

              <Link
                to="/energy/partners"
                onClick={closeMenu}
              >
                Partners
              </Link>

              <Link
                to="/energy/keyprofessional"
                onClick={closeMenu}
              >
                Key Professionals
              </Link>

              <Link
                to="/energy/efficiencies"
                onClick={closeMenu}
              >
                Efficiencies
              </Link>

              {/* PRODUCTS */}
              <div
                className={`submenu-item ${
                  productsOpen
                    ? "mobile-product-open"
                    : ""
                }`}
              >
                <Link
                  to="/energy/products"
                  onClick={(e) => {
                    if (isMobile()) {
                      e.preventDefault();

                      setProductsOpen(
                        (prev) => !prev
                      );
                    }
                  }}
                >
                  Products

                  <FontAwesomeIcon
                    icon={faChevronDown}
                  />
                </Link>

                <div className="sub-dropdown">

                  <a
                    href="https://www.mykassociates.com/wp-content/uploads/2025/02/Solar-Panel.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solar Panel
                  </a>

                  <a
                    href="https://mykassociates.com/wp-content/uploads/2025/02/INVERTERS.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inverters
                  </a>

                  <a
                    href="https://www.mykassociates.com/wp-content/uploads/2025/02/DONGJIN-XD3-ENERGY-STORAGE-SYSTEM.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    XD3 Energy Storage System
                  </a>

                  <a
                    href="https://www.mykassociates.com/wp-content/uploads/2025/02/CABLES.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cables
                  </a>

                </div>
              </div>

              <Link
                to="/energy/projects"
                onClick={closeMenu}
              >
                Projects
              </Link>

              <Link
                to="/energy/contact"
                onClick={closeMenu}
              >
                Contact
              </Link>

            </div>
          </li>

          {/* ================= REAL ESTATE ================= */}
          <li
            className={`menu-item ${
              openDropdown === "realestate"
                ? "mobile-submenu-open"
                : ""
            }`}
          >
            <button
              type="button"
              className="menu-title"
              onClick={(e) =>
                toggleDropdown("realestate", e)
              }
            >
              Real Estate

              <FontAwesomeIcon icon={faChevronDown} />
            </button>

            <div className="dropdown">

              <Link
                to="/realestate/aboutus2"
                onClick={closeMenu}
              >
                About Us
              </Link>

              <Link
                to="/realestate/services1"
                onClick={closeMenu}
              >
                Services
              </Link>

            </div>
          </li>

          {/* ================= SERVICES ================= */}
          <li
            className={`menu-item services-menu ${
              openDropdown === "services"
                ? "mobile-submenu-open"
                : ""
            }`}
          >
            <Link
              to="/services2"
              onClick={(e) =>
                toggleDropdown("services", e)
              }
            >
              Services

              <FontAwesomeIcon icon={faChevronDown} />
            </Link>

            <div className="services-mega-dropdown">

              {/* COLUMN 1 */}
              <div className="services-column">

                <Link
                  to="/services/assetevaluation"
                  onClick={closeMenu}
                >
                  Asset Evaluation
                </Link>

                <Link
                  to="/services/vehiclerolling"
                  onClick={closeMenu}
                >
                  Vehicle & Rolling Equipment Evaluation
                </Link>

                <Link
                  to="/services/stockinspections"
                  onClick={closeMenu}
                >
                  Stock Inspections
                </Link>

                <Link
                  to="/services/stockevaluation"
                  onClick={closeMenu}
                >
                  Stock Evaluation
                </Link>

                <Link
                  to="/services/collateralmanagement"
                  onClick={closeMenu}
                >
                  Collateral Management
                </Link>

                <Link
                  to="/services/realestate"
                  onClick={closeMenu}
                >
                  REIT Consultancy
                </Link>

                <Link
                  to="/services/building"
                  onClick={closeMenu}
                >
                  Building & Project Consultancy
                </Link>

                <Link
                  to="/services/marketresearch"
                  onClick={closeMenu}
                >
                  Market Research Study
                </Link>

                <Link
                  to="/services/managementservices"
                  onClick={closeMenu}
                >
                  Real Estate Management Services
                </Link>

              </div>

              {/* COLUMN 2 */}
              <div className="services-column">

                <Link
                  to="/services/mergersacquisitions"
                  onClick={closeMenu}
                >
                  Mergers & Acquisitions
                </Link>

                <Link
                  to="/services/preinsurance"
                  onClick={closeMenu}
                >
                  Pre Insurance Evaluation
                </Link>

                <Link
                  to="/services/clearning"
                  onClick={closeMenu}
                >
                  Clearing & Freight Forwarding Services
                </Link>

                <Link
                  to="/services/projectmanagement"
                  onClick={closeMenu}
                >
                  Project Management
                </Link>

                <Link
                  to="/services/marketinformation"
                  onClick={closeMenu}
                >
                  Market Information
                </Link>

                <Link
                  to="/services/incomeestimation"
                  onClick={closeMenu}
                >
                  Income Estimation
                </Link>

                <Link
                  to="/services/credit"
                  onClick={closeMenu}
                >
                  Credit Evaluations & Credit Reports
                </Link>

                <Link
                  to="/services/otherservices"
                  onClick={closeMenu}
                >
                  Other Services
                </Link>

              </div>

            </div>
          </li>

          {/* AFFILIATION */}
          <li>
            <Link
              to="/affiliation/affiliation"
              onClick={closeMenu}
            >
              Affiliation
            </Link>
          </li>

          {/* CLIENTS */}
          <li>
            <Link
              to="/ourclients/ourclients"
              onClick={closeMenu}
            >
              Our Clients
            </Link>
          </li>

          {/* PROJECTS */}
          <li>
            <Link
              to="/ourprojects/ourprojects"
              onClick={closeMenu}
            >
              Our Projects
            </Link>
          </li>

          {/* BRANCH */}
          <li>
            <Link
              to="/branchlocation/branchlocation"
              onClick={closeMenu}
            >
              Branch Location
            </Link>
          </li>

          {/* ================= INQUIRY ================= */}
          <li
            className={`menu-item ${
              openDropdown === "inquiry"
                ? "mobile-submenu-open"
                : ""
            }`}
          >
            <Link
              to="/inquiry"
              onClick={(e) =>
                toggleDropdown("inquiry", e)
              }
            >
              Inquiry

              <FontAwesomeIcon icon={faChevronDown} />
            </Link>

            <div className="dropdown inquiry-dropdown">

              <Link
                to="/inquiry/career"
                onClick={closeMenu}
              >
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