import React from "react";
import "./Navbar.css";
import { NotificationsNone } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="nav-left">
          <span className="logo">shope-admin</span>
        </div>
        <div className="nav-right">
          <div className="navbar-icons-container">
            <NotificationsNone/>
            <span className="notifi-icon-badge">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
