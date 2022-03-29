import React, { useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";
import CreateProduct from "./CreateProduct";
import axios from "axios";
import AllProducts from "./AllProducts";
import logger from "use-reducer-logger";
import { Row } from "react-bootstrap";
import ProductDetails from "./ProductDetails";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Products = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  //   const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
      //   setProducts(result.data);
    };
    fetchData();
  }, []);

  const isLoading = (component) => {
    if (loading) {
      return <div>Loading...</div>;
    } else if (error) {
      return <div>{error}</div>;
    } else {
      return <Row>{component}</Row>;
    }
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isLoading(<AllProducts products={products} />)}
        />
        <Route path="update/:slug" element={<UpdateProduct />} />
        <Route path="delete/:slug" element={<DeleteProduct />} />
        <Route path="new/:slug" element={<CreateProduct />} />
        <Route path=":slug" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default Products;
