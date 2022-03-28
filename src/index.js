import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="customers" element={<Customers />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<div>404: Not found</div>} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
