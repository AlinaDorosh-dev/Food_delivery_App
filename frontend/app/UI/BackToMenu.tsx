/**
 * @fileoverview back to menu button. Reusable component.
 */
"use client";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

export default function BackToMenu() {
  const [onHover, setOnHover] = useState<boolean>(false);
  return (
    <div>
      <div className='text-orange-600 sm:text-base '>
        <Link
          href='/menu'
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <HiOutlineArrowNarrowLeft
            className={
              "inline-block mr-2" +
              (onHover ? " -translate-x-2 transition duration-200" : "")
            }
            size={30}
          />
          <span
            className={
              onHover
                ? "text-slate 800 font-medium transition duration-200"
                : ""
            }
          >
            Back to menu
          </span>
        </Link>
      </div>
    </div>
  );
}
