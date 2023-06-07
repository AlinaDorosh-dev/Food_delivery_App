export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='fixed left-0 bottom-0 w-full flex justify-center items-center h-12 md:h-10 bg-slate-800 text-white z-10 text-center p-1'>
      <p className='text-sm'>
        &copy; {year} FoodApp. All rights reserved. Built by Alina Dorosh.
      </p>
    </footer>
  );
}
