import { Metadata } from "next";
import DeliveryForm from "./components/DeliveryForm";

export const metadata: Metadata = {
  title: "Order",
  description: "Order page",
};

export default function Order() {
  
  return (
    <div className='bg-orange-50 min-h-screen min-w-full absolute top-0'>
      <h1 className='text-2xl font-bold text-center mt-14 md:mt-20 mb-2 text-orange-400'>
        Delivery details
      </h1>
      <DeliveryForm  />
    </div>
  );
}
