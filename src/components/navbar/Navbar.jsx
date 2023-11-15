import React from "react";
import "./Navbar.css";
import { NotificationsNone, Settings, Language } from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout());
    navigate("/")
  };
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="nav-left">
          <span className="logo">shope-admin</span>
        </div>
        <div className="nav-right">
          <div className="navbar-icons-container">
            <NotificationsNone />
            <span className="notifi-icon-badge">2</span>
          </div>
          <div className="navbar-icons-container">
            <Language />
            <span className="notifi-icon-badge">2</span>
          </div>
          <div className="navbar-icons-container">
            <Settings />
          </div>
          <div className="navbar-icons-container">
            <ExitToAppIcon onClick={handleLogout}/>
          </div>
          <img
            src="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg&uid=R96399417&ga=GA1.2.404061632.1692293053&semt=sph"
            alt="pic"
            className="top-avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
