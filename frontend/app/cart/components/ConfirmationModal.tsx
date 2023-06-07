/**@fileoverview
 * ConfirmationModal component to show a confirmation modal when removing an item from the cart.
 */
import { IoCloseSharp } from "react-icons/io5";
import {
  AiOutlineExclamationCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import React, { useState } from "react";
import useCart from "@/hooks/useCart";

type Props = {
  item: OrderItem;
  setOpenConfirm: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ConfirmationModal({ item, setOpenConfirm }: Props) {
  const { setCartItems } = useCart();
  const { id, name } = item.menuItem;

  //State to show the removed confirmation
  const [removed, setRemoved] = useState<boolean>(false);

  const handleRemoveFromCart = () => {
    setRemoved(true);

    setTimeout(() => {
      setOpenConfirm(false);
      setCartItems((prev) =>
        prev.filter((cartItem) => cartItem.menuItem?.id !== id)
      );
    }, 1000);
  };
  return (
    <>
      <div
        id='popup-modal'
        className='fixed  sm:translate-x-1/4 lg:translate-x-1/3 translate-y-1/2 sm:translate-y-1/3 md:translate-y-1/4 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative w-full max-w-md max-h-full'>
          <div className='relative bg-white rounded-lg shadow'>
            {!removed ? (
              <>
                <button
                  type='button'
                  className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                  data-modal-hide='popup-modal'
                  onClick={() => setOpenConfirm(false)}
                >
                  <IoCloseSharp className='text-gray-400 w-4 h-4' />
                </button>
                <div className='p-6 text-center'>
                  <AiOutlineExclamationCircle className='text-orange-400 w-16 h-16 mx-auto flex-shrink-0' />
                  <h3 className='mb-5 text-lg lg:text-base font-normal text-gray-500'>
                    Are you sure you want to delete this delicious{" "}
                    <span className='font-semibold'>{name}</span> ?
                  </h3>
                  <button
                    data-modal-hide='popup-modal'
                    type='button'
                    className='text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'
                    onClick={() => {
                      handleRemoveFromCart();
                    }}
                  >
                    Yes, I am sure
                  </button>
                  <button
                    data-modal-hide='popup-modal'
                    type='button'
                    className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10'
                    onClick={() => setOpenConfirm(false)}
                  >
                    No, cancel
                  </button>
                </div>
              </>
            ) : (
              <div className='p-6 text-center'>
                <AiOutlineCheckCircle className='text-green-400 w-16 h-16 mx-auto flex-shrink-0' />
                <h3 className='mb-5 text-lg lg:text-base font-normal text-gray-500'>
                  <span className='font-semibold'>{name}</span> has been removed
                  from your cart.
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
}
