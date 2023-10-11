import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Home from './pages/home/Home'
import Userlist from './pages/userList/Userlist'

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Sidebar />
          <Routes>
          <Route exact path="/" element={<Login/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Userlist />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/new-product" element={<NewProduct />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
