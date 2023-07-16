import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dazzle Mart | Home",
  description: "E-commerce Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(poppins.className, "bg-light text-dark")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
