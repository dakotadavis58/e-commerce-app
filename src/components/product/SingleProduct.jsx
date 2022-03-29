import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const SingleProduct = (props) => {
  const { product } = props;

  return (
    <Card key={product.slug}>
      <Link to={`/products/${product.slug}`}>
        <img className="card-img-top" src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>$ {product.price}</Card.Text>
        <Button>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
