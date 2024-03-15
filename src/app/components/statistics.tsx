import React from 'react'

const Statistics = () => {
  return (
    <div className="bg-greyBg w-screen px- py-6 md:py-4 ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-[3rem] sm:gap-[5rem] lg:gap-[10rem]">
            <div className="flex__column ">
                <h4 className="text-primary text-[1.1rem] sm:text-[1.5rem] lg:text-[2rem] font-bold">5,234+</h4>
                <p className='md:text-normal text-[.8rem] sm:text-[.7rem]'>Projects Done</p>
            </div>

            <div className="flex__column">
                <h4 className="text-primary text-[1.1rem] sm:text-[1.5rem] lg:text-[2rem] font-bold">8,562+</h4>
                <p className='md:text-normal text-[.8rem] sm:text-[.7rem]'>Mentors</p>
            </div>

            <div className="flex__column">
                <h4 className="text-primary text-[1.1rem] sm:text-[1.5rem] lg:text-[2rem] font-bold">5,586+</h4>
                <p className='md:text-normal text-[.8rem] sm:text-[.7rem]'>Community Member</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics
