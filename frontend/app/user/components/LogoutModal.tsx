/**
 * @fileoverview logout modal component to display when the user clicks on the logout button.
 */
import { FaRegSadTear } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  setConfirmLogout: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogout: () => void;
};

export default function LogoutModal({ setConfirmLogout, handleLogout }: Props) {
  return (
    <>
      <div
        id='popup-modal'
        className='fixed translate-x-[10%] sm:translate-x-1/4 lg:translate-x-1/3  -translate-y-1/4 sm:translate-y-1/3 md:translate-y-1/4 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative w-full max-w-md min-w-[300px] max-h-full'>
          <div className='relative bg-white rounded-lg shadow z-100'>
            <button
              type='button'
              className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
              data-modal-hide='popup-modal'
              onClick={() => setConfirmLogout(false)}
            >
              <IoCloseSharp className='text-gray-400 w-4 h-4' />
            </button>
            <div className='flex flex-col justify-center items-center py-8 px-4 '>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 2 }}
                transition={{ duration: 0.5 }}
              >
                <FaRegSadTear className='text-orange-600 w-10 h-10 mx-auto' />
              </motion.div>
              <p className='text-slate-700 font-medium text-base mt-8 mb-4 text-justify'>
                Already leaving?
              </p>
              <div className='flex items-center justify-evenly w-[80%]'>
                <button
                  data-modal-hide='popup-modal'
                  type='button'
                  className='text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Leave
                </button>
                <button
                  data-modal-hide='popup-modal'
                  type='button'
                  className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10'
                  onClick={() => setConfirmLogout(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
}
