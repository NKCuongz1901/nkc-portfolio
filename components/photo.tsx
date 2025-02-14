// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"


// function Photo() {
//     return (
//         <div className='w-full h-full relative'>
//             <motion.div
//                 className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                     opacity: 1,
//                     transition: { delay: 1, duration: 0.4, ease: 'easeInOut' }
//                 }}
//             >
//                 <Image src={'/assets/giphy.gif'} alt="" priority quality={100} fill className="object-contain" />
//             </motion.div>
//             <motion.svg
//                 className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
//                 fill="transparent"
//                 viewBox="0 0 506 506"
//                 xmlns="https://www.w3.org/2000/svg"
//             >
//                 <motion.circle
//                     cx="253"
//                     cy="253"
//                     r="250"
//                     stroke="#00ff99"
//                     strokeWidth="4"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     initial={{ strokeDasharray: "24 10 0 0" }}
//                     animate={{
//                         strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
//                         rotate: [120, 360]

//                     }}
//                     transition={{
//                         duration: 20,
//                         repeat: Infinity,
//                         repeatType: "reverse"

//                     }}
//                 />
//             </motion.svg>
//         </div>
//     )
// }

// export default Photo
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Photo() {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            {/* Image Container */}
            <motion.div
                className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }}
            >
                <Image src={"/assets/giphy.gif"} alt="Profile Animation" priority quality={100} fill className="object-contain" />
            </motion.div>

            {/* Circle Animation */}
            <motion.div
                className="absolute"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent" viewBox="0 0 506 506" xmlns="https://www.w3.org/2000/svg">
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "0 500" }}
                        animate={{ strokeDasharray: ["10 40", "50 100", "20 200", "0 500"] }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                </svg>
            </motion.div>
        </div>
    );
}

export default Photo;
