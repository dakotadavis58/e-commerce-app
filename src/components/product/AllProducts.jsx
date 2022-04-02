import { Col } from "react-bootstrap";
import SingleProduct from "./SingleProduct";

const AllProducts = (props) => {
  const { products } = props;

  return (
    <>
      <h1>All products</h1>
      <div className="products">
        {products.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
            <SingleProduct product={product} />
          </Col>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
