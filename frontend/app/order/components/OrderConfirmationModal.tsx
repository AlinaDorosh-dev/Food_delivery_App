import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

import Confirmation from "./Confirmation";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

type Props = {
  formValues: DeliveryFormValues;
  setOpenConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function OrderConfirmationModal({
  formValues,
  setOpenConfirmation,
}: Props) {
  const [errMsg, setErrMsg] = useState<string>("");

  const [orderCreated, setOrderCreated] = useState<boolean>(false);

  return (
    <>
      <div
        id='popup-modal'
        className='fixed  sm:translate-x-1/4 lg:translate-x-1/3 -translate-y-[90%] sm:translate-y-[20%] md:translate-y-[5%] lg:translate-y-[15%]  z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative w-full max-w-md max-h-full'>
          <div className='relative bg-white rounded-lg shadow p-4'>
            <button
              type='button'
              className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
              data-modal-hide='popup-modal'
              onClick={() => setOpenConfirmation(false)}
            >
              <IoCloseSharp className='text-gray-400 w-4 h-4' />
            </button>

            {orderCreated && !errMsg ? <SuccessMessage /> : null}

            {!orderCreated && !errMsg ? (
              <Confirmation
                formValues={formValues}
                setOrderCreated={setOrderCreated}
                setOpenConfirmation={setOpenConfirmation}
                setErrMsg={setErrMsg}
              />
            ) : null}

            {!orderCreated && errMsg ? <ErrorMessage errMsg={errMsg} /> : null}
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
}
