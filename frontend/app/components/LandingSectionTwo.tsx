"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingSectionTwo() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.5]);

  return (
    <div className='flex flex-col md:flex-row h-screen bg-orange-50'>
      <div className='w-full h-1/2 md:w-1/2 md:h-screen bg-fixed bg-right bg-cover custom-img-five' />
      <a
        href='https://www.freepik.com/free-photo/person-s-hand-holding-alarm-clock-hand-breakfast-table_2709127.htm#query=food%20and%20clock&position=0&from_view=search&track=ais'
        className='hidden'
      >
        Image by Freepik
      </a>
      <div className='flex flex-col justify-center items-center w-full h-1/2 md:w-1/2 md:h-screen p-8'>
        <motion.div
          className='div'
          style={{
            scale,
          }}
        >
          <motion.h1
            className='text-xl font-black text-orange-400 text-center leading-10 py-2'
            style={{
              scaleY: scrollYProgress,
            }}
          >
            Time is precious
          </motion.h1>
        </motion.div>
        <motion.p
          className='text-sm font-medium text-slate-600 text-justify mt-10'
          style={{
            scaleY: scrollYProgress,
          }}
        >
          We understand the value of your time and strive to make your life
          easier by delivering delicious meals right to your doorstep. Say
          goodbye to grocery shopping, meal preparation, and cooking. Let us take
          care of the cooking while you focus on the moments that truly enrich
          your life
        </motion.p>
      </div>
    </div>
  );
}
