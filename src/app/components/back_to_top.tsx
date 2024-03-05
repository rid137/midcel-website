import React from 'react'
import { FaArrowUp, FaCircleArrowUp } from 'react-icons/fa6'

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

const BackToTop = () => {
  return (
    <div className='fixed bottom-4 right-4 size-[3rem] md:size-[4rem] flex__center cursor-pointer bg-primary rounded-full p-1 text-[.5rem]' onClick={scrollToTop}>
        {/* <FaCircleArrowUp className='text-primary size-full' /> */}
        <FaArrowUp className='text-white size-ful text-center text-[1.3rem] md:text-[1.6rem]' />

    </div>
    // <div
    //   className={`fixed bottom-4 right-4 size-[4rem] cursor-pointer ${
    //     isVisible ? 'opacity-100' : 'opacity-0'
    //   } transition-opacity duration-300`}
    //   onClick={scrollToTop}
    // >
    //   <FaArrowCircleUp className='text-primary size-full' />
    // </div>
  )
}

export default BackToTop
