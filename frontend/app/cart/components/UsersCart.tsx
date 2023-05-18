"use client";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import CartItem from "./CartItem";
import Total from "./Total";

export default function UsersCart() {
  const { cartItems } = useContext(MenuContext);

  return (
    <div className='bg-orange-50 min-h-screen min-w-full absolute top-0'>
      <h1 className='text-2xl font-bold text-center mt-14 md:mt-20 mb-2 text-orange-400'>
        Order summary
      </h1>

      <div className='flex flex-col items-center justify-center'>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.menuItem.id} item={item} />
          ))
        ) : (
          <p className='text-base mt-8'>Cart is empty</p>
        )}
      </div>
      {cartItems.length > 0 ? <Total /> : null}
    </div>
  );
}
