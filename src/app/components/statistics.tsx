import React from 'react'

const Statistics = () => {
  return (
    <div className="bg-greyBg w-screen px- py-2 ">
        <div className="flex justify-center items-center gap-4 md:gap-[10rem]">
            <div className="flex__column ">
                <h4 className="text-primary text-[.8rem] sm:text-[1.5rem] md:text-[2rem] font-bold">5,234+</h4>
                <p className='md:text-normal text-[.6rem] sm:text-[.7rem]'>Projects Done</p>
            </div>

            <div className="flex__column">
                <h4 className="text-primary text-[.8rem] sm:text-[1.5rem] md:text-[2rem] font-bold">8,562+</h4>
                <p className='md:text-normal text-[.6rem] sm:text-[.7rem]'>Mentors</p>
            </div>

            <div className="flex__column">
                <h4 className="text-primary text-[.8rem] sm:text-[1.5rem] md:text-[2rem] font-bold">5,586+</h4>
                <p className='md:text-normal text-[.6rem] sm:text-[.7rem]'>Community Member</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics
