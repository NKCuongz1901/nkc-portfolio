"use client"
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "As a passionate and detail-oriented Frontend Developer, I aim to craft user-friendly, visually appealing, and responsive web interfaces that enhance user experiences.",
        href: "#",
    },
    {
        num: "02",
        title: "Web Designer",
        description: "As a passionate and detail-oriented Frontend Developer, I aim to craft user-friendly, visually appealing, and responsive web interfaces that enhance user experiences.",
        href: "#",
    }
];



const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' } }}
                    className="grid grid-cols-1 xl:grid-cols-2 gap-[80px] "
                >
                    {services.map((item, index) => {
                        return (
                            <div key={index} className="flex-1 flex-col justify-center gap-6 group">
                                {/* Top */}
                                <div className="flex items-start justify-between w-full">
                                    <div className="text-5xl font-semibold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                                    <Link href={item.href} className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center text-accent text-4xl hover:bg-accent hover:text-primary hover:-rotate-45 transition-all duration-500">
                                        <BsArrowDownRight />
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500">{item.title}</h2>
                                <p className="text-white/80">{item.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services