import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart.jsx";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";

const Product = () => {
  return (
    <div className="product">
      <div className="product-tile-container">
        <h1 className="product-title">Product</h1>
        <Link to="/new-product">
          <button className="product-add-button">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="product-top-right">
          <div className="product-info-right-top">
            <img
              src="data:image/jpeg;base64,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"
              alt="pic"
              className="product-info-img"
            />
            <span className="product-name">Apple Airpods</span>
          </div>
          <div className="product-info-right-bottom">
            <div className="product-info-item">
              <span className="product-info-key">id:</span>
              <span className="product-info-value">123</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">sales:</span>
              <span className="product-info-value">45523</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">active:</span>
              <span className="product-info-value">Yes</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">in stock:</span>
              <span className="product-info-value">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Product Name</label>
            <input type="text" placeholder="Apple airpod" />
            <label>In stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lTX6NfkTsn7kgWXl39JD6EEfmyqPHjmaQH0NRdlqbQGz202wf_IrRKHDmGzdyZas1Y8&usqp=CAU"
                alt=""
                className="product-upload-img"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product-update-button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
