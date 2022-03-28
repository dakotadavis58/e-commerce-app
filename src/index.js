import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "./components/customer/Customers";
import Cart from "./components/cart/Cart";
import NavBar from "./components/MainNavbar";
import Products from "./components/product/Products";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="customers/" element={<Customers />} />
          <Route path="products/" element={<Products />} />
          <Route path="cart/" element={<Cart />} />
          <Route path="*" element={<div>404: Not found</div>} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
