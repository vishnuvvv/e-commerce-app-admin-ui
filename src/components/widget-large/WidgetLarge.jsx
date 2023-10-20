import React, { useEffect, useState } from "react";
import "./WidgetLarge.css";
import { userRequest } from "../../config/requestMethods";

const WidgetLarge = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/api/orders/get-all");
        setOrders(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getOrders();
  }, []);
  console.log(orders);

  const Button = ({ type }) => {
    return <button className={"lg-widget-button " + type}>{type}</button>;
  };
  return (
    <div className="widget-large">
      <h3 className="lg-widget-title">Latest Transactions</h3>
      <table className="lg-widget-table">
        <tr className="lg-widget-tbl-row">
          <th className="lg-widget-tbl-header">Customer</th>
          <th className="lg-widget-tbl-header">Date</th>
          <th className="lg-widget-tbl-header">Amount</th>
          <th className="lg-widget-tbl-header">Status</th>
        </tr>
        {orders.map((order) => {
          return (
            <tr className="lg-widget-tbl-row">
              <td className="lg-widget-user">
                {/* <img
                  src="https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg?size=626&ext=jpg&ga=GA1.1.404061632.1692293053&semt=sph"
                  alt="pic"
                  className="lg-widget-img"
                /> */}
                <span className="lg-widget-name">{order.userId}</span>
              </td>
              <td className="lg-widget-date">{order.createdAt}</td>
              <td className="lg-widget-amount">{order.amount}</td>
              <td className="lg-widget-status">
                <Button type={order.status} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default WidgetLarge;
