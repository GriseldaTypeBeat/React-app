import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import "../CSS/ListStyle.css";

const classNameFunc = ({ isActive }) =>
  isActive ? "activeLink" : "inactiveLink";

const List = () => {
  return (
    <header>
      <div className="container container-flex">
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <nav>
          <div className="list">
            <NavLink to="/" className={classNameFunc}>
              Home
            </NavLink>
            <NavLink to="/about" className={classNameFunc}>
              About
            </NavLink>
            <NavLink to="/services" className={classNameFunc}>
              Services
            </NavLink>
            <NavLink to="/contact" className={classNameFunc}>
              Contact
            </NavLink>
            <NavLink to="/policy" className={classNameFunc}>
              Policy
            </NavLink>
          </div>
        </nav>
        <div className="icons">
          <SearchIcon className="icon" />
          <PersonIcon className="icon" />
          <CallIcon className="icon" />
        </div>
      </div>
    </header>
  );
};

export default List;
