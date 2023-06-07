/**
 * @fileoverview history item component to show order history.
 */
"use client";

import { useState } from "react";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

type Props = {
  order: OrderHistoryItem;
};

export default function HistoryItem({ order }: Props) {
  //state to toggle order details
  const [showDetails, setShowDetails] = useState(false);

  const { items: orderItems, id, totalPrice, createdAt, status } = order || [];

  const toggleDetails = () => setShowDetails(!showDetails);
  
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
        key={id}
        className='flex items-center justify-between w-full sm:w-[90%] md:w-[80%] max-w-6xl border-b-4 border-gray-200 p-4 my-4 lg:my-6 text-slate-700 text-sm font-medium'
      >
        <p>{formatDate(createdAt)}</p>
        <p className='ml-4'>{totalPrice} €</p>
        <p className='ml-4'>
          {status === "pending" ? "In preparation" : "Delivered"}
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
          {orderItems.map(({ menuItem, quantity }) => (
            <div
              key={menuItem.name}
              className='flex items-center justify-between w-full sm:w-[90%] px-4 md:w-[80%] max-w-6xl my-2 lg:my-4 text-slate-700 text-xs sm:text-sm font-medium'
            >
              <p className='font-medium text-orange-600 w-[40%]'>
                {menuItem.name}
              </p>

              <p>
                {quantity} x {menuItem.price} €
              </p>
              <p>{quantity * menuItem.price} €</p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
