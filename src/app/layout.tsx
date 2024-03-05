// "use client"
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/nav";
// import { useState } from "react";


export const metadata: Metadata = {
  title: "Midcel Softwares",
  description: "Software Solutions For All",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  return (
    <html lang="en">
      <body className="font-poppins">
        {/* <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} /> */}
          {/* {!isNavOpen && children} */}
        {children}
        </body>
    </html>
  );
}
