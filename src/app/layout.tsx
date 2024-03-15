// "use client"
import type { Metadata } from "next";
import "./globals.css";


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
        {/* <Template key={1}>{children}</Template> */}

        </body>

    </html>
  );
}


// "use client"

// import React, { useEffect, useState } from 'react'
// import Footer from '../app/components/footer';
// import Navbar from '../app/components/nav';
// import BackToTop from '../app/components/back_to_top';

// const LandingLayout = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

//   const [isTopOfPage, setIsTopOfPage] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY === 0) {
//         setIsTopOfPage(true);
//         // setSelectedPage("home");
//       } 
//       if (window.scrollY !== 0) setIsTopOfPage(false);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);


//   return (
//     <div>
//         <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
//         {!isNavOpen && children}

//         {/* {children} */}
//         {/* <Footer /> */}
//         {!isTopOfPage && <BackToTop />}
//         {!isNavOpen && <Footer />}
//     </div>
//   )
// }

// export default LandingLayout

