import axios from "axios";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../../Store";
import Rating from "./Rating";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "REFRESH_PRODUCT":
//       return { ...state, product: action.payload };
//     case "CREATE_REQUEST":
//       return { ...state, loadingCreateReview: true };
//     case "CREATE_SUCCESS":
//       return { ...state, loadingCreateReview: false };
//     case "CREATE_FAIL":
//       return { ...state, loadingCreateReview: false };
//     case "FETCH_REQUEST":
//       return { ...state, loading: true };
//     case "FETCH_SUCCESS":
//       return { ...state, product: action.payload, loading: false };
//     case "FETCH_FAIL":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

/**
 * MAJOR PROBLEM, PRODUCT IS COMING FROM PROPS AND NOT CONTEXT. MUST FIX FOR CART QUANTITY TO WORK PROPERLY
 * @param {object} props the product to be proccessed
 * @returns UI for a product card in AllProducts screen
 */
const SingleProduct = (props) => {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  // const [{ loading, error, product, loadingCreateReview }, dispatch] =
  //   useReducer(reducer, {
  //     product: [],
  //     loading: true,
  //     error: "",
  //   });

  /**
   * checks if item exists in cart, checks what its quantity is, gets the product data from backend
   * if stock is 0, print message, else send a dispatch action with a payload of the item and its quantity
   *  to the StoreProvider
   * @param {object} item the item to be updated in the cart
   * @returns
   */
  const addToCartHandler = async () => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
  };

  return (
    <Card key={product._id}>
      <Link to={`/products/${product._id}`}>
        <img className="card-img-top" src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>$ {product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>Add To Cart</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
