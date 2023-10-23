import React, { useState } from "react";
import "./Home.css";
import FeaturedInfo from "../../components/featured-info/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetLarge from "../../components/widget-large/WidgetLarge";
import WidgetSmall from "../../components/widget-small/WidgetSmall";

const Home = () => {
  const [userStats, setUserStats] = useState([])
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active Users"
      />
      <div className="home-widgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
