import React from "react";
import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="new-user">
      <h1 className="new-user-title">New User</h1>
      <form className="new-user-form">
        <div className="new-user-form-item">
          <label>Full Name</label>
          <input
            className="new-user-form-input"
            type="text"
            placeholder="John smith"
          />
        </div>

        <div className="new-user-form-item">
          <label>User Name</label>
          <input className="new-user-form-input" placeholder="John smith" />
        </div>

        <div className="new-user-form-item">
          <label>Email</label>
          <input
            className="new-user-form-input"
            type="text"
            placeholder="john@gmail.com"
          />
        </div>

        <div className="new-user-form-item">
          <label>Password</label>
          <input
            className="new-user-form-input"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="new-user-form-item">
          <label>Phone </label>
          <input
            className="new-user-form-input"
            type="password"
            placeholder="+656 5545 448"
          />
        </div>

        <div className="new-user-form-item">
          <label>Address</label>
          <input
            className="new-user-form-input"
            type="password"
            placeholder="Bangalore | India"
          />
        </div>

        <div className="new-user-form-item">
          <label>Gender</label>
          <div className="new-user-form-gender">
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Female</label>
            <input type="radio" id="others" name="gender" value="others" />
            <label for="others">Others</label>
          </div>
        </div>
        <div className="new-user-form-item">
          <label>Active</label>
          <select name="active" id="active" className="new-user-select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="new-user-button">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
