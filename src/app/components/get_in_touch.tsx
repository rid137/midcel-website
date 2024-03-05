import CustomButton from '@/utils/customButton'
import React from 'react'

const GetInTouch = () => {
  return (
    <section className="md:px-20 lg:px-32 px-[1.25rem] mt-16">
                <div className="p- text-center flex-co flex__column tracking-widest leading-relaxed mb-16">
                    <h4 className="text-primary">Contact US</h4>
                    <h2 className="font-bold text-[1.3rem] md:text-[2.3rem]">Get in touch <br /> We’ll help your <span className="text-primary">IT solution</span></h2>
                </div>

                <form action="">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-[1.2rem] w-full mb-16">
                        <div className="w-full md:w-1/2 flex__column gap-3">
                            <input type="text" placeholder="First Name" className="p-4 bg-greyBg rounded-md w-full focus:outline-primary" />
                            <input type="text" placeholder="Last Name" className="p-4 bg-greyBg rounded-md w-full focus:outline-primary" />
                            <input type="text" placeholder="Email Address" className="p-4 bg-greyBg rounded-md w-full focus:outline-primary" />
                            <input type="text" placeholder="Phone No" className="p-4 bg-greyBg rounded-md w-full focus:outline-primary" />


                        </div>
                        
                        <div className="w-full md:w-1/2 flex__column gap-4 md:gap-2">
                            <textarea name="" id="" cols={30} rows={8} placeholder='Your message' className="resize-none bg-greyBg w-full p-4 focus:outline-primary" />
                            <CustomButton cls=" w-full py-1 btnL bg-[#276AD9] text-white">send message now</CustomButton>
                        </div>

                    </div>
                </form>
            </section>
  )
}

export default GetInTouch
