"use client";

import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";

export default function Total() {
  const { cartItems } = useCart();
  const { token } = useAuth();
 

  const router = useRouter();

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
    <div className='flex flex-col sm:flex-row justify-between items-center leading-relaxed border border-gray-300 rounded-lg px-8 py-6 shadow-xl my-4 mx-auto w-[80%] md:w-1/2 max-w-xl min-h-[150px] relative  shadow-orange-300/50 mb-14'>
      <div className='text-slate-600 font-semibold text-base'>
        <p>Total order: {total}€</p>
        <p>Delivery: {delivery}€</p>
        <p>Total to pay: {totalToPay}€</p>
      </div>

      <button
        onClick={handleContinue}
        className='text-white font-semibold text-sm bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:outline-none focus:ring-orange-300 rounded-lg  px-4 py-2 text-center mt-4 sm:mt-0'
      >
        CONTINUE
      </button>
    </div>
  );
}
