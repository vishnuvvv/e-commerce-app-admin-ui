import React from "react";

import "./NewProduct.css";
import { Publish } from "@mui/icons-material";
const NewProduct = () => {
  return (
    <div className="new-product">
      <form className="user-updat-form">
        <div className="user-update-left">
          <div className="user-updat-left-item">
            <lable className="user-update-label">Title</lable>
            <input
              type="text"
              placeholder="apple airpod"
              className="user-update-input"
            />
          </div>
          <div className="user-updat-left-item">
            <lable className="user-update-label">Price</lable>
            <input
              type="text"
              placeholder="ex:100"
              className="user-update-input"
            />
          </div>
          <div className="user-updat-left-item">
            <lable className="user-update-label">Description</lable>
            <input
              type="text"
              placeholder="description"
              className="user-update-input"
            />
          </div>

          <div className="user-updat-left-item">
            <lable>Stock</lable>
            <select>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {/* <input
              type="text"
              placeholder="213"
              className="user-update-input"
            /> */}
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
              <Publish className="use-update-icon-right" />
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>
          <button className="user-update-btn-right">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
