
import { PRODUCTS_MOCK } from "../products-mock";
import { Product } from "./Product";

export const Shop = () => {
  return (
    <section id="shop">
      <h2>Motocykle z drugiej ręki</h2>

      <ul id="products">
        {PRODUCTS_MOCK.map((product) => (
          <Product
            key={product.id}
            {...product}
          />
        ))}
      </ul>
    </section>
  );
};

