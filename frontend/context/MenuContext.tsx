"use client";
import { createContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_MENU } from "@/graphql/queries";

export const MenuContext = createContext<MenuContext>({
    menuItems: [],
    setMenuItems: () => {},
});

export default function MenuContextProvider({ children }: ChildrenProps) {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    const { data } = useQuery(GET_MENU);

    useEffect(() => {
        if (data) {
            const fetchedMenuItems = data?.getMenuItems?.menuItems ?? [];
            setMenuItems(fetchedMenuItems);
        }
    }, [data]);

    
    return (
        <MenuContext.Provider value={{ menuItems, setMenuItems }}>
            {children}
        </MenuContext.Provider>
    );
}