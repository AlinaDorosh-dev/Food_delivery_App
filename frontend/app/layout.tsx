import "./globals.css";
import { Raleway } from "next/font/google";
import { Navbar, Footer } from "./components/index";
import ApolloWrapper from "@/lib/apollo-wrapper";
import { CartContextProvider, AuthContextProvider } from "@/context/index";

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
      <AuthContextProvider>
        <CartContextProvider>
          <html lang='en'>
            <body className={raleway.className}>
              <Navbar />
              {children}
              <Footer />
            </body>
          </html>
        </CartContextProvider>
      </AuthContextProvider>
    </ApolloWrapper>
  );
}
