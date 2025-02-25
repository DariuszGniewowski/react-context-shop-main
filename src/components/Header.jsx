import { useRef } from "react";
import { CartModal } from "./CartModal";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export const Header = () => {

  const cartCtx = useContext(CartContext);
  const modal = useRef();

  const cartQuantity = cartCtx?.items?.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        title="Twój koszyk"
        actions={modalActions}

      />
      <header id="main-header">
        <div id="main-title">
          <h1>ŁO-MOTO</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart({cartQuantity})</button>
        </p>
      </header>
    </>
  );
};

