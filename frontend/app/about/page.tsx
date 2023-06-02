import { Metadata } from "next";

import About from "./components/About";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default function AboutPage() {
  return <About />;
}
