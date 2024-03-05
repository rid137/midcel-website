import { useState } from 'react';
// import { motion } from 'framer-motion';
import { faq } from "../../utils/dummy";
// import { AiOutlinePlus } from 'react-icons/ai';
// import { AiOutlineMinus } from 'react-icons/ai';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleOpenClick = (index: any ) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="cente  py- md:px-20 lg:px-24 px-[1.25rem] mb-10">
            <div className=" gap-10 flex flex-col">
                <div className="center flex-col gap-4"
                >                 
                    {faq.map((item, index) => (
                        <div key={index} className='border-b border-gray-300 p-4 md:p-8 w-full transition-all '>
                            <div className='flex justify-between items-center gap-3 cursor-pointer transition-all'>
                                <div className="w-full font-bold text-[.8rem] sm:text-[.9rem] tracking-wide " onClick={() => handleOpenClick(index)}>
                                    {item.question}
                                </div>

                                <svg className={`${openIndex === index ?  "rotate-180" : " "} transition-all`} width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                    <mask id="path-1-inside-1_722_1497" fill="white">
                                    <path d="M6.5 0.72998L12.864 7.09395L6.5 13.4579L0.136034 7.09395L6.5 0.72998Z"/>
                                    </mask>
                                    <path d="M6.5 13.4579L5.79289 14.165L6.5 14.8721L7.20711 14.165L6.5 13.4579ZM12.1569 6.38684L5.79289 12.7508L7.20711 14.165L13.5711 7.80105L12.1569 6.38684ZM7.20711 12.7508L0.843141 6.38684L-0.571072 7.80105L5.79289 14.165L7.20711 12.7508Z" fill="black" mask="url(#path-1-inside-1_722_1497)"/>
                                    </g>
                                </svg>

                                {/* <div>
                                
                                    { openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                </div> */}
                            </div>
                            {openIndex === index && <div className='text-grey mt-6 text-[.9rem] tracking-wide text-justify'>{item.answer}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;
