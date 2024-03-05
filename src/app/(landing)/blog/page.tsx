"use client"
import CustomHero from "@/app/components/customHero"
import { latestBlogData } from "@/utils/dummy"
import Link from "next/link"
import { useRouter } from "next/navigation"



const Blog = () => {
    const router = useRouter()
    return(
        <section>
            <CustomHero title="Blog" />

            <div className="common__padding">
                <div className="flex items-center justify-center w-full flex-col lg:flex-row py-16 gap-10">
                    <div className="w-full lg:w-1/2 h-[20rem] sm:h-[23rem]">
                        <img className="h-full w-full" src="/images/blog.jpg" alt="blog image" />
                    </div>

                    <div className="w-full lg:w-1/2 h-[rem]">
                        <p>11:49am . July 2, 2021</p>
                        <p className="text-primary text-[1.2rem] my-4">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor</p>
                        <p className="text-justify leading-loose tracking-wider">
                            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. 
                            Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur 
                            duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat 
                            incididunt sint deserunt ut voluptate aute id deserunt nisi.
                        </p>

                        <div className="flex items-center gap-4 mt-4 ">
                            <img className="size-16" src="/images/ceo.png" alt="ceo image" />
                            <div className="">
                                <p className="font-bold">Oluwaferanmi Akinola</p>
                                <p className='text-sm t opacity-'>CEO, Sale’s Noisemaker</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex__between">
                    <p className="text-primary font-bold text-normal sm:text-[1.3rem]">All blog posts</p>
                    
                    <div className="flex__center border border-greyBg px-1 py-1 sm:px-3 sm:py-2 rounded-xl">
                        <input className="bg-transparent text-[.7rem] sm:text-normal w-24 sm:w-full" placeholder="search" type="text" />
                        <svg className="sm:w-6 sm:h-6 w-3 h-3" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.0358 26.6218L20.4838 19.0698C22.2986 16.8911 23.2035 14.0966 23.0104 11.2677C22.8173 8.43873 21.541 5.79315 19.447 3.88128C17.353 1.9694 14.6025 0.938435 11.7677 1.00285C8.93293 1.06726 6.23211 2.22209 4.2271 4.2271C2.22209 6.23211 1.06726 8.93293 1.00285 11.7677C0.938435 14.6025 1.9694 17.353 3.88128 19.447C5.79315 21.541 8.43873 22.8173 11.2677 23.0104C14.0966 23.2035 16.8911 22.2986 19.0698 20.4838L26.6218 28.0358L28.0358 26.6218ZM3.03576 12.0358C3.03576 10.2557 3.5636 8.51567 4.55253 7.03563C5.54147 5.55559 6.94707 4.40203 8.59161 3.72084C10.2361 3.03966 12.0457 2.86143 13.7916 3.20869C15.5374 3.55596 17.141 4.41313 18.3997 5.6718C19.6584 6.93047 20.5156 8.53412 20.8628 10.2799C21.2101 12.0258 21.0319 13.8354 20.3507 15.4799C19.6695 17.1244 18.5159 18.5301 17.0359 19.519C15.5559 20.5079 13.8158 21.0358 12.0358 21.0358C9.64962 21.0331 7.36198 20.0841 5.67472 18.3968C3.98747 16.7095 3.03841 14.4219 3.03576 12.0358Z" fill="#979797" stroke="#979797"/>
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-8">
                    {
                        latestBlogData?.map((item) => (
                            <div key={item?.id} className="bg-greyBg w- flex__column h-[26rem] rounded-md">
                                <div className="w-full h-1/2">
                                    <img src={item?.blogImg} className="w-full h-full rounded-t-md" alt="blog image" />

                                </div>

                                <div className="p-6 h-1/2 w-full relative">
                                    <h3 className="font-bold text-normal sm:text-[1.2rem]">{item?.title}</h3>
                                    <Link href={`/blog/${item?.id}`} className="absolute bottom-4 hover:scale-105 transition-all">Read More {">>"}</Link>
                                    {/* <button onClick={() => { router.push(`/blog/${item?.id}`) }}>Read</button> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </section>
    )
}

export default Blog