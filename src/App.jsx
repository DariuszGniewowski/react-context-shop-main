
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { CartContext } from "./store/shopping-cart-context";

function App() {

  return (
    <div>
      <CartContext.Provider>
        <Header />
        <Shop />
      </CartContext.Provider>
    </div>
  );
}

export default App;
