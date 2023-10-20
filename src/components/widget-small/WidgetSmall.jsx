import React, { useState, useEffect } from "react";
import { userRequest } from "../../config/requestMethods";

import "./WidgetSmall.css";
import { Visibility } from "@mui/icons-material";

const WidgetSmall = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("/api/user/get-all-users");
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="widget-small">
      <span className="sm-widget-title">New Joiners</span>

      <ul className="sm-widget-list">
        {users.map((user, key) => {
          return (
            <li className="sm-widget-list-item">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="pic"
                className="sm-widget-img"
              />
              <div className="sm-widget-user">
                <span className="sm-widget-username">{user.username}</span>
                {/* <span className="sm-widget-user-title">Software Engineer</span> */}
              </div>
              <button className="sm-widget-btn-eye">
                <Visibility className="sm-widget-icon" />
                View
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSmall;
