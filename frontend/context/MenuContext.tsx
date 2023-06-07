"use client";
import { createContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_MENU } from "@/graphql/queries";


export const MenuContext = createContext<MenuContext>({
  menuItems: [],
  setMenuItems: () => {},
  pending: false,
});

export default function MenuContextProvider({ children }: ChildrenProps) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [pending, setPending] = useState<boolean>(true);

  const { data, loading } = useQuery(GET_MENU);

  useEffect(() => {
    setPending(loading); // Update the pending state based on the loading value
  }, [loading]);

  useEffect(() => {
    if (data) {
      const fetchedMenuItems = data?.getMenuItems?.menuItems ?? [];
      setMenuItems(fetchedMenuItems);
    }
  }, [data]);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems, pending }}>
      {children}
    </MenuContext.Provider>
  );
}
