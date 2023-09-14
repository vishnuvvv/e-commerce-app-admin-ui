import React from "react";
import "./Sidebar.css";
import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <LineStyle />
              Home 
            </li>
            <li className="sidebar-list-item">
              <Timeline />
              Home 
            </li>
            <li className="sidebar-list-item">
              <TrendingUp />
              Home 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
