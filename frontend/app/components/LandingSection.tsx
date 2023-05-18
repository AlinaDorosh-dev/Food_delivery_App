"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.5]);

  return (
    <div className='flex flex-col md:flex-row h-screen bg-orange-50'>
      <div className='flex flex-col justify-center items-center w-full h-1/2 md:w-1/2 md:h-screen p-8'>
        <motion.div
          className='div'
          style={{
            scale,
          }}
        >
          <motion.h1
            className='text-xl font-black text-orange-400 text-center leading-10'
            style={{
              scaleY: scrollYProgress,
            }}
          >
            Only fresh ingridients
          </motion.h1>
        </motion.div>
        <motion.p
          className='text-base font-bold text-slate-600 text-center mt-10'
          style={{
            scaleY: scrollYProgress,
          }}
        >
          We are committed to providing our customers with the best quality
          products and services.
        </motion.p>
      </div>
      <div className='w-full h-1/2 md:w-1/2 md:h-screen bg-fixed bg-right bg-cover custom-img-four' />
      <a
        href='https://www.freepik.com/free-photo/ketogenic-low-carbs-diet-food-selection-white-wall_12757338.htm#page=5&query=food&position=4&from_view=search&track=sph'
        className='hidden'
      >
        Image by master1305 on Freepik
      </a>
    </div>
  );
}
