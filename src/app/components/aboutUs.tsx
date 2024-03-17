import CustomButton from "@/utils/customButton"
import Link from "next/link"

const AboutUs = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full common__padding my-12">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <img src="/images/aboutMid1.jpg" className="w-full h-[10rem] md:h-[17rem]" alt="" />

                    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-2">
                        <img src="images/aboutMid2.png" className="w-full md:w-1/2 h-[10rem]" alt="" />
                        <img src="images/aboutMid3.png" className="w-full md:w-1/2 h-[10rem]" alt="" />
                    </div>

                </div>

                <div className="w-full md:w-1/2">
                    <div className="flex__column">
                        <h3 className="text-primary text-[.8rem] sm:text-[normal] font-bold">WHO WE ARE</h3>
                        <h2 className=" uppercase text-[1.1rem] sm:text-[1.4rem] font-bold my-2 text-center">About Midcel softwares</h2>

                        <p className="text-justify tracking-wider leading-relaxed">
                            We are a digital transformation consultancy and software development company that provides cutting edge engineering solutions, helping Fortune 500 companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey. Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands.
                            <br /> <br /> 
                            Leverage on our 10+ years experience in technology, strategy, project creativity and our experts that are experienced in all aspect of product development to deliver any type of software ranging across all technologies for your startups, enterprise or organization. Whether you need to build a great product from scratch or just require an extra pair of hands, our rich pool of high-end developers are here to meet your request.
                        </p>

                        <Link href="/company/team" className="bg-primary text-white btnLg uppercase flex gap-3 items-center justify-center py-2 mt-6">
                            <p>Meet Our Team</p>

                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.47644 15.1038L1.46532 16L8.49562 8.25894L1.46532 0.533334L0.47644 1.4295L6.70328 8.25894L0.47644 15.1038Z" fill="white"/>
                            </svg>

                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default AboutUs