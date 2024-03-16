import CustomHero from "@/app/components/customHero"
import CustomButton from "@/utils/customButton"


const ContactUs = () => {
    return(
        <section className="">
            <CustomHero title="Contact Us" />

            {/* <div className="md:px-20 lg:px-24 px-[1.25rem] py-10 flex-col lg:flex-row flex items-center justify-center gap-10">
                <div className="w-full lg:w-2/5 h-[rem]">
                    <h3 className="text-[1.4rem] font-bold">Contact Us</h3>
                    <p className="text-primary my-3">Tell Us About Your Project</p>

                    <div className="flex items-center gap-4">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6445 10.5309C12.4776 10.364 12.2977 10.2362 12.1047 10.1475C11.9117 10.0589 11.7109 10.0145 11.5023 10.0145C11.2937 10.0145 11.0929 10.0589 10.8999 10.1475C10.7069 10.2362 10.5217 10.364 10.3444 10.5309L9.2804 11.5949C9.23868 11.574 9.19434 11.5532 9.1474 11.5323C9.10046 11.5115 9.05612 11.4854 9.0144 11.4541C8.96224 11.4332 8.90748 11.4071 8.8501 11.3758C8.79273 11.3446 8.73797 11.3133 8.68581 11.282C8.1851 10.969 7.70525 10.6013 7.24627 10.1788C6.78728 9.75636 6.33873 9.27912 5.90061 8.74712C5.69198 8.4759 5.51464 8.22554 5.3686 7.99605C5.22256 7.76656 5.09739 7.53707 4.99307 7.30758C5.12868 7.1824 5.26168 7.05461 5.39208 6.92422C5.52247 6.79383 5.65025 6.66604 5.77543 6.54086C5.81716 6.48871 5.8641 6.43916 5.91626 6.39222C5.96841 6.34527 6.01535 6.29573 6.05708 6.24357C6.41175 5.8889 6.58908 5.50033 6.58908 5.07785C6.58908 4.65538 6.41175 4.26681 6.05708 3.91214L5.1339 2.98895C5.08174 2.9368 5.02958 2.88203 4.97742 2.82466C4.92527 2.76728 4.87311 2.71252 4.82095 2.66036C4.71664 2.55605 4.61232 2.45173 4.50801 2.34742C4.40369 2.2431 4.29938 2.13879 4.19507 2.03447C4.02816 1.86757 3.84822 1.74239 3.65524 1.65894C3.46226 1.57549 3.26145 1.53376 3.05282 1.53376C2.84419 1.53376 2.64339 1.57549 2.4504 1.65894C2.25742 1.74239 2.07748 1.86757 1.91058 2.03447C1.91058 2.03447 1.90536 2.03447 1.89493 2.03447L0.752684 3.20801C0.533623 3.41664 0.364112 3.65396 0.24415 3.91996C0.124188 4.18596 0.0485602 4.47022 0.0172659 4.77273C-0.02446 5.26301 0.00944227 5.72721 0.118973 6.16533C0.228503 6.60345 0.340641 6.97377 0.455387 7.27628C0.726605 8.01692 1.07345 8.73929 1.49593 9.44342C1.9184 10.1475 2.43215 10.8647 3.03717 11.5949C3.41271 12.0435 3.80389 12.4607 4.21071 12.8467C4.61754 13.2431 5.04262 13.616 5.48596 13.9655C5.9293 14.3149 6.38567 14.6357 6.85509 14.9278C7.33493 15.2303 7.83043 15.5015 8.34157 15.7414C8.72753 15.9292 9.17348 16.1143 9.6794 16.2969C10.1853 16.4794 10.7304 16.5916 11.3145 16.6333C11.3458 16.6333 11.3797 16.6333 11.4162 16.6333C11.4528 16.6333 11.4919 16.6333 11.5336 16.6333C11.9196 16.6333 12.2768 16.5629 12.6054 16.4221C12.934 16.2812 13.2235 16.07 13.4738 15.7884C13.4843 15.7884 13.4895 15.7884 13.4895 15.7884C13.4895 15.7884 13.4895 15.7831 13.4895 15.7727C13.5834 15.6684 13.6799 15.5667 13.779 15.4676C13.8781 15.3685 13.9798 15.2668 14.0841 15.1625C14.1571 15.0999 14.2301 15.0321 14.3031 14.9591C14.3762 14.886 14.4492 14.8078 14.5222 14.7243C14.6891 14.5574 14.8169 14.3749 14.9056 14.1767C14.9942 13.9785 15.0386 13.7751 15.0386 13.5665C15.0386 13.3578 14.9942 13.1544 14.9056 12.9562C14.8169 12.758 14.6839 12.5702 14.5066 12.3929L12.6445 10.5309ZM13.865 14.0985C13.792 14.1715 13.7216 14.2393 13.6538 14.3019C13.586 14.3645 13.5156 14.4323 13.4426 14.5053C13.3382 14.6096 13.2287 14.7191 13.114 14.8339C12.9992 14.9486 12.8897 15.0634 12.7854 15.1781C12.6185 15.3659 12.4307 15.5041 12.2221 15.5928C12.0134 15.6814 11.7787 15.7258 11.5179 15.7258C11.4971 15.7258 11.4736 15.7258 11.4475 15.7258C11.4215 15.7258 11.3928 15.7258 11.3615 15.7258C10.8608 15.684 10.3835 15.5823 9.92976 15.4206C9.47599 15.259 9.07699 15.0947 8.73275 14.9278C8.2529 14.6983 7.7887 14.4427 7.34015 14.161C6.8916 13.8794 6.45869 13.5769 6.04143 13.2535C5.62418 12.9301 5.22256 12.5807 4.8366 12.2051C4.45064 11.8296 4.08553 11.4332 3.7413 11.016C3.16757 10.3171 2.6825 9.63901 2.28611 8.98183C1.88971 8.32464 1.56112 7.65182 1.30034 6.96334C1.14386 6.54608 1.03694 6.16533 0.979568 5.82109C0.922195 5.47686 0.90394 5.15348 0.924803 4.85097C0.945666 4.65277 0.992607 4.47022 1.06563 4.30332C1.13865 4.13641 1.24818 3.98516 1.39422 3.84955L2.53646 2.69166C2.61991 2.6082 2.70597 2.54822 2.79464 2.51171C2.88331 2.4752 2.96937 2.45695 3.05282 2.45695C3.15714 2.45695 3.25363 2.48303 3.34229 2.53518C3.43096 2.58734 3.50137 2.6395 3.55353 2.69166C3.65785 2.79597 3.75955 2.89768 3.85865 2.99678C3.95775 3.09588 4.05946 3.19758 4.16377 3.3019C4.21593 3.35405 4.27069 3.40882 4.32807 3.46619C4.38544 3.52357 4.4402 3.57833 4.49236 3.63049L5.41555 4.55367C5.59288 4.73101 5.68155 4.90573 5.68155 5.07785C5.68155 5.24997 5.59288 5.4247 5.41555 5.60203C5.36339 5.65419 5.31384 5.70374 5.2669 5.75068C5.21996 5.79762 5.17041 5.84717 5.11825 5.89933C4.98264 6.04537 4.84442 6.1862 4.7036 6.3218C4.56277 6.45741 4.41934 6.58781 4.2733 6.71298C4.2733 6.72342 4.27069 6.72863 4.26548 6.72863C4.26026 6.72863 4.25765 6.72863 4.25765 6.72863C4.11161 6.87467 4.03859 7.0155 4.03859 7.1511C4.03859 7.28671 4.05424 7.40146 4.08553 7.49534C4.08553 7.50577 4.08553 7.5136 4.08553 7.51881C4.08553 7.52403 4.09075 7.52664 4.10118 7.52664C4.21593 7.81872 4.36197 8.10819 4.5393 8.39506C4.71664 8.68192 4.93048 8.98704 5.18084 9.31042H5.19649C5.65547 9.88415 6.13532 10.3979 6.63603 10.8517C7.13674 11.3054 7.65831 11.7044 8.20075 12.0487C8.26333 12.0904 8.33114 12.1295 8.40416 12.166C8.47718 12.2025 8.54498 12.2364 8.60757 12.2677C8.67016 12.299 8.73014 12.3303 8.78751 12.3616C8.84489 12.3929 8.89965 12.4242 8.95181 12.4555C8.95181 12.4555 8.95703 12.4581 8.96746 12.4633C8.97789 12.4685 8.9831 12.4711 8.9831 12.4711C9.04569 12.5024 9.10307 12.5259 9.15522 12.5416C9.20738 12.5572 9.26475 12.565 9.32734 12.565C9.46295 12.565 9.57509 12.5337 9.66376 12.4711C9.75242 12.4086 9.80719 12.3616 9.82805 12.3303L10.9859 11.1724C11.0485 11.1098 11.1242 11.0525 11.2128 11.0003C11.3015 10.9482 11.398 10.9221 11.5023 10.9221C11.6066 10.9221 11.7005 10.9482 11.784 11.0003C11.8674 11.0525 11.9352 11.1046 11.9874 11.1568C11.9874 11.1672 11.9874 11.1724 11.9874 11.1724C11.9874 11.1724 11.9926 11.1724 12.003 11.1724L13.865 13.0344C14.0319 13.2118 14.1154 13.3891 14.1154 13.5665C14.1154 13.7438 14.0319 13.9211 13.865 14.0985ZM8.63887 4.41285C9.08742 4.4963 9.50989 4.63973 9.90629 4.84314C10.3027 5.04656 10.6626 5.30995 10.9859 5.63333C11.2989 5.9567 11.5597 6.31659 11.7683 6.71298C11.9769 7.10938 12.1178 7.52664 12.1908 7.96476C12.2116 8.0795 12.2638 8.17078 12.3472 8.23858C12.4307 8.30639 12.5298 8.34029 12.6445 8.34029C12.655 8.34029 12.6654 8.34029 12.6758 8.34029C12.6863 8.34029 12.7019 8.34029 12.7228 8.34029C12.848 8.31943 12.9471 8.25684 13.0201 8.15252C13.0931 8.04821 13.1192 7.93346 13.0983 7.80829C13.0044 7.27628 12.8323 6.77036 12.582 6.29051C12.3316 5.81066 12.0134 5.37776 11.6275 4.99179C11.2415 4.60583 10.8086 4.28767 10.3288 4.03731C9.84892 3.78696 9.34299 3.61484 8.81099 3.52096C8.68581 3.50009 8.57106 3.52617 8.46675 3.59919C8.36243 3.67221 8.29984 3.77131 8.27898 3.89649C8.25812 4.01124 8.28159 4.12077 8.34939 4.22508C8.4172 4.3294 8.51369 4.39198 8.63887 4.41285ZM15.993 7.68311C15.92 7.23456 15.8105 6.80165 15.6645 6.38439C15.5288 5.96713 15.3593 5.56292 15.1559 5.17174C14.9525 4.78056 14.7204 4.40242 14.4596 4.03731C14.1884 3.68264 13.8963 3.34362 13.5834 3.02025C13.26 2.7073 12.921 2.42044 12.5663 2.15965C12.2012 1.88843 11.8231 1.65373 11.4319 1.45553C11.0407 1.25733 10.6365 1.08521 10.2192 0.939172C9.80197 0.803562 9.37428 0.694032 8.93616 0.61058C8.81099 0.589718 8.69624 0.615797 8.59192 0.688816C8.48761 0.761837 8.42502 0.860935 8.40416 0.986113C8.3833 1.11129 8.40937 1.22604 8.48239 1.33035C8.55542 1.43467 8.65451 1.49725 8.77969 1.51812C9.57248 1.65373 10.3209 1.90408 11.0251 2.26918C11.7292 2.63428 12.3681 3.1037 12.9418 3.67743C13.5156 4.24073 13.985 4.87705 14.3501 5.58639C14.7152 6.29572 14.9603 7.04157 15.0855 7.82393C15.1064 7.93868 15.1611 8.02995 15.2498 8.09776C15.3385 8.16556 15.435 8.19947 15.5393 8.19947C15.5601 8.19947 15.5758 8.19947 15.5862 8.19947C15.5966 8.19947 15.6071 8.19947 15.6175 8.19947C15.7427 8.1786 15.8418 8.11601 15.9148 8.0117C15.9878 7.90739 16.0139 7.79786 15.993 7.68311Z" fill="black"/>
                        </svg>
                        <p>+234 8140 199 493</p>

                    </div>
                    <div className="flex items-center gap-4">
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7338 0.886948H1.26619C0.915382 0.886948 0.61665 1.01028 0.36999 1.25694C0.12333 1.5036 0 1.80233 0 2.15313V9.73381C0 10.0846 0.12333 10.3834 0.36999 10.63C0.61665 10.8767 0.915382 11 1.26619 11H14.7338C15.0846 11 15.3834 10.8767 15.63 10.63C15.8767 10.3834 16 10.0846 16 9.73381V2.15313C16 1.80233 15.8767 1.5036 15.63 1.25694C15.3834 1.01028 15.0846 0.886948 14.7338 0.886948ZM14.7338 1.74203C14.7448 1.74203 14.7557 1.74203 14.7667 1.74203C14.7777 1.74203 14.7886 1.74203 14.7996 1.74203L8.46865 5.96814C8.34806 6.05584 8.19185 6.09969 8 6.09969C7.80815 6.09969 7.65194 6.05584 7.53135 5.96814L1.18397 1.74203C1.19493 1.74203 1.20863 1.74203 1.22508 1.74203C1.24152 1.74203 1.25522 1.74203 1.26619 1.74203H14.7338ZM14.7338 10.1614H1.26619C1.1456 10.1614 1.04419 10.1202 0.961973 10.038C0.879753 9.95581 0.838643 9.8544 0.838643 9.73381V2.5149L7.07091 6.67523C7.20247 6.76293 7.34772 6.82871 7.50668 6.87256C7.66564 6.91641 7.82734 6.93833 7.99178 6.93833C8.16718 6.93833 8.33436 6.91641 8.49332 6.87256C8.65228 6.82871 8.79753 6.76293 8.92909 6.67523L15.1614 2.5149V9.73381C15.1614 9.8544 15.1202 9.95581 15.038 10.038C14.9558 10.1202 14.8544 10.1614 14.7338 10.1614Z" fill="black"/>
                        </svg>

                        <p>info@midcelsoftwares.com</p>

                    </div>

                    <h4 className="font-bold mt-4 mb-3">Address</h4>
                    <p>Stock building, 125 Main Street 1st Lane, Ibadan, Nigeria</p>

                    <div className="w-full h-[30rem] rounded-xl my-7">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7911.858204434661!2d3.9110422477126914!3d7.473081694938539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed253f7bd9d7%3A0x4b62cb979ad439ab!2sojoo%20Ibadan!5e0!3m2!1sen!2sng!4v1709360994841!5m2!1sen!2sng" className="w-full h-full" style={{border:0}}  loading="lazy" ></iframe>                    
                    </div>
                    
                </div>

                <div className="w-full lg:w-3/5 bg-greyBg p-2 md:p-4 rounded-lg h-[rem]">
                    <form action="" className="flex flex-col">
                        <label htmlFor="">Full Name*</label>
                        <input type="text" className="bg-white focus:outline-primary px-2 py-3 mb-4 rounded-md" />

                        <label htmlFor="">Email*</label>
                        <input type="email" className="bg-white focus:outline-primary px-2 py-3 mb-4 rounded-md" />

                        <label htmlFor="">Phone Number*</label>
                        <input type="text" className="bg-white focus:outline-primary px-2 py-3 mb-4 rounded-md" />

                        <div className="text-[.8rem]">
                            <p>I want to:*</p>

                            <div className="flex items-center gap-6 mb-2">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    <p>Scale my development team</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    <p>Build a digital product from scratch</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    <p>Redesign an app or improve UX</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    <p>Something else</p>
                                </div>
                            </div>
                        </div>

                        <p className="mt-4">Your message (optional)</p>
                        <textarea name="" id="" cols={30} rows={8} className="rounded-md w-full px-2 py-3 bg-white resize-none outline-primary"></textarea>

                        <p className="my-5 md:text-normal text-[.8rem]">By submitting this message you consent to receiving emails from MidCel Softwares</p>

                        <div className="w-[10rem]">
                        <CustomButton cls="btnSm ">Submit</CustomButton>

                        </div>
                    </form>

                </div>
            </div> */}

            <section className="md:px-20 lg:px-32 px-[1.25rem] my-16 font-poppins">
                <div className="p- text-center flex-co flex__column tracking-widest leading-relaxed mb-8">
                    <h4 className="text-primary">Contact US</h4>
                    <h2 className="font-bold text-[1.3rem] md:text-[2.3rem]">Get in touch <br /> We’ll help your <span className="text-primary">IT solution</span></h2>
                </div>

                <p className="md:px-16 px- text-center mb-6">Ready to take your software development to the next level? We're here to help! Whether you have questions or are ready to kickstart your next project, don't hesitate to reach out. Contact us today to discover how our innovative solutions can transform your business. Reach us directly using the information provided below. We can't wait to collaborate with you and bring your vision to life!</p>
                <div className="text-center mb-6">
                <p>Email Address: support@agencyname.com</p>
                <p>Phone Number: +1 (555) 123-4567</p>
                <p>Office Address: 123 Main Street, Suite 101, City, State, ZIP Code</p>
                <p>Business Hours: Monday-Sunday, 9:00 AM -5:00 PM </p>

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
                <p className="text-center mt-4 text-[.8rem] sm:text-normal">By submitting this message you consent to receiving emails from MidCel Software's</p>
            </section>
        </section>
    )
}

export default ContactUs

// Ready to take your software development to the next level? We're here to help! Whether you have questions or are ready to kickstart your next project, don't hesitate to reach out. Contact us today to discover how our innovative solutions can transform your business. Reach us directly using the information provided below. We can't wait to collaborate with you and bring your vision to life!