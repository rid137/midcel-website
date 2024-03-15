"use client"

import React, { useEffect, useState } from 'react'
import Footer from '../components/footer';
import Navbar from '../components/nav';
import BackToTop from '../components/back_to_top';

const LandingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        // setSelectedPage("home");
      } 
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
        <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        {!isNavOpen && children}

        {/* {children} */}
        {/* <Footer /> */}
        {!isTopOfPage && <BackToTop />}
        {!isNavOpen && <Footer />}
    </div>
  )
}

export default LandingLayout

