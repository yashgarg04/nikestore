import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

import "../style/globals.css";
import Header from "@/components/Header";
import StoreProvider from "@/components/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nike Store",
  description: "This is an unofficial nike store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
