import AboutUs from "@/app/components/aboutUs"
import CustomHero from "@/app/components/customHero"
import Statistics from "@/app/components/statistics"
import TalkToUs from "@/app/components/talk_to_us"
import Testimonial from "@/app/components/testimonial"
import CustomButton from "@/utils/customButton"
import { TeamData } from "@/utils/dummy"
import Link from "next/link"

const Company = () => {
    return (
        <section className="">
            <CustomHero title="Company" />
            <AboutUs />


            <div className="common__padding">
                <div className="flex__column my-10 gap-4">
                    <div className="">
                        <h3 className="text-primary text-[1.4rem] font-bold mb-4 text-center">Our Mission</h3>
                        <p className="text-justify md:text-center leading-loose tracking-wider">
                            Our mission is to provide our clients with high-quality, 
                            cutting-edge software development services that help them to stay ahead of the 
                            competition. We strive to deliver customized solutions that are tailored to meet 
                            the unique needs of each client, while ensuring that they are secure, reliable, and 
                            easy to use. We are committed to fostering a culture of excellence and continuous 
                            improvement, in order to stay at the forefront of the software development industry.
                        </p>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-primary text-[1.4rem] font-bold mb-4 text-center">Our Vision</h3>
                        <p className="text-justify md:text-center leading-loose tracking-wider">
                            Our mission is to provide our clients with high-quality, cutting-edge software 
                            development services that help them to stay ahead of the competition. We strive to 
                            deliver customized solutions that are tailored to meet the unique needs of each 
                            client, while ensuring that they are secure, reliable, and easy to use. We are 
                            committed to fostering a culture of excellence and continuous improvement, in order 
                            to stay at the forefront of the software development industry.
                        </p>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-primary text-[1.4rem] font-bold mb-4 text-center">Our Goal</h3>
                        <p className="text-justify md:text-center leading-loose tracking-wider">
                            Our mission is to provide our clients with high-quality, cutting-edge software 
                            development services that help them to stay ahead of the competition. We strive 
                            to deliver customized solutions that are tailored to meet the unique needs of each 
                            client, while ensuring that they are secure, reliable, and easy to use. We are 
                            committed to fostering a culture of excellence and continuous improvement, in order 
                            to stay at the forefront of the software development industry.
                        </p>
                    </div>

                </div>
            </div>

            <Statistics />

            <div className="p- text-center flex-co flex__column tracking-widest leading-relaxed my-8">
                <h4 className="text-primary text-[.8rem] sm:text-normal">Our Expert</h4>
                <h2 className="font-bold text-[1rem] sm:text-[1.5rem] md:text-[2.3rem]">Meet with our expert</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8 md:px-20 lg:px-32 px-[1.25rem]">
                {
                    TeamData?.slice(0, 3)?.map((item) => (
                        <div key={item?.id} className="h-[rem] bg-greyBg p-2 flex__colum gap-2 rounded-lg">
                            <img src={item?.img} alt="" className="w-full h-[14rem] sm:h-[17rem] rounded-lg " />
                            <div className="px-4 sm:px-8 py-4 text-center">
                                <p className="font-bold text-[1rem] sm:text-[1.4rem]">{item?.name}</p>
                                <p className="text-whit opacity-85 mb-6 sm:text-normal text-[.8rem]">{item?.role}</p>

                                <div className="flex__center gap-4">

                                

                                    <div className="bg-black rounded-full p-2 cursor-pointer">
                                        <svg width="18" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.36118 10.4873H6.87094V17.9248H3.55063V10.4873H0.827972V7.43262H3.55063V5.0752C3.55063 2.41895 5.14438 0.924805 7.56821 0.924805C8.73032 0.924805 9.95883 1.15723 9.95883 1.15723V3.78027H8.5975C7.26938 3.78027 6.87094 4.57715 6.87094 5.44043V7.43262H9.82602L9.36118 10.4873Z" fill="white"/>
                                        </svg>
                                    </div>

                                    <div className="bg-black rounded-full p-2 cursor-pointer">
                                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5502 3.97168C15.5502 4.1377 15.5502 4.27051 15.5502 4.43652C15.5502 9.05176 12.0639 14.3311 5.6557 14.3311C3.66351 14.3311 1.83734 13.7666 0.309998 12.7705C0.575623 12.8037 0.841248 12.8369 1.14008 12.8369C2.76703 12.8369 4.26117 12.2725 5.45648 11.3428C3.92914 11.3096 2.63422 10.3135 2.20258 8.91895C2.435 8.95215 2.63422 8.98535 2.86664 8.98535C3.16547 8.98535 3.4975 8.91895 3.76312 8.85254C2.16937 8.52051 0.97406 7.12598 0.97406 5.43262V5.39941C1.4389 5.66504 2.00336 5.79785 2.56781 5.83105C1.60492 5.2002 1.00726 4.1377 1.00726 2.94238C1.00726 2.27832 1.17328 1.68066 1.47211 1.18262C3.19867 3.27441 5.78851 4.66895 8.67719 4.83496C8.61078 4.56934 8.57758 4.30371 8.57758 4.03809C8.57758 2.1123 10.1381 0.551758 12.0639 0.551758C13.06 0.551758 13.9565 0.950195 14.6205 1.64746C15.3842 1.48145 16.1479 1.18262 16.812 0.78418C16.5463 1.61426 16.0151 2.27832 15.2846 2.70996C15.9819 2.64355 16.6791 2.44434 17.2768 2.17871C16.812 2.87598 16.2143 3.47363 15.5502 3.97168Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="bg-black rounded-full p-2 cursor-pointer">
                                        <svg width="15" height="15" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.845 0.987305C14.4094 0.987305 14.9075 1.48535 14.9075 2.08301V14.7998C14.9075 15.3975 14.4094 15.8623 13.845 15.8623H1.06177C0.497314 15.8623 0.0324707 15.3975 0.0324707 14.7998V2.08301C0.0324707 1.48535 0.497314 0.987305 1.06177 0.987305H13.845ZM4.51489 13.7373V6.66504H2.32349V13.7373H4.51489ZM3.41919 5.66895C4.11646 5.66895 4.68091 5.10449 4.68091 4.40723C4.68091 3.70996 4.11646 3.1123 3.41919 3.1123C2.68872 3.1123 2.12427 3.70996 2.12427 4.40723C2.12427 5.10449 2.68872 5.66895 3.41919 5.66895ZM12.7825 13.7373V9.85254C12.7825 7.95996 12.3508 6.46582 10.1262 6.46582C9.06372 6.46582 8.33325 7.06348 8.03442 7.62793H8.00122V6.66504H5.90942V13.7373H8.10083V10.251C8.10083 9.32129 8.26685 8.4248 9.42896 8.4248C10.5579 8.4248 10.5579 9.4873 10.5579 10.2842V13.7373H12.7825Z" fill="white"/>
                                        </svg>

                                    </div>

                                </div>
                            </div>


                        </div>
                    ))
                }        
            </div>

            <div className="flex__center">
                <CustomButton cls="bg-primary text-white btnSm uppercase flex gap-3 items-center justify-center py-2 mt-">
                    <p><Link href="/company/team">Meet Our Team</Link> </p>

                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.47644 15.1038L1.46532 16L8.49562 8.25894L1.46532 0.533334L0.47644 1.4295L6.70328 8.25894L0.47644 15.1038Z" fill="white"/>
                    </svg>

                </CustomButton>
            </div>

            <Testimonial />
            <TalkToUs />

            

        </section>
    )
}

export default Company