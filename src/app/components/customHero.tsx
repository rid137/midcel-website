import React from 'react'

interface CustomHeroProp {
    title: string
    subTitle?: string
}

const CustomHero = ({title, subTitle}: CustomHeroProp) => {
  return (
    <div>
        <div className="flex-col w-full fle items-center h-[15rem] sm:h-[25rem]"
            style={{
            background: `
            
                url("./images/customHero.jpg") center center/cover no-repeat
            `,
            }}>

                <div className="p-16 text-cente flex-co flex__column tracking-widest leading-relaxed text-white h-full">
                    <h4 className="font-bold text-center text-[1.6rem] md:text-[2.5rem]">{title}</h4>
                    <h2 className="text-[.8rem] text-center md:text-[1rem]">Home - {title} {subTitle && "- " + subTitle}</h2>
                </div>

            </div>
    </div>
  )
}

export default CustomHero
