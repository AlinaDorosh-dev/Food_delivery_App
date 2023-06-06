/**
 * @fileoverview  AddToCart component to add items to cart.
 */
"use client";
import { useState, useEffect } from "react";
import useCart from "@/hooks/useCart";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import ToolTip from "./ToolTip";

type Props = {
  item: MenuItem;
};

export default function AddToCart({ item }: Props) {
  const { cartItems, setCartItems } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [showToolTip, setShowToolTip] = useState<boolean>(false);
  const [toolTipText, setToolTipText] = useState<string>("");

  useEffect(() => {
    if (showToolTip) {
      //Reset quantity to 1
      const timer = setTimeout(() => {
        setQuantity(1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showToolTip]);

  const handleAddToCart = () => {
    //Check if quantity is greater than 10
    if (quantity > 10) {
      setShowToolTip(true);
      setToolTipText("Order a maximum of 10 items");
      return;
    }
    //Check if item is already in cart
    const itemInCart = cartItems.find(
      (cartItem) => cartItem.menuItem.id === item.id
    );

    //If it is, update the quantity
    if (itemInCart) {
      //Check if quantity is greater than 10
      if (itemInCart.quantity + quantity > 10) {
        setShowToolTip(true);
        setToolTipText("Order a maximum of 10 items");
        return;
      }
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.menuItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
      setShowToolTip(true);
      setToolTipText(`${quantity} ${item.name} added to cart`);
      return;
    } else {
      //If not, add it to the cart
      setCartItems((prev) => [
        ...prev,
        { menuItem: item, quantity: quantity, price: item.price },
      ]);
      setShowToolTip(true);
      setToolTipText(`${quantity} ${item.name} added to cart`);
    }
  };
  return (
    <div className='flex justify-between items-center mt-4'>
      <div className='flex justify-between items-center border border-gray-300 rounded-lg px-2 py-1 mr-2'>
        <button
          className=' px-2 py-1 text-slate-600'
          disabled={quantity === 1}
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          <AiOutlineMinus />
        </button>
        <input
          type='number'
          inputMode='numeric'
          pattern='[0-9]*'
          className='appearance-none focus:outline-none w-12 h-8 border border-gray-300 rounded-lg text-center text-slate-600'
          style={{
            appearance: "textfield",
            MozAppearance: "textfield",
            WebkitAppearance: "textfield",
          }}
          value={quantity}
          min={1}
          max={10}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button
          className=' px-2 py-1'
          onClick={() => setQuantity((prev) => prev + 1)}
          disabled={quantity === 10}
        >
          <AiOutlinePlus />
        </button>
      </div>
      <ToolTip
        text={toolTipText}
        showToolTip={showToolTip}
        setShowToolTip={setShowToolTip}
      >
        <button
          onClick={() => handleAddToCart()}
          className=' text-white font-bold text-base md:text-sm bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg  px-4 py-2 text-center'
        >
          Add
        </button>
      </ToolTip>
    </div>
  );
}
