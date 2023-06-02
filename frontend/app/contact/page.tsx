import { Metadata } from "next";
import Contact from "./components/Contact";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact page",
  };

export default function ContactPage() {
  return (
    <Contact/>
  )
}
