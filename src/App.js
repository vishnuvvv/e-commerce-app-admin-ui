import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home.jsx";



const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
};

export default App;
