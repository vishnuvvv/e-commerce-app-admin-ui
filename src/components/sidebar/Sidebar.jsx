import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to="/" className="link">
              <li className="sidebar-list-item active">
                <LineStyle className="sidebar-icon" />
                Home
              </li>
            </Link>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staffs</h3>
          <ul className="sidebar-list">
            <Link to="/users" className="link">
              <li className="sidebar-list-item active">
                <PermIdentity className="sidebar-icon" />
                Users
              </li>
            </Link>
            <Link to="products" className="link">
              <li className="sidebar-list-item">
                <Storefront className="sidebar-icon" />
                Products
              </li>
            </Link>
            <li className="sidebar-list-item">
              <AttachMoney className="sidebar-icon" />
              Transactions
            </li>
            <li className="sidebar-list-item">
              <BarChart className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick menu</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item active">
              <MailOutline className="sidebar-icon" />
              Mail
            </li>
            <li className="sidebar-list-item">
              <DynamicFeed className="sidebar-icon" />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <ChatBubbleOutline className="sidebar-icon" />
              Meassages
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notification</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item active">
              <WorkOutline className="sidebar-icon" />
              Manage
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <Report className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
