import Link from "next/link";
import { Slider, LandingSection } from "./index";

export default function LandingPage() {
  return (
    <>
      <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
        <div className='sm:ml-[20rem] md:ml-[30rem] lg:ml-[40rem] text-center'>
          <h1 className='text-orange-400 text-5xl font-black drop-shadow-xl '>
            Good food.
            <br />
            Good mood.
          </h1>
          <p className='mt-4 text-xl text-slate-600 font-semibold'>
            Free delivery on orders over 30€
          </p>
          <Link href='/order'>
            <button className='mt-8 px-8 py-2 text-base border-orange-400 border-double border-4 font-bold  text-slate-600 w-[250px] hover:text-white hover:bg-orange-400 hover:border-white hover:border-double hover:shadow-2xl'>
              ORDER NOW
            </button>
          </Link>
        </div>

        <a
          href='https://www.freepik.com/free-photo/spaghetti-with-marinara-tomato-sauce-topped-with-parmesan-basil-food-photography_15850628.htm#page=6&query=food&position=1&from_view=search&track=sph'
          className='hidden'
        >
          Image by rawpixel.com on Freepik
        </a>
      </div>
      <Slider />
      <LandingSection />
      
    </>
  );
}
