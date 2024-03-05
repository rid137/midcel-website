import { testimonialData } from '@/utils/dummy'
import React from 'react'

const Testimonial = () => {
  return (

    <section>
            <div className="md:px-20 lg:px-24 px-[1.25rem] py-10">
                <h3 className="text-center text-primary font-bold text-[1.3rem] mx-auto">Testimonials</h3>
                <p className="text-center text- opacity-60  mt-4 mb-8 mx-auto">Amazing testimonies from some our prestigious clients</p>

                <div className="flex items-center flex-col xl:flex-row justify-center gap-5">
                    {
                        testimonialData?.map((item) => (
                            <div className="bg-greyBg p-4 w-full xl:w-1/3 min-h-[rem] xl:h-[rem] relative rounded-lg" key={item?.id}>
                                <p className="text-justify text-[.9rem]">{item.message}</p>

                                <div className="flex items-center gap-4 mt-4 absolut bottom-4">
                                    <img src={item?.img} alt="" />
                                    <div className="">
                                        <p className="text-primary">{item?.name}</p>
                                        <p className='text-sm'>{item?.occupation}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
   
  )
}

export default Testimonial
