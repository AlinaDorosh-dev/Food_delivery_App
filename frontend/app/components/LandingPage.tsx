"use client";
import Link from "next/link";
import { LandingSectionTwo, LandingSection } from "./index";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  return (
    <>
      <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img overflow-hidden'>
        <div className='sm:ml-[20rem] md:ml-[30rem] lg:ml-[40rem] text-center'>
          <AnimatePresence>
            <motion.h1
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.5 }}
              className='text-orange-400 text-5xl font-black drop-shadow-xl '
            >
              Good food.
            </motion.h1>

            <motion.h1
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.5 }}
              className='text-orange-400 text-5xl font-black drop-shadow-xl '
            >
              Good mood.
            </motion.h1>

            <motion.p
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1.5 }}
              className='mt-4 text-xl text-slate-600 font-semibold drop-shadow-xl'
            >
              Free delivery on orders over 30€
            </motion.p>
            <Link href='/menu'>
              <motion.button
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%" }}
                transition={{ duration: 1.5 }}
                className='mt-8 px-8 py-2 text-base border-orange-400 border-double border-4 font-bold  text-slate-600 w-[250px] hover:text-white hover:bg-orange-400 hover:border-white hover:border-double hover:shadow-2xl'
              >
                ORDER NOW
              </motion.button>
            </Link>
          </AnimatePresence>
        </div>

        <a
          href='https://www.freepik.com/free-photo/spaghetti-with-marinara-tomato-sauce-topped-with-parmesan-basil-food-photography_15850628.htm#page=6&query=food&position=1&from_view=search&track=sph'
          className='hidden'
        >
          Image by rawpixel.com on Freepik
        </a>
      </div>

      <LandingSection />
      <LandingSectionTwo />
    </>
  );
}
