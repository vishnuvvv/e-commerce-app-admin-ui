import React from "react";
import "./WidgetLarge.css";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"lg-widget-button "+type}>{type}</button>;
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
        <tr className="lg-widget-tbl-row">
          <td className="lg-widget-user">
            <img
              src="https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg?size=626&ext=jpg&ga=GA1.1.404061632.1692293053&semt=sph"
              alt="pic"
              className="lg-widget-img"
            />
            <span className="lg-widget-name">Susan Carol</span>
          </td>
          <td className="lg-widget-date">22-03-2023</td>
          <td className="lg-widget-amount">Rs.707</td>
          <td className="lg-widget-status">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="lg-widget-tbl-row">
          <td className="lg-widget-user">
            <img
              src="https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg?size=626&ext=jpg&ga=GA1.1.404061632.1692293053&semt=sph"
              alt="pic"
              className="lg-widget-img"
            />
            <span className="lg-widget-name">Susan Carol</span>
          </td>
          <td className="lg-widget-date">22-03-2023</td>
          <td className="lg-widget-amount">Rs.707</td>
          <td className="lg-widget-status">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="lg-widget-tbl-row">
          <td className="lg-widget-user">
            <img
              src="https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg?size=626&ext=jpg&ga=GA1.1.404061632.1692293053&semt=sph"
              alt="pic"
              className="lg-widget-img"
            />
            <span className="lg-widget-name">Susan Carol</span>
          </td>
          <td className="lg-widget-date">22-03-2023</td>
          <td className="lg-widget-amount">Rs.707</td>
          <td className="lg-widget-status">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
