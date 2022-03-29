import axios from "axios";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../../Store";
import Rating from "./Rating";

const SingleProduct = (props) => {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  // const addToCartHandler = async () => {
  //   const existItem = cart.cartItems.find((x) => x._id === product._id);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;
  //   const { data } = await axios.get(`products/${product._id}`);
  //   if (data.countInStock < quantity) {
  //     window.alert("Sorry, Product is out of stock");
  //     return;
  //   }
  //   ctxDispatch({
  //     type: "CART_ADD_ITEM",
  //     payload: { ...product, quantity },
  //   });
  // };

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/products`);
    if (data.countInStock < quantity) {
      window.alert("Sorry, Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
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
