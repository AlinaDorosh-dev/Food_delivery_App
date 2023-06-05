"use client";
import { type } from "os";
import { useState } from "react";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

type Props = {
  order: OrderHistoryItem;
};

export default function HistoryItem({ order }: Props) {
  const [showDetails, setShowDetails] = useState(false);

  const { items: orderItems } = order || [];

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const formatDate = (date: string) => {
    const milliseconds = parseInt(date, 10);
    const retrieveDate = new Date(milliseconds);

    const formattedDate = retrieveDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formattedDate;
  };

  return (
    <>
      <div
        key={order.id}
        className='flex items-center justify-between w-full sm:w-[90%] md:w-[80%] max-w-6xl border-b-4 border-gray-200 p-4 my-4 lg:my-6 text-slate-700 text-sm font-medium'
      >
        <p>{formatDate(order.createdAt)}</p>
        <p className='ml-4'>{order.totalPrice} €</p>
        <p className='ml-4'>
          {order.status === "pending" ? "In preparation" : "Delivered"}
        </p>
        {showDetails ? (
          <MdKeyboardDoubleArrowUp
            size={25}
            onClick={toggleDetails}
            className='ml-4 text-orange-400 text-xl cursor-pointer hover:text-orange-500'
          />
        ) : (
          <MdKeyboardDoubleArrowDown
            size={25}
            onClick={toggleDetails}
            className='ml-4 text-orange-400 text-xl cursor-pointer hover:text-orange-500'
          />
        )}
      </div>
      {showDetails ? (
        <div className='flex flex-col items-center justify-center w-full'>
          {orderItems.map((item) => (
            <div
              key={item.menuItem.name}
              className='flex items-center justify-between w-full sm:w-[90%] px-4 md:w-[80%] max-w-6xl my-2 lg:my-4 text-slate-700 text-xs sm:text-sm font-medium'
            >
              <p className='font-medium text-orange-600 w-[40%]'>
                {item.menuItem.name}
              </p>

              <p>
                {item.quantity} x {item.menuItem.price} €
              </p>
              <p>{item.quantity * item.menuItem.price} €</p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
