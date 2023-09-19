import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
const Home = lazy(() => import("./pages/home/Home.jsx"));
const Userlist = lazy(() => import("./pages/userList/Userlist"));

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
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/new-product" element={<NewProduct />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
