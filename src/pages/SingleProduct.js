import { Link, useParams } from "react-router-dom";
import data from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = data.find((eachProduct) => eachProduct.id === productId);

  const { image, name } = product;
  console.log(image, name);
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <Link to="/products">Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
