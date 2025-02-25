import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export const Product = ({
  id,
  image,
  title,
  price,
  description,

}) => {
  const { addItemToCart } = useContext(CartContext);
  return (
    <article className="product">
      <img src={image} alt="foto motocykla" />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">{price} ZŁ</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => addItemToCart(id)}>Dodaj do koszyka</button>
        </p>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};
