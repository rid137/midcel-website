import CustomHero from '@/app/components/customHero'
import GetInTouch from '@/app/components/get_in_touch'
import TalkToUs from '@/app/components/talk_to_us'
import { caseStudyData } from '@/utils/dummy'
import React from 'react'

const CaseStudy = () => {
    const options = ["All Case", "Web Apps", "Mobile Apps", "Cloud Services"]
  return (
    <section>
        <CustomHero title='Case Study' />

        <div className="py-12">
            <h3 className="text-center text-primary font-bold text-[1.3rem] mx-auto">Case Studies</h3>
            <p className="text-center text-grey tracking-wider  mt-4 mb-8 px-[1.25rem] mx-auto">Developing a competitive advantage calls for developing more intelligent software solutions.</p>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-4 px-[1rem]">
            {
                options?.map((option, index) => (
                    <div key={index} className="cursor-default p-2 md:py-3 md:px-4 bg-greyBg text-black rounded-md hover:bg-primary group">
                        <p className="group-hover:text-white md:text-normal text-[.5rem] sm:text-[.8rem]">{option}</p>
                    </div>
                ))
            }
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:px-20 lg:px-24 px-[1.25rem] my-10">
            {
                caseStudyData?.map((item) => (
                    <div key={item?.id} className="bg-greyBg rounded-md ">
                        <div className="p-10 ">
                            <p className='text-primary'>{item?.title}</p>
                            <p className="text-[1.2rem] font-bold">{item?.topic}</p>

                        </div>

                        <div className="w-full">
                            <img src={item?.img} className='w-full h-[20rem]' alt="" />
                        </div>

                    </div>
                ))
            }
        </div>

        <GetInTouch />
        <TalkToUs />

    </section>
  )
}

export default CaseStudy
