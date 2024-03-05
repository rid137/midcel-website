import CustomButton from '@/utils/customButton'
import { renderSocials } from '@/utils/dummy'
import React from 'react'
import Logo from './logo'

const Footer = () => {
  return (
    <>
        <section>
                <div className="flex-col w-full fle items-center h-[25rem]"
                style={{
                background: `
                    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                    url("./images/getStarted.jpg") center center/cover no-repeat
                `,
                }}>

                    <div className="p- text-center flex-co flex__column tracking-widest leading-relaxed text-white h-full">
                        <ul className="flex__center gap-4 sm:gap-6">
                            {
                                renderSocials?.map(({id, img}) => (
                                    <li key={id} className="cursor-pointer">
                                        <img src={img} alt="" />
                                    </li>
                                ))
                            }
                        </ul>
                        <h2 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.3rem] mb-10 mt-4 px-[1.25rem]">Start your next project with us</h2>
                        <CustomButton cls="uppercase btnSm">Get Started</CustomButton>
                    </div>

                </div>
            </section>

            <section>
                <div className="bg-black text-[#ccc] common__padding py-10 gap-[2rem] md:gap-y-[3rem] md:gap-x-[5rem]  md:gap-[rem] lg:gap-[10rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    
                    {/* FIRST COLUMN */}
                    <div className="">
                        <Logo />
                        <p className="border-t border-[#ccc] mt-4 pt-4 text-justify text-[.9rem]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>

                    {/* SECOND COLUMN */}
                    <div className="">
                        <h3 className="text-[1.2rem] font-bold uppercase">navigation</h3>

                        <ul className="flex flex-col gap-2 mt-6 text-[.9rem]">
                            <li className="cursor-pointer hover:text-primary">Home</li>
                            <li className="cursor-pointer hover:text-primary">IT Services</li>
                            <li className="cursor-pointer hover:text-primary">Case Study</li>
                            <li className="cursor-pointer hover:text-primary">Blog</li>
                            <li className="cursor-pointer hover:text-primary">About us</li>
                        </ul>
                    </div>

                    {/* THIRD COLUMN */}
                    <div className="">
                        <h3 className="text-[1.2rem] font-bold uppercase">contact</h3>

                        <ul className="flex flex-col gap-2 mt-6 text-[.9rem]">
                            <li className="cursor-default hover:text-primary">+234 9002020202</li>
                            <li className="cursor-default hover:text-primary">+234 8032901289</li>
                            <li className="cursor-default hover:text-primary">info@midcelsoftwares.com</li>
                            <li className="cursor-default hover:text-primary">Stock building, 125 Main Street 1st Lane, Ibadan, Nigeria</li>
                        </ul>
                    </div>

                    {/* FOURTH COLUMN */}
                    <div className="text-[.9rem]">
                        <h3 className="text-[1.2rem] font-bold uppercase">subscribe</h3>

                        <input type="text" placeholder="enter email here" className="px-2 py-1 mt-6 bg-transparent border border-greyBg rounded-md w-full focus:outline-prim" />
                        <CustomButton cls=" w-full py-1 btnL bg-[#276AD9] mt-4">Submit</CustomButton>


                    </div>

                </div>

                <div className="bg-[#0D2235] w-scree flex__center text-[.6rem] sm:text-[.9rem] py-4">
                    <p className="text-[#ccc]"><span className="text-primary">Copyright © 2022 MidcelSoftwares.</span> All Rights Reserved</p>

                </div>
            </section>
    </>
  )
}

export default Footer
