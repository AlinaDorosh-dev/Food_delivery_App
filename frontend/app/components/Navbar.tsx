"use client";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { MenuContext } from "../context/MenuContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("transparent");
  const [textColor, setTextColor] = useState<string>("text-slate-700");
  const [visible, setVisible] = useState<boolean>(true);

  const { cartItems } = useContext(MenuContext);

  const toggleNavMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const changeColorOnScroll = () => {
      if (window.scrollY >= 90) {
        setBgColor("bg-orange-400");
        setTextColor("text-stone-200");
        setVisible(false);
      } else {
        setBgColor("transparent");
        setTextColor("text-slate-700");
        setVisible(true);
      }
    };
    window.addEventListener("scroll", changeColorOnScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-400 ${bgColor}`}
    >
      <nav
        className={`m-auto flex justify-between items-center py-3 px-6 ${textColor}`}
      >
        <Link href='/'>
          <h1 className='font-bold text-xl md:text-2xl ml-2 md:ml-8'>
            FOODAPP
          </h1>
        </Link>
        <ul className='hidden sm:flex'>
          <li className='px-5 text-base hover:underline decoration-orange-500'>
            <Link href='/'>Home</Link>
          </li>
          <li className='px-5 text-base hover:underline decoration-orange-500'>
            <Link href='/about'>About</Link>
          </li>
          <li className='px-5 text-base hover:underline decoration-orange-500'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className='px-5 text-base hover:underline decoration-orange-500'>
            <Link href='/menu'>Menu</Link>
          </li>
          <li className='px-5 '>
            <Link href='/cart'>
              <div className='hover:text-orange-500 relative inline-flex items-center'>
                <FaShoppingCart size={30} />
                {cartItems.length > 0 ? (
                  <>
                    <span className='sr-only'>Notifications</span>
                    <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-orange-500 border-2 border-white rounded-full -top-2 -right-2'>
                      {cartItems.length}
                    </div>
                  </>
                ) : null}
              </div>
            </Link>
          </li>
          <li className='px-5 text-base hover:underline decoration-orange-500'>
            <Link href='/login'>
              <FaUserCircle size={30} />
            </Link>
          </li>
        </ul>

        {/* Burger button */}
        <div className='flex justify-end sm:hidden'>
          <div className='mx-6 relative inline-flex items-center sm:hidden '>
            <Link href='/cart'>
              <FaShoppingCart size={20} />
              {cartItems.length > 0 ? (
                <>
                  <span className='sr-only'>Notifications</span>
                  <div className='absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-orange-500 border-2 border-white rounded-full -top-2 -right-2'>
                    {cartItems.length}
                  </div>
                </>
              ) : null}
            </Link>
          </div>
          <div className='block sm:hidden z-10'>
            {isOpen ? (
              <AiOutlineClose size={20} onClick={toggleNavMenu} />
            ) : (
              <AiOutlineMenu size={20} onClick={toggleNavMenu} />
            )}
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={
            isOpen
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-stone-200 text-center text-slate-800 ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-stone-200 text-center text-slate-800 ease-in duration-300 "
          }
        >
          <ul>
            <li className='p-4 text-2xl hover:text-orange-500'>
              <Link href='/'>Home</Link>
            </li>
            <li className='p-4 text-2xl hover:text-orange-500'>
              <Link href='/about'>About</Link>
            </li>
            <li className='p-4 text-2xl hover:text-orange-500'>
              <Link href='/contact'>Contact</Link>
            </li>
            <li className='p-4 text-2xl hover:text-orange-500'>
              <Link href='/menu'>Menu</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
