import "./globals.css";
import { Raleway } from "next/font/google";
import { Navbar, Footer } from "./components/index";
import ApolloWrapper from "@/lib/apollo-wrapper";
import {
  CartContextProvider,
  AuthContextProvider,
  MenuContextProvider,
} from "@/context/index";
import { Metadata } from "next";
import React from "react";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Food Delivery App",
  description: "A food delivery app built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloWrapper>
      <AuthContextProvider>
        <MenuContextProvider>
          <CartContextProvider>
            <html lang='en'>
              <body className={raleway.className}>
                <Navbar />
                {children}
                <Footer />
              </body>
            </html>
          </CartContextProvider>
        </MenuContextProvider>
      </AuthContextProvider>
    </ApolloWrapper>
  );
}
