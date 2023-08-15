import { createContext } from "react";
import { useCart } from "../hook/useCart";

export const ShopContext = createContext({
  cartItems: null,
  addToCart: () => {},
  removeFromCart: () => {},
});

export const ShopContxtProvider = (props) => {
  return (
    <ShopContxtProvider value={useCart()}>{props.children}</ShopContxtProvider>
  );
};
