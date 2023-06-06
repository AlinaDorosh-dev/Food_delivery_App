/**
 * @fileoverview total component to show total price and delivery cost.
 */
"use client";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";
import BackToMenu from "@/app/UI/BackToMenu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";

export default function Total() {
  const { cartItems } = useCart();
  const { token } = useAuth();

  //state to move continue button on hover
  const [onHover, setOnHover] = useState<boolean>(false);

  const router = useRouter();

  //if user is logged in, continue button will redirect to order page otherwise to login page
  const handleContinue = () => {
    token ? router.push("/order") : router.push("/login");
  };

  const total: number = cartItems.reduce(
    (count, item) => count + item.menuItem.price * item.quantity,
    0
  );

  const delivery: number = total > 30 ? 0 : 3.5;

  const totalToPay: string = (total + delivery).toFixed(2);

  return (
    <div className='flex flex-col sm:flex-row justify-between items-center leading-relaxed border border-gray-300 rounded-lg px-8 py-6 shadow-xl my-4 mx-auto w-[80%] md:w-1/2 max-w-xl min-h-[150px] relative  shadow-orange-300/50 mb-14 '>
      <div className='text-slate-600 font-medium text-sm'>
        <p>Total order: {total.toFixed(2)}€</p>
        <p>Delivery: {delivery ? `${delivery}€` : "Free"}</p>
        <p>Total to pay: {totalToPay}€</p>
        <div className='hidden sm:block sm:scale-75 sm:-translate-x-6 sm:translate-y-4'>
          <BackToMenu />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <button
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          onClick={handleContinue}
          className='text-white font-semibold text-sm bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:outline-none focus:ring-orange-300 rounded-lg  px-4 py-2 text-center mt-4 sm:mt-0 mb-6 sm:mb-0 w-full'
        >
          CONTINUE{" "}
          <HiOutlineArrowNarrowRight
            size={24}
            className={
              "inline-block ml-2" +
              (onHover ? " translate-x-2 transition duration-200" : "")
            }
          />
        </button>
      </div>
      <div className='sm:hidden scale-75  absolute bottom-2 left-2 '>
        <BackToMenu />
      </div>
    </div>
  );
}
