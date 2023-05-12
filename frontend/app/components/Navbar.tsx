import Link from "next/link";
import { GiChefToque } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  return (
    <header className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <nav className='m-auto flex justify-between items-center p-6 text-slate-800'>
        <Link href='/'>
          <h1 className="font-bold text-2xl md:text-3xl">
            <GiChefToque className="m-auto"/> FOODIE
          </h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-5 text-base">
            <Link href='/'>Home</Link>
          </li>
          <li className="p-5 text-base">
            <Link href='/about'>About</Link>
          </li>
          <li className="p-5 text-base">
            <Link href='/contact'>Contact</Link>
          </li>
          <li className="p-5 text-base">
            <Link href='/order'>New Order</Link>
          </li>
        </ul>

        {/* Burger button */}
        <div className='block sm:hidden z-10'>
          <AiOutlineMenu size={20} />
        </div>
        {/* Mobile menu */}
        <div className='sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center'>
          <AiOutlineClose size={20} />
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
            <Link href='/contact'>Contact</Link>
          </li>
            <li>
              <Link href='/order'>New Order</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
