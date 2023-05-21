"use client";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext<CartContext>({
  cartItems: [],
  setCartItems: () => {},
});

export default function CartContextProvider({ children }: ChildrenProps) {
  const [cartItems, setCartItems] = useState<OrderItem[]>([]);
  
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
