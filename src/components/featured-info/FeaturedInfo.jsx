import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./FeaturedInfo.css";
import { userRequest } from "../../config/requestMethods";

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('/api/orders/get-income');
        setIncome(res.data)
      } catch (error) {
        console.error(error);
      }
    };
    getIncome()
  }, []);
  console.log(income);
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revanue</span>
        <div className="featured-money-container">
          <span className="featured-money">Rs.456</span>
          <span className="featured-money-rate">
            -11.4
            <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">Rs.476</span>
          <span className="featured-money-rate">
            -11.4
            <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>

      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">Rs.46</span>
          <span className="featured-money-rate">
            -11.4
            <ArrowUpward className="featured-icon" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
