import React from "react";
import "./User.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user-details">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <Link to="newUser">
        <button className="user-add-button">Create</button>
        </Link>
      </div>
      <div className="user-detail-container">
        <div className="user-show">
          <div className="user-show-top">
            <img
              src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&ga=GA1.1.404061632.1692293053&semt=sph"
              alt=""
              className="user-show-img"
            />
            <div className="user-show-top-title">
              <span className="user-show-username">Zara T Kiyopsaki</span>
              <span className="user-show-title">Software Developer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-btm-title">Account Details</span>
            <div className="user-show-info-btm">
              <PermIdentity className="user-show-icon-btm" />
              <span className="user-shw-btm-info-ttl">zarasakki99</span>
            </div>
            <div className="user-show-info-btm">
              <CalendarToday className="user-show-icon-btm" />
              <span className="user-shw-btm-info-ttl">29-03-1996</span>
            </div>
            <span className="user-show-btm-title">Contact Details</span>
            <div className="user-show-info-btm">
              <PhoneAndroid className="user-show-icon-btm" />
              <span className="user-shw-btm-info-ttl">+44 554464641</span>
            </div>
            <div className="user-show-info-btm">
              <MailOutline className="user-show-icon-btm" />
              <span className="user-shw-btm-info-ttl">
                zarasakki99@gmail.com
              </span>
            </div>
            <div className="user-show-info-btm">
              <LocationSearching className="user-show-icon-btm" />
              <span className="user-shw-btm-info-ttl">Bangalore | India</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-updat-title">Edit</span>
          <form className="user-updat-form">
            <div className="user-update-left">
              <div className="user-updat-left-item">
                <lable className="user-update-label">Username</lable>
                <input
                  type="text"
                  placeholder="zarasakki99"
                  className="user-update-input"
                />
              </div>
              <div className="user-updat-left-item">
                <lable>Full Name</lable>
                <input
                  type="text"
                  placeholder="Zara T Kiyopsaki"
                  className="user-update-input"
                />
              </div>
              <div className="user-updat-left-item">
                <lable>Email</lable>
                <input
                  type="text"
                  placeholder="zarasakki99@gmail.com"
                  className="user-update-input"
                />
              </div>
              <div className="user-updat-left-item">
                <lable>Phone</lable>
                <input
                  type="text"
                  placeholder="+44 554464641"
                  className="user-update-input"
                />
              </div>
              <div className="user-updat-left-item">
                <lable>Address</lable>
                <input
                  type="text"
                  placeholder="Bangalore | India"
                  className="user-update-input"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&ga=GA1.1.404061632.1692293053&semt=sph"
                  alt=""
                  className="user-upload-image"
                />
                <label htmlFor="file">
                  <Publish className="use-update-icon-right"/>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user-update-btn-right">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
