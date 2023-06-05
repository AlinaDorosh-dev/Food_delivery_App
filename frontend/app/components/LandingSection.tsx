export default function LandingSection() {
  return (
    <div className='flex flex-col md:flex-row h-screen bg-orange-50'>
      <div className='flex flex-col justify-center items-center w-full h-1/2 md:w-1/2 md:h-screen p-8'>
        <div>
          <h1 className='text-xl font-black text-orange-400 text-center leading-10 py-2'>
            Only fresh ingredients
          </h1>
        </div>
        <p className='text-base font-medium text-slate-600 text-justify mt-10'>
          We are committed to providing our customers with the best quality
          products and services.From farm to table, we prioritize freshness
          every step of the way to deliver an exceptional dining experience.
          Taste the difference that fresh ingredients make in every bite.
        </p>
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
