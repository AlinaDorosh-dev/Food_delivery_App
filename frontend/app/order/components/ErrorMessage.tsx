import {FaRegSadTear} from 'react-icons/fa'   
import { motion } from "framer-motion"; 
import Link from 'next/link';

type Props = {
    errMsg: string;
}

export default function ErrorMessage({errMsg}: Props) {
  return (
    <div className='flex flex-col justify-center items-center py-8 px-4 '>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 2 }}
      transition={{ duration: 0.5 }}
    >
      <FaRegSadTear className='text-orange-600 w-10 h-10 mx-auto' />
    </motion.div>
    <p className='text-slate-700 font-medium text-base mt-8 mb-2 text-justify'>
      {errMsg}
    </p>
    <Link 
    href='/menu'
    className='text-orange-400 font-semibold text-sm hover:text-orange-500 mt-4'
    >
        Go back to menu
    </Link>
  </div>
  )
}
