import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ApolloWrapper from "@/lib/apollo-wrapper";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Food Delivery App",
  description: "A food delivery app built with Next.js and Tailwind CSS",
  author: "Alina Dorosh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloWrapper>
      <html lang='en'>
        <body className={raleway.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ApolloWrapper>
  );
}
