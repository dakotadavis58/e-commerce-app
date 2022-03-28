import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProducts from "./AllProducts";

class Products extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Featured Products</h1>
        <AllProducts />
      </div>
    );
  }
}

export default Products;
