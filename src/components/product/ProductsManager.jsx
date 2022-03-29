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
import Loading from "../Loading";
import MessageBox from "../MessageBox";
import { getError } from "../../utils";

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
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
      //   setProducts(result.data);
    };
    fetchData();
  }, []);

  const isLoading = (component) => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <MessageBox variant="danger">{error}</MessageBox>;
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
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="update/:slug" element={<UpdateProduct />} />
        <Route path="delete/:slug" element={<DeleteProduct />} />
        <Route path="new/:slug" element={<CreateProduct />} />
      </Routes>
    </>
  );
};

export default Products;
