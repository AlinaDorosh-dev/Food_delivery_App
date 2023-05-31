import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";

export default function SuccessMessage() {
  return (
    <div className='flex flex-col justify-center items-center py-8 px-4 '>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 2 }}
        transition={{ duration: 0.5 }}
      >
        <AiOutlineCheckCircle className='text-green-500 w-10 h-10 mx-auto' />
      </motion.div>
      <p className='text-slate-700 font-medium text-base mt-8 mb-2 text-justify'>
        Order created successfully and will be delivered within 1 hour!
      </p>
    </div>
  );
}
