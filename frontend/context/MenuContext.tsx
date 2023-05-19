"use client";
import { createContext, useState, useEffect } from "react";

export const MenuContext = createContext<MenuContext>({
  cartItems: [],
  setCartItems: () => {},
});

export default function MenuContextProvider({ children }: ChildrenProps) {
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
    <MenuContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </MenuContext.Provider>
  );
}
