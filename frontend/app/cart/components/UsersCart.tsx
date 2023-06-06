/**
 * @fileoverview users cart component to show all items in the cart and total price.
 */
"use client";
import useCart from "@/hooks/useCart";
import CartItem from "./CartItem";
import Total from "./Total";
import Spinner from "@/app/UI/Spinner";
import BackToMenu from "@/app/UI/BackToMenu";

export default function UsersCart() {
  const { cartItems, pending } = useCart();
  const itemsCount = cartItems.length;

  return (
    <div className='bg-orange-50 min-h-screen min-w-full absolute top-0'>
      <h1 className='text-2xl font-bold text-center mt-20 md:mt-24 mb-2 text-orange-400'>
        Order summary
      </h1>

      <div
        className={
          pending
            ? "flex flex-col items-center justify-center min-h-[80vh]"
            : "flex flex-col items-center justify-center"
        }
      >
        {pending && !itemsCount ? <Spinner /> : null}
        {!pending && itemsCount > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.menuItem.id} item={item} />
          ))
        ) : (
          <div
            className={
              pending
                ? "hidden"
                : "flex flex-col text-base text-slate-700 mt-10 text-center"
            }
          >
            <p className='text-base text-slate-700 mb-10 text-center'>
              Cart is empty
            </p>
            <BackToMenu />
          </div>
        )}
      </div>
      {!pending && itemsCount > 0 ? <Total /> : null}
    </div>
  );
}
