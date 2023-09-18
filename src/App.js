import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
const Home = lazy(() => import("./pages/home/Home.jsx"));
const Userlist = lazy(() => import("./pages/userlist/Userlist"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<Userlist />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/new-user" element={<NewUser />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
