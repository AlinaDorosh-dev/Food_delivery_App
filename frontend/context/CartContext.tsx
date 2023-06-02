"use client";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext<CartContext>({
  cartItems: [],
  setCartItems: () => {},
  pending: true,
});

export default function CartContextProvider({ children }: ChildrenProps) {
  const [cartItems, setCartItems] = useState<OrderItem[]>([]);
  const [pending, setPending] = useState<boolean>(true);
  
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartItems(JSON.parse(cart));
      setPending(false);
    }
  }, []);

  useEffect(() => {
    if(cartItems){
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    
  }, [cartItems]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, pending}}>
      {children}
    </CartContext.Provider>
  );
}
