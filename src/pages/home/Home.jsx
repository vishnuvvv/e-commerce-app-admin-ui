import React from "react";
import "./Home.css";
import FeaturedInfo from "../../components/featured-info/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetLarge from "../../components/widget-large/WidgetLarge";
import WidgetSmall from "../../components/widget-small/WidgetSmall";

const Home = () => {
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
       <WidgetLarge/>
       <WidgetSmall/>
      </div>
    </div>
  );
};

export default Home;
