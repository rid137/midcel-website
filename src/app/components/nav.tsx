"use client"

import Link from "next/link"
import { Links } from "./links"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import CustomButton from "@/utils/customButton"
import Logo from "./logo"
import { IoMdClose, IoMdMenu } from "react-icons/io"

interface NavbarProp {
    isNavOpen: boolean
    setIsNavOpen: (state: boolean) => void
}

const Navbar = ({isNavOpen, setIsNavOpen}: NavbarProp) => {
    const [activePage, setActivePage] = useState('')
    // const [logout, setLogout] = useState(false)

    const params = usePathname();

    // const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    const handleClick = (param: string) => {
        // setIsNavOpen(false)
        setActivePage(param)
        
    }

    const handleMobileNavItemClick = () => {
        setIsNavOpen(false)
        // setActivePage(param)
        
    }


    useEffect(() => {
        setActivePage(params.split('/')[1]  !== "" ? params.split('/')[1] : "home")
    }, [params])
    // console.log(activePage)

    const active = `text-primary `


    return (
        <div className="">
            <div className="flex items-center justify-between common__padding h-[4rem] lg:h-[5rem]">
                <Logo />

                {/* DESKTOP NAV */}
                <ul className='hidden xl:flex items-center justify-center gap-4 text-black font-[500] font-poppins '>
                    <Link href="/" className={`${activePage === "home" && active}`}>Home</Link>
                    {
                        Links?.map((itemList) => (
                                <Link 
                                    href={itemList?.href}
                                    key={itemList?.text}
                                    className={`${activePage === `${itemList.pageName}` ? `${active}` : ''} hover:text-primary transition-all p-2 z-10`}
                                    onClick={() => handleClick(`${itemList.pageName}`)}
                                >
                                    {itemList?.text}
                                </Link>
                        ))
                    }

                    {/* <CustomButton cls="bg-primary text-white btnMd">Let’s get started</CustomButton> */}
                    <Link href="/contact_us"><CustomButton cls="bg-primary text-white btnMd">Let’s get started</CustomButton></Link>

                </ul>

                <div className="xl:hidden block text-xl cursor-pointer z-10 text-primary" onClick={() => setIsNavOpen(!isNavOpen)}>
                    {isNavOpen ? <IoMdClose />  : <IoMdMenu /> }
                </div>
            </div>

            {/* MOBILE NAV */}
            <div className={`${ isNavOpen ? "w-screen h-[calc(100vh-4rem)] xl:h-[calc(100vh-5rem)] flex flex-col items-center pt-20 gap-5 " : " hidden " } `}>
                {/* <li className="rounded-md p-3 hover:bg-primary text-white">

                </li> */}

                <Link onClick={handleMobileNavItemClick} href="/" className={`${activePage === "home" && active} hover:tracking-wider transition-all p-2 z-10`}>Home</Link>
                {
                    Links?.map((itemList) => (
                            <Link
                                href={itemList?.href}
                                key={itemList?.text}
                                className={`${activePage === `${itemList.pageName}` ? `${active}` : ''} hover:tracking-wider transition-all p-2 z-10`}
                                // onClick={() => handleClick(`${itemList.pageName}`)}
                                onClick={handleMobileNavItemClick}
                            >
                                {itemList?.text}
                            </Link>
                    ))
                }

                <Link onClick={handleMobileNavItemClick} href="/contact_us"><CustomButton cls="bg-primary text-white btnMd">Let’s get started</CustomButton></Link>

            </div>
        </div>
    )
}

export default Navbar