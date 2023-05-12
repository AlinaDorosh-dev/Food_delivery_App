import Link from "next/link";
export default function LandingPage() {
  return (
    <>
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* overlay */}
        <div className='absolute inset-0 z-[2] w-full h-full bg-black opacity-20' />

        <div className='sm:ml-[20rem] md:ml-[30rem] lg:ml-[40rem] text-center'>
          <h1 className='text-orange-400 text-5xl font-black '>
            Good food.
            <br />
            Good mood.
          </h1>
          <div className='mt-8 px-8 py-2 z-20 border-orange-200 border-double border-4 font-bold shadow-xl text-slate-600 w-45'>
            <Link href='/order'>ORDER NOW</Link>
          </div>
        </div>

        <a
          href='https://www.freepik.com/free-photo/spaghetti-with-marinara-tomato-sauce-topped-with-parmesan-basil-food-photography_15850628.htm#page=6&query=food&position=1&from_view=search&track=sph'
          className='hidden'
        >
          Image by rawpixel.com on Freepik
        </a>
      </div>
    </>
  );
}
