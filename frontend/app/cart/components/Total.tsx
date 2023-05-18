"use client";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

export default function Total() {
  const { cartItems } = useContext(MenuContext);
  const total = cartItems.reduce(
    (acc, item) => acc + item.menuItem.price * item.quantity,
    0
  );
  const delivery = total > 30 ? 0 : 3.5;
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center leading-relaxed border border-gray-300 rounded-lg px-8 py-6 shadow-xl my-4 mx-auto w-[80%] md:w-1/2 max-w-xl min-h-[150px] relative  shadow-orange-300/50 mb-14'>
      <div className='text-slate-600 font-semibold text-base'>
        <p>Total order: {total}€</p>
        <p>Delivery: {delivery}€</p>
        <p>Total to pay: {total + delivery}€</p>
      </div>
      <button className='text-white font-semibold text-sm bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:outline-none focus:ring-orange-300 rounded-lg  px-4 py-2 text-center mt-4 sm:mt-0'>
        CONTINUE
      </button>
    </div>
  );
}
