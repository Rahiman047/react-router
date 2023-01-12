import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <>
      <section className="section">
        <h2>products</h2>
        <div className="products">
          {products.map((eachProduct) => {
            return (
              <article key={eachProduct.id}>
                <h5>{eachProduct.name}</h5>
                <Link to={`/products/${eachProduct.id}`}>View more...</Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
