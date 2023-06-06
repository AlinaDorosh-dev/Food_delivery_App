"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import useCart from "@/hooks/useCart";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  //states for navbar styles
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("transparent");
  const [textColor, setTextColor] = useState<string>("text-slate-800");
  const [visible, setVisible] = useState<boolean>(true);

  //check if user is logged in
  const { token } = useAuth();

  const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (token) {
      setUserAuthenticated(true);
    }
  }, [token]);

  const { cartItems } = useCart();

  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname !== "/" &&
      pathname !== "/menu" &&
      !pathname.includes("/menu/")
    ) {
      setBgColor("bg-slate-600");
      setTextColor("text-orange-50");
    }
  }, [pathname]);

  useEffect(() => {
    const changeColorOnScroll = () => {
      if (window.scrollY >= 90) {
        setBgColor("bg-orange-400");
        setTextColor("text-stone-200");
        setVisible(false);
      } else {
        setBgColor("transparent");
        setTextColor("text-slate-800");
        setVisible(true);
      }
    };
    window.addEventListener("scroll", changeColorOnScroll);
  }, []);

  const toggleNavMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Menu", path: "/menu" },
  ];

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
          {navItems.map((item) => (
            <li
              key={item.name}
              className={
                pathname === item.path
                  ? "px-5 text-sm underline underline-offset-8 decoration-2 decoration-slate-800"
                  : "px-5 text-sm hover:underline decoration-orange-600 decoration-2 underline-offset-8"
              }
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}

          <li className='px-5 '>
            <Link href='/cart'>
              <div className='hover:text-orange-500 relative inline-flex items-center'>
                <FaShoppingCart size={25} />
                {cartItems.length > 0 ? (
                  <>
                    <span className='sr-only'>Notifications</span>
                    <div className='absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-500 border-2 border-white rounded-full -top-2 -right-2'>
                      {cartItems.length}
                    </div>
                  </>
                ) : null}
              </div>
            </Link>
          </li>
          <li className='px-5 text-base hover:text-orange-500'>
            <Link href={userAuthenticated ? "/user" : "/login"}>
              <FaUserCircle size={25} />
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
            {navItems.map((item) => (
              <li
                key={item.name}
                className={
                  pathname === item.path
                    ? "p-4 text-2xl underline decoration-slate-600"
                    : "p-4 text-2xl "
                }
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
            <li
              className={
                pathname === "/login"
                  ? "p-4 text-2xl underline decoration-slate-600"
                  : "p-4 text-2xl"
              }
            >
              <Link href={userAuthenticated ? "/user" : "/login"}>
                {userAuthenticated ? "User Room" : "Login"}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
