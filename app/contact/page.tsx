"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { MdEmail, MdPhone } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
const information = [
    {
        icon: <MdPhone />,
        title: 'Phone number:',
        description: '(+84)369 623 925',
    },
    {
        icon: <MdEmail />,
        title: 'Email:',
        description: 'cuong19012002@gmail.com',
    },
    {
        icon: <GiPositionMarker />,
        title: 'Address:',
        description: ' Ho Chi Minh City',
    },
]

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 0.5, ease: 'easeIn' } }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="order-2 xl:order-none xl:h-[54%] xl:w-[70%] ">
                        <form
                            action="https://getform.io/f/ayvvzdpb"
                            method="POST"
                            id="form"
                            className="flex flex-col p-10 bg-[#27272C] gap-6 rounded-xl">
                            <h3 className="text-accent text-4xl">Lets work together</h3>
                            <p className="text-white/80 ">I am a passionate software engineer from Vietnam with a strong desire to excel in the field of software development. I continuously strive to enhance my skills and broaden my knowledge to become a highly competent engineer. I am excited about the opportunity to collaborate with talented professionals and contribute to impactful projects. I look forward to working with you and achieving great things together</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstName" placeholder="First name" id="firstName"
                                    name="firstName" />
                                <Input type="lastName" placeholder="Last name" id="lastName"
                                    name="lastName" />
                                <Input type="email" placeholder="Email" id="email"
                                    name="email" />
                                <Input type="phone" placeholder="Phone" id="phone"
                                    name="phone" />
                            </div>
                            <Textarea className="h-[200px]" placeholder="Type your message here" id="message"
                                name="message" />
                            <Button size={'md'} className="max-w-40" type="submit">Send message</Button>
                        </form>
                    </div>
                    <div className="order-1 xl:order-none flex-1 flex items-center justify-center xl:justify-end mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {information.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[62px] xl:h-[62px] bg-[#27272c] flex items-center justify-center text-accent">
                                            <div className="text-xl">{item.icon}</div>
                                        </div>
                                        <div>
                                            <p>{item.title}</p>
                                            <p className="">{item.description}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact