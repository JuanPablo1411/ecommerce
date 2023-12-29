import { FC, useReducer, ReactNode } from "react";
import { CartContext } from "./CartContext";
import { cartReducer, initialState } from "./cartReducer";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  // Viene Router Provider como children
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
