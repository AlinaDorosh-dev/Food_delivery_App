import { Metadata } from "next";
import UsersCart from "./components/UsersCart";


export const metadata: Metadata = {
  title: "Cart",
  description: "Cart page",
};

export default function Cart() {
 
  return <div>
    <UsersCart />
  </div>;
}
