import React from "react";
import "./Home.css";
import FeaturedInfo from "../../components/featured-info/FeaturedInfo";
import Chart from "../../components/chart/Chart";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
};

export default Home;
