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

          </div>

        </li>

      </ul>
    </nav>
  );
};

export default Navbar;