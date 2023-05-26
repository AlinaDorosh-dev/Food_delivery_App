import { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

export default function useMenu() {
  const { menuItems, setMenuItems } = useContext(MenuContext);
  return { menuItems, setMenuItems };
}
