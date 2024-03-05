"use client"

import CustomHero from '@/app/components/customHero'
import Faq from '@/app/components/faq'
import TalkToUs from '@/app/components/talk_to_us'
import Testimonial from '@/app/components/testimonial'
import CustomButton from '@/utils/customButton'
import { serviceData, techDataLower, techDataUpper, testimonialData } from '@/utils/dummy'
import React from 'react'

const Services = () => {
  return (
    <section>
        <CustomHero title='Service' />

        <div className="p- text-center flex-co flex__column tracking-widest leading-relaxed mb-16 mt-8">
            <h4 className="text-primar text-[.8rem] sm:text-normal">WHAT DO YOU NEED?</h4>
            <h2 className="font-bold text-[1.5rem] sm:text-[2.3rem] text-primary">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:px-20 lg:px-24 px-[1.25rem] mb-8">
            {
                serviceData?.map(({id, img, title}) => (
                    <div key={id} className="bg-greyBg rounded-md flex__column relative p-4 gap-6">
                        <div className="absolute top-4 left-4 text-primary font-bold">0{id}.</div>
                        
                        <img src={img} alt="service image" className='size-28' />
                        <p className="text-[] text-[1.2rem] text-center font-bold">{title}</p>

                        <div className="bg-white p-3 rounded-full hover:bg-primar group cursor-pointer hover:scale-95 transition-all">
                            <svg className='bg-whit' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6953 3.22266C12.474 3.33985 12.321 3.51888 12.2363 3.75977C12.1517 4.00065 12.168 4.23177 12.2852 4.45313C12.2982 4.49219 12.5293 4.74284 12.9785 5.20508C13.4277 5.66732 13.9648 6.20443 14.5898 6.81641L16.8164 9.0625L0.683594 9.08203L0.527344 9.16016C0.371094 9.25131 0.244141 9.37175 0.146484 9.52149C0.0488281 9.67123 0 9.83073 0 10C0 10.1693 0.0488281 10.3288 0.146484 10.4785C0.244141 10.6283 0.371094 10.7487 0.527344 10.8398L0.683594 10.918L16.7969 10.957L14.5898 13.1641C13.9518 13.8021 13.4147 14.3457 12.9785 14.7949C12.5423 15.2441 12.3112 15.4883 12.2852 15.5273C12.2591 15.5794 12.2396 15.638 12.2266 15.7031C12.2135 15.7682 12.207 15.8529 12.207 15.957C12.207 16.0742 12.2135 16.1621 12.2266 16.2207C12.2396 16.2793 12.2721 16.3477 12.3242 16.4258C12.4414 16.6081 12.5977 16.735 12.793 16.8066C12.9883 16.8783 13.1901 16.888 13.3984 16.8359C13.4766 16.8099 13.6882 16.6341 14.0332 16.3086C14.3783 15.9831 15.2669 15.0977 16.6992 13.6523C17.6107 12.7409 18.3691 11.9792 18.9746 11.3672C19.5801 10.7552 19.8893 10.4297 19.9023 10.3906C19.9544 10.2995 19.9837 10.1953 19.9902 10.0781C19.9967 9.96094 19.987 9.85026 19.9609 9.7461C19.9349 9.65495 19.7656 9.44336 19.4531 9.11133C19.1406 8.7793 18.2487 7.87761 16.7773 6.40625C15.918 5.54688 15.1725 4.80469 14.541 4.17969C13.9095 3.55469 13.5742 3.23568 13.5352 3.22266C13.5091 3.19662 13.457 3.17709 13.3789 3.16407C13.3008 3.15104 13.2292 3.14454 13.1641 3.14454C13.0599 3.13151 12.9785 3.13151 12.9199 3.14454C12.8613 3.15756 12.7865 3.1836 12.6953 3.22266Z" fill="#374BB8"/>
                            </svg>
                            {/* <img src="/icons/blueForwardIcon.svg" className='group-hover:text-white' alt="" /> */}

                        </div>


                    </div>
                ))
            }
        </div>

        <TalkToUs />

        <section>
            <div className="md:px-20 lg:px-24 px-[1.25rem] py-10">
                <h3 className="text-center text-primary font-bold text-[1.3rem] md:w-[30%] mx-auto">TOOLS & TECHNOLOGIES OUR SOFTWARE DEVELOPERS USE</h3>
                <p className="text-center text-greyBg md:w-[50%] mt-4 mb-8 mx-auto">MidCel Software's has grown into an international contestant in software engineering with wide-ranging expertise in all the areas needed for reliable software development.</p>

                <div className="flex flex-col xl:flex-row items-center justify-center cursor-default">
                    {
                        techDataUpper?.map((item) => (
                            <div className="px-8 py-6 bg-greyBg w-full xl:w-1/2 border h-[rem] xl:h-[22rem] rounded-t-md" key={item?.id}  >
                                <div className="flex items-center justify-cente gap-3">
                                    <img src={item?.img} alt="tech icon" />
                                    <h4 className="font-bold text-primary uppercase">{item?.title}</h4>
                                </div>
                                
                                <div className="flex items-center justify-start flex-wrap gap-5 mt-6">
                                    {
                                        item?.tools?.map((tool, index) => (
                                            <p key={index} className='border rounded-full border-[#fff] p-2 text-[.8rem]'>{tool}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex items-center flex-col xl:flex-row justify-center cursor-default">
                    {
                        techDataLower?.map((item) => (
                            <div className="px-8 py-6 bg-greyBg w-full xl:w-1/2 border xl:h-[25rem] mt-0 rounded-b-md" key={item?.id}  >
                                <div className="flex items-center justify-cente gap-3">
                                    <img src={item?.img} alt="tech icon" />
                                    <h4 className="font-bold text-primary uppercase">{item?.title}</h4>
                                </div>
                                
                                <div className="flex items-center justify-start flex-wrap gap-5 mt-6">
                                    {
                                        item?.tools?.map((tool, index) => (
                                            <p key={index} className='border rounded-full border-[#fff] p-2 text-[.8rem]'>{tool}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>

        <Testimonial />

        <section>
            <div className="md:px-20 lg:px-24 px-[1.25rem] pt-10">
                <h3 className="text-center text-primary font-bold text-[1.3rem] mx-auto">F.A.Q.</h3>
                <p className="text-center text-greyBg  mt-4 mb-8 mx-auto">Do you have additional questions?</p>
            </div>

            <Faq />

        </section>

    </section>
  )
}

export default Services
