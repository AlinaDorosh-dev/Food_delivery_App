"use client";
import Link from "next/link";
import { GiChefToque } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("transparent");
  const [textColor, setTextColor] = useState<string>("text-slate-800");

  const toggleNavMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const changeColorOnScroll = () => {
      if (window.scrollY >= 90) {
        setBgColor("bg-stone-200");
        setTextColor("text-orange-400");
      } else {
        setBgColor("transparent");
        setTextColor("text-slate-800");
      }
    };
    window.addEventListener("scroll", changeColorOnScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-400 ${bgColor}`}
    >
      <nav
        className={`m-auto flex justify-between items-center py-2 px-6 ${textColor}`}
      >
        <Link href='/'>
          <h1 className='font-bold text-2xl md:text-3xl'>
            <GiChefToque className='m-auto' /> FOODIE
          </h1>
        </Link>
        <ul className='hidden sm:flex'>
          <li className='p-5 text-base hover:underline decoration-orange-500'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-5 text-base hover:underline decoration-orange-500'>
            <Link href='/about'>About</Link>
          </li>
          <li className='p-5 text-base hover:underline decoration-orange-500'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className='p-5 text-base hover:underline decoration-orange-500'>
            <Link href='/order'>New Order</Link>
          </li>
        </ul>

        {/* Burger button */}
        <div className='block sm:hidden z-10'>
          {isOpen ? (
            <AiOutlineClose size={20} onClick={toggleNavMenu} />
          ) : (
            <AiOutlineMenu size={20} onClick={toggleNavMenu} />
          )}
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
              <Link href='/order'>New Order</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
