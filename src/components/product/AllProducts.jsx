import { Link } from "react-router-dom";

const AllProducts = (props) => {
  return (
    <>
      <h1>All products</h1>
      <div className="products">
        {props.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/products/${product.slug}`}>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
            </Link>
            <div className="product-info">
              <Link to={`/products/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>$ {product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
