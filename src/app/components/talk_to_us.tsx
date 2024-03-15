import CustomButton from '@/utils/customButton'
import React from 'react'

const TalkToUs = () => {
  return (
    <div className="flex-col w-full fle justify-cente items-center py-16 min-h-[rem] md:px-20 lg:px-24 px-[1.25rem]"
            style={{
            background: `
                url("./images/serviceBg__.png") center center/cover no-repeat
            `,
            }}>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full text-[#ccc] h-ful">
                <div className="w-full md:w-2/3 uppercase flex flex-col items-center md:items-start">
                    <p className='mb-4 sm:text-normal text-[.8rem]'>Are you ready for a better services?</p>
                    <p className="sm:text-[1.3rem] text-white text-justify  text-normal">
                        We’ve excelled our experience in awide range of industries to bring valuable insights and provide our customers with the truly beneficial solutions.
                    </p>
                </div>

                <div className="w-full md:w-1/3 flex__center">
                    <CustomButton cls='bg-white w-[15rem] md:w-[50%] text-primary py-1 '>Talk to us</CustomButton>
                </div>
            </div>

            
        </div>
  )
}

export default TalkToUs
