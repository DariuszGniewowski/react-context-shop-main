import PropTypes from "prop-types";
import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";

export const Cart = ({ onUpdateItemQuantity }) => {
  const cartContext = useContext(CartContext);

  const totalPrice = cartContext.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `${totalPrice.toFixed(2)} ZŁ`;

  return (
    <div id="cart">
      {cartContext.items.length === 0 && <p>Brak przedmiotów w koszyku!</p>}
      {cartContext.items.length > 0 && (
        <ul id="cart-items">
          {cartContext.items.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span>{item.price} ZŁ</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.array,
  onUpdateItemQuantity: PropTypes.func,
};
