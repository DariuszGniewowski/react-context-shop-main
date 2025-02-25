
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { CartContextProvider } from "./store/shopping-cart-context";

function App() {

  return (
    <div>
      <CartContextProvider>
        <Header />
        <Shop />
      </CartContextProvider>
    </div>
  );
}

export default App;
