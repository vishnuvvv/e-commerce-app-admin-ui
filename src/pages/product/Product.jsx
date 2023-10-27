import React, { useEffect, useMemo, useState } from "react";
import "./Product.css";
import { Link, useParams } from "react-router-dom";
import Chart from "../../components/chart/Chart.jsx";
// import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { userRequest } from "../../config/requestMethods";

const Product = () => {
  const [productStats, setProductStats] = useState([]);
  const params = useParams();
  const productId = params.id;

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get(
          "/api/orders/get-income?pid" + productId
        );
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });

        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id], Sales: item.total },
          ])
        );
      } catch (error) {
        console.error(error);
      }
    };
    getStats();
  }, [productId, MONTHS]);
  console.log(productStats);

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
          <Chart
            data={productStats}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="product-top-right">
          <div className="product-info-right-top">
            <img src={product.img} alt="pic" className="product-info-img" />
            <span className="product-name">{product.title}</span>
          </div>
          <div className="product-info-right-bottom">
            <div className="product-info-item">
              <span className="product-info-key">id:</span>
              <span className="product-info-value">{product._id}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">sales:</span>
              <span className="product-info-value">45523</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">in stock:</span>
              <span className="product-info-value">{product.instock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />
            <label>Product Description</label>
            <input type="text" placeholder={product.desc} />
            <label>Price</label>
            <input type="text" placeholder={product.price} />
            <label>In stock</label>
            <select name="instock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img src={product.img} alt="" className="product-upload-img" />
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
