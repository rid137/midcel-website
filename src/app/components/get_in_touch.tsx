import CustomButton from '@/utils/customButton'
import React from 'react'

const GetInTouch = () => {
  return (
    <section className="md:px-20 lg:px-32 px-[1.25rem] my-16">
                <div className="p- text-center flex-co flex__column tracking-widest leading-relaxed mb-16">
                    <h4 className="text-primary">Contact US</h4>
                    <h2 className="font-bold text-[1.3rem] md:text-[2.3rem]">Get in touch <br /> We’ll help your <span className="text-primary">IT solution</span></h2>
                </div>

                <form action="">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-[1.2rem] w-full ">
                        <div className="w-full md:w-1/2 flex__column gap-3">
                            <input type="text" placeholder="Full Name" className="p-4 bg-greyBg rounded-md w-full focus:outline-primary" />
                            <input type="text" placeholder="Email Address" className="p-4 bg-greyBg rounded-md w-full focus:outline-primary" />
                            <input type="text" placeholder="Phone Number (WhatsApp Num)" className="p-5 bg-greyBg rounded-md w-full focus:outline-primary" />
                            {/* <input type="select" placeholder="Phone No" className="p-4 bg-greyBg rounded-md w-full focus:outline-primary" /> */}
                            
                            <select id="creditConsultMethod" className="p-4 bg-greyBg rounded-md w-full focus:outline-primary" >
                                <option value="">Choose your budget</option>
                                <option value="">Item 1</option>
                                <option value="">Item 2</option>
                            </select>
                           


                        </div>
                        
                        <div className="w-full md:w-1/2 flex__column gap-4 md:gap-2">
                            <textarea name="" id="" cols={30} rows={8} placeholder='Your message' className="resize-none bg-greyBg w-full p-4 focus:outline-primary" />
                            <CustomButton cls=" w-full py-1 btnL bg-[#276AD9] text-white">send message now</CustomButton>
                        </div>

                    </div>
                </form>
                <p className="text-center mt-4">By submitting this message you consent to receiving emails from MidCel Software's</p>
            </section>
  )
}

export default GetInTouch
