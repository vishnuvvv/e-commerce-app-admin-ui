import React, { useState } from "react";

import "./NewProduct.css";
import { Publish } from "@mui/icons-material";
const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [image, setImage] = useState(null);
  const [cat, setCat] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(inputs);
  console.log(cat);
  console.log(image);

  const handleCategories = (e) => {
    setCat(e.target.value.split(","));
  };
  return (
    <div className="new-product">
      <form className="user-updat-form">
        <div className="user-update-left">
          <div className="user-updat-left-item">
            <lable className="user-update-label">Title</lable>
            <input
              onChange={handleChange}
              type="text"
              placeholder="apple airpod"
              className="user-update-input"
              name="title"
            />
          </div>
          <div className="user-updat-left-item">
            <lable className="user-update-label">Price</lable>
            <input
              onChange={handleChange}
              type="text"
              placeholder="ex:100"
              className="user-update-input"
              name="price"
            />
          </div>
          <div className="user-updat-left-item">
            <lable className="user-update-label">Description</lable>
            <input
              onChange={handleChange}
              type="text"
              placeholder="description"
              className="user-update-input"
              name="desc"
            />
          </div>

          <div className="user-updat-left-item">
            <lable className="user-update-label">Categories</lable>
            <input
              onChange={handleCategories}
              type="text"
              placeholder="add`,`after each cat ex:jeans,pants,shirts"
              className="user-update-input"
              name="categories"
            />
          </div>

          <div className="user-updat-left-item">
            <lable>Stock</lable>
            <select name="instock" onChange={handleChange}>
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
            <input
              name="img"
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setImage(e.target.files)[0]}
            />
          </div>
          <button className="user-update-btn-right" onClick={handleSubmit}>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
