import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function useCart() {
  const { cartItems, setCartItems , pending} = useContext(CartContext);
  return { cartItems, setCartItems, pending };
}
