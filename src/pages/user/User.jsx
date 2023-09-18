import React from "react";
import "./User.css";

const User = () => {
  return (
    <div className="user-details">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <button className="user-add-button">Create</button>
      </div>
      <div className="user-detail-container">
        <div className="user-show"></div>
        <div className="user-update"></div>
      </div>
    </div>
  );
};

export default User;
