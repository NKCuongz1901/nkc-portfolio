"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
const projects = [
    {
        num: "01",
        category: "FullStack",
        title: "Supermarket management",
        description: "LA Supermarket Management System streamlines inventory, billing, and sales, improving efficiency and ensuring a seamless customer experience.",
        stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Javascript' }, { name: 'ReactJS' }, { name: 'Antd' }, { name: 'Nodejs' }],
        live: "https://c-mart-shop-fe.vercel.app/",
        github: "https://github.com/NKCuongz1901/CMartShopFE.git",
        img: "/assets/work/thumb1.png",
    },
    {
        num: "02",
        category: "FullStack",
        title: "ChapApp",
        description: "A real-time chat app built with React.js and Node.js. It features user authentication, one-on-one and group messaging, real-time notifications, media sharing, and secure data handling with MongoDB, ensuring scalability and smooth communication",
        stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Typescript' }, { name: 'ReactJS' }, { name: 'Shadcn' }, { name: 'Nodejs' }, { name: 'SocketIO' }],
        live: "https://github.com/NKCuongz1901/ChatAppFE.git",
        github: "https://github.com/NKCuongz1901/ChatAppFE.git",
        img: "/assets/work/thumb2.png",
    },
    {
        num: "03",
        category: "FullStack",
        title: "Book E-commerce",
        description: "A book e-commerce platform built with React.js for the frontend and Node.js . It features user authentication, book browsing, advanced search and filtering, a shopping cart, secure checkout, order management, and MongoDB for scalable data storage.",
        stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Javascript' }, { name: 'ReactJS' }, { name: 'Antd' }, { name: 'Nodejs' }],
        live: "https://github.com/NKCuongz1901/bookEcom.git",
        github: "https://github.com/NKCuongz1901/bookEcom.git",
        img: "/assets/work/thumb3.png",
    },

]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleOnChange = (swiper: any) => {
        const currentActive = swiper.activeIndex;
        setProject(projects[currentActive])
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 0.5, ease: 'easeIn' } }}
            className='min-h-[70vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className='container mx:auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px] '>
                    <div className='w-full xl:w-[60%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none  '>
                        <div className='text-8xl font-extrabold text-outline text-transparent leading-none '>{project.num}</div>
                        <h2 className='text-[42px] font-bold text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
                        <h2 className='text-[35px] font-bold text-accent group-hover:text-accent transition-all duration-500 capitalize'>{project.title}</h2>
                        <p className='text-white/80'>{project.description}</p>
                        <ul className='flex gap-4 '>
                            {project.stack.map((item, index) => {
                                return (
                                    <li key={index} className='text-xl text-accent'>{item.name} </li>
                                )
                            })}
                        </ul>
                        <div className='border border-b-white/5'></div>
                        <div className='flex gap-5 items-center mt-3'>
                            <Link href={project.live} target='_blank'>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group' >
                                            <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            <Link href={project.github} target='_blank'>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group' >
                                            <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github Repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full xl:w-[40%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleOnChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className='w-full'>
                                        <div className='h-[460px] bg-pink-50 relative group flex justify-center items-center '>
                                            <div className='relative h-full w-full'>
                                                <Image src={project.img} alt='@' fill className='object-contain' />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work