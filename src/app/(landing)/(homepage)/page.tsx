"use client"

// import CustomButton from "@/utils/customButton"
import { offerData, previousWorkData } from "@/utils/dummy"
import AboutUs from "@/app/components/aboutUs"
import Statistics from "@/app/components/statistics"
import GetInTouch from "@/app/components/get_in_touch"
import Link from "next/link"
import { BASE_URL } from "@/libs"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { BlogDataTypes } from "@/types"
import Spinner from "../../../utils/spinner"

const HomePage = () => {

    const fetchBlogs = async () => {
        try {
          const response = await axios.get(
            `${BASE_URL}/blogpost`,
          );
          const clientsData = response.data;
       
          return clientsData as BlogDataTypes[];
        } catch (error) {
            console.error('Error fetching blogs:', error);
          }
      };
    
      const { isLoading, isError, data: blogData } = useQuery({
        queryKey: ['blogsData'],
        queryFn: fetchBlogs,
    })


    return(
        <>
            <div className={`flex-col w-full fle items-center h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)]`}
                style={{
                background: `
                
                    url("./images/homeHero.jpg") center center/cover no-repeat
                `,
            }}>

                <div className="p-8 md:p-16 text-center flex-co flex__column gap-4 md:gap-10 tracking-widest leading-relaxed text-white h-full">
                    <h4 className="sm:text-[2rem] md:text-[2.5rem] text-[1.5rem]">Top Software Company</h4>
                    <h2 className="font-bold text-[1.8rem] sm:text-[3rem] md:text-[3.5rem]">Innovate Solutions <br /> Tailored to Your Request</h2>
                </div>

            </div>

            <AboutUs />

            <section className="common__paddin py-[2rem] md:px-20 lg:px-32 px-[1.25rem]">
                <h3 className="text-primary tracking-wider text-center font-bold text-[1.2rem] mb-4">What We Offer</h3>

                <div className="flex flex-col md:flex-row md:gap-0 gap-4 items-center justify-center ">

                    {
                        offerData?.map((item) => (
                            <div key={item?.id} className="py-8 px-4 bg-[#D9D9D9] w-[rem] rounded-lg md:rounded-none flex__column hover:bg-primary cursor-default hover:scale-[1.05] transition-all group">
                                <div className="bg-white rounded-full w-[rem] p-6 flex__center">
                                    <img src={item?.img} className="size-16" alt="" />
                                </div>

                                <h3 className="text-[1.4rem] text-center font-bold my-6 group-hover:text-white">{item?.title}</h3>

                                <p className="leading-loose text-cente text-justify group-hover:text-[#ccc]">{item?.body}</p>

                            </div>
                        ))
                    }

                </div>
            </section>

            <section className="common__padin md:px-20 lg:px-40 px-[1.25rem] py-[2rem]">
                <h3 className="text-center text-[.9rem] md:text-normal">WE CREATE BEAUTIFUL THINGS</h3>

                <h2 className="text-primary text-center font-bold text-[1.5rem] md:text-[2rem] my-4">Our Previous Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {
                    previousWorkData?.map(({id, img}) => (
                        <div key={id} className="w-full">
                            <img src={img} className="w-full" alt="" />
                        </div>
                    ))
                }
                </div>

                {/* <div className="flex__center"><CustomButton cls="uppercase btnLg mt-8 mb-4">see all portfolio</CustomButton></div> */}
                <div className="flex__center"><p className="uppercase btnLg mt-8 mb-4 text-center flex items-center justify-center">see all portfolio</p></div>

            </section>

            <Statistics />

            <GetInTouch />
            
            {/* <div className="w-full h-[25rem] rounded-xl my-7 px-[1.25rem] md:px-44">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7911.858204434661!2d3.9110422477126914!3d7.473081694938539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed253f7bd9d7%3A0x4b62cb979ad439ab!2sojoo%20Ibadan!5e0!3m2!1sen!2sng!4v1709360994841!5m2!1sen!2sng" className="w-full h-full" style={{border:0}}  loading="lazy" ></iframe>                    
            </div> */}

            <section className="md:px-20 lg:px-32 px-[1.25rem] my-10">
                <div className="p- text-center flex-co flex__column tracking-widest leading-relaxed mb-16">
                    <h4 className="text-[.8rem] sm:text-normal">Blog</h4>
                    <h2 className="font-bold text-[1.3rem] md:text-[2.3rem] text-primary">The latest on innovation <br />& industry trends</h2>
                </div>

                {/* <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-6 ">

                    {
                        latestBlogData?.slice(0, 3)?.map((item) => (
                            <div className="bg-greyBg w-full xl:w-1/3 flex__column h-[30rem] rounded-md">
                                <div className="w-full h-1/2">
                                    <img src={item?.blogImg} className="w-full h-full rounded-t-md" alt="blog image" />

                                </div>

                                <div className="p-6 h-1/2 w-full relative">
                                    <h3 className="font-bold text-normal sm:text-[1.2rem]">{item?.title}</h3>
                                    <Link href={`/blog/${item?.id}`} className="absolute bottom-4 hover:scale-105 transition-all">Read More {">>"}</Link>

                                </div>
                            </div>
                        ))
                    }
                </div> */}

                <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-6 mt-10">

                    {
                        isLoading ? 
                        <Spinner   />
                        : 
                        isError ?
                        <p className="text-red-600">Error fetching blogs</p>
                        : 
                        blogData?.slice(3)?.map((item) => (
                            <div className="bg-greyBg w-full xl:w-1/3 flex__column h-[30rem] rounded-md">
                                <div className="w-full h-1/2">
                                    <img src="/images/latest4.jpg" className="w-full h-full rounded-t-md" alt="blog image" />

                                </div>

                                <div className="p-6 h-1/2 w-full relative">
                                    <h3 className="font-bold text-normal sm:text-[1.2rem]">{item?.title}</h3>
                                    {/* <button className="absolute bottom-4">Read More {">>"}</button> */}
                                    <Link href={`/blog/${item?._id}`} className="absolute bottom-4 hover:scale-105 transition-all">Read More {">>"}</Link>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            
        </>
    )
}

export default HomePage