import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();
  const { slug } = params;

  return <div>This is a single product {slug}</div>;
};

export default SingleProduct;
