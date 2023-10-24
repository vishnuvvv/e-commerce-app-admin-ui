import React, { useEffect, useMemo, useState } from "react";
import "./Home.css";
import FeaturedInfo from "../../components/featured-info/FeaturedInfo";
import Chart from "../../components/chart/Chart";
//import { userData } from "../../dummyData";
import WidgetLarge from "../../components/widget-large/WidgetLarge";
import WidgetSmall from "../../components/widget-small/WidgetSmall";
import { userRequest } from "../../config/requestMethods";

const Home = () => {
  const [userStats, setUserStats] = useState([]);
  

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
        const res = await userRequest.get("/api/user/get-users-stats");
        console.log(res.data);
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id], "Active User": item.total },
          ])
        );
      } catch (error) {
        console.error(error);
      }
    };
    getStats();
  }, [MONTHS]);
  console.log(userStats);


  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
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
