"use client";
import { useContext, useState, useEffect } from "react";
import { MenuContext } from "../../context/MenuContext";
import { IoTrashBin } from "react-icons/io5";
import ConfirmationModal from "./ConfirmationModal";

import Image from "next/image";
type Props = {
  item: OrderItem;
};

function CartItem({ item }: Props) {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);

  return (
    <>
      {openConfirm ? (
        <ConfirmationModal item={item} setOpenConfirm={setOpenConfirm} />
      ) : null}

      <div className='flex justify-between items-center border border-gray-300 rounded-lg px-2 py-1 shadow-xl my-4 w-[80%] md:w-1/2 max-w-xl h-[150px] relative  shadow-orange-300/50 hover:shadow-orange-400/100 transition duration-300 ease-in-out transform '>
        <div className='flex items-center'>
          <div className='relative '>
             <Image
              src={item.menuItem.image}
              alt={item.menuItem.name}
              width={80}
              height={30}
              className='rounded-lg object-cover'
            /> 
          </div>
          <div className='ml-4'>
            <p className='text-slate-600 font-semibold text-base'>
              {item.menuItem.name}
            </p>
            <p className='text-slate-600 text-sm'>
              {item.quantity} x {item.menuItem.price}€
            </p>
          </div>
        </div>
        <button
          className='px-2 py-1 absolute right-2 bottom-2'
          onClick={() => setOpenConfirm(true)}
        >
          <IoTrashBin className='text-slate-600 text-2xl md:text-lg hover:text-orange-400' />
        </button>
      </div>
    </>
  );
}

export default CartItem;
