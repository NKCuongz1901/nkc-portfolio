"use client"
import { FaCss3, FaHtml5, FaNodeJs, FaSass } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const about = {
    title: 'About me',
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati reprehenderit incidunt ipsa, quia illum est optio autem vel, distinctio, beatae inventore veritatis quaerat non! Quis dolore quibusdam autem. Cupiditate, illum.",
    info: [
        {
            fieldName: 'Name:',
            fieldValue: 'Khac Cuong'
        },
        {
            fieldName: 'Phone:',
            fieldValue: '(+84) 369 623 925'
        },
        {
            fieldName: 'Email:',
            fieldValue: 'cuong19012002@gmail.com'
        },
        {
            fieldName: 'Nationality:',
            fieldValue: 'VietNam'
        },
        {
            fieldName: 'Freelance:',
            fieldValue: 'Available'
        },
        {
            fieldName: 'Language:',
            fieldValue: 'English, VietNam'
        },
    ]

};

const experience = {
    icon: 'assets/resume/badge.svg',
    title: 'My experience',
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati reprehenderit incidunt ipsa, quia illum est optio autem vel, distinctio, beatae inventore veritatis quaerat non! Quis dolore quibusdam autem. Cupiditate, illum.",

};
const education = {
    icon: 'assets/resume/cap.svg',
    title: "My education",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati reprehenderit incidunt ipsa, quia illum est optio autem vel, distinctio, beatae inventore veritatis quaerat non! Quis dolore quibusdam autem. Cupiditate, illum.",
    items: [
        {
            institution: "Industrial University Of Ho Chi Minh City",
            degree: "software engineer",
            duration: '2020-2024'
        },
        {
            institution: "English Certificate",
            degree: "Toeic 835 scores",
            duration: '2024-2026'
        },
    ]
}
const skills = {
    title: 'My skill',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati reprehenderit incidunt ipsa, quia illum est optio autem vel, distinctio, beatae inventore veritatis quaerat non! Quis dolore quibusdam autem. Cupiditate, illum.',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaSass />,
            name: "Sass",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css",
        },
        {
            icon: <SiJavascript />,
            name: "Javascript",
        },
        {
            icon: <SiTypescript />,
            name: "Typescript",
        },
        {
            icon: <RiReactjsFill />,
            name: "ReactJS",
        },
        {
            icon: <RiNextjsFill />,
            name: "NextJS",
        },
        {
            icon: <FaNodeJs />,
            name: "Nodejs",
        },
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' } }}
            className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0 "
        >
            <div className="container mx-auto">
                <Tabs
                    className="flex flex-col xl:flex-row gap-[60px]"
                    defaultValue="Experience"
                >
                    <TabsList className="flex flex-col gap-6 mx-auto xl:mx-0 w-full max-w-[380px]">
                        <TabsTrigger value="Experience">Experience</TabsTrigger>
                        <TabsTrigger value="Education">Education</TabsTrigger>
                        <TabsTrigger value="Skills">Skills</TabsTrigger>
                        <TabsTrigger value="About">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="Experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{experience.description}</p>
                            </div>
                        </TabsContent>
                        <TabsContent value="Education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-6">
                                                        <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}

                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="Skills" className="w-full h-full">
                            <div className="flex flex-col gap-[20px] text-center xl:text-left mb-8">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill, index) => {
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[120px] rounded-xl bg-[#232329] flex items-center justify-center group">
                                                        <div className="hover:text-accent text-4xl transition-all duration-200">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>

                                    )
                                })}
                            </ul>
                        </TabsContent>
                        <TabsContent value="About" className="w-full text-center xl:text-left">
                            <div className="flex flex-col items-center xl:items-start gap-3">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-[50px]">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li className="flex gap-2">
                                                <span className="text-white/40">{item.fieldName}</span>
                                                <span className="text-base">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>

            </div>
        </motion.div>
    )
}

export default Resume