"use client";
import MenuItem from "./MenuItem";
import useMenu from "@/hooks/useMenu";

export default function Menu() {
  const { menuItems} = useMenu();

  return (
    <div className='flex flex-row justify-evenly flex-wrap p-4 mt-6 md:mt-10 lg:mt-14'>
      {menuItems.map((item: MenuItem) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </div>
  );
}
