"use client";
import MenuItem from "./MenuItem";
import useMenu from "@/hooks/useMenu";
import { useState } from "react";

export default function Menu() {
  const { menuItems } = useMenu();
  const categories = menuItems.map((item: MenuItem) => item.category);
  const uniqueCategories = Array.from(new Set(categories));
  console.log("uniqueCategories", uniqueCategories);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const filteredMenuItems = menuItems.filter(
    (item: MenuItem) =>
      item.category === selectedCategory || selectedCategory === "All"
  );

  return (
    <>
      <div className='flex flex-row justify-evenly flex-wrap mt-12 md:mt-16 max-w-4xl mx-auto px-2'>
        <button
          onClick={() => setSelectedCategory("All")}
          className={`${
            selectedCategory === "All"
              ? "bg-orange-500 text-white"
              : "bg-orange-50 text-orange-500"
          } hover:bg-orange-500 hover:text-white px-3 py-1.5 m-1 rounded-full text-sm font-semibold w-[90px]`}
        >
          All
        </button>
        {uniqueCategories.map((category: string) => {
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-orange-50 text-orange-500"
              } hover:bg-orange-500 hover:text-white px-3 py-1.5 m-1 rounded-full text-sm font-semibold w-[90px]`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className='flex flex-row justify-evenly flex-wrap px-4 sm:mt-1 md:mt-4 lg:mt-6 mb-5'>
        {filteredMenuItems.map((item: MenuItem) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}
