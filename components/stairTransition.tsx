"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Stair from "./stair";
function StairTransition() {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={pathName}>
                <div className="w-screen h-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                    <Stair />
                </div>
                <motion.div
                    className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, transition: { delay: 1, ease: 'easeInOut', duration: '0.3' } }}
                />
            </div>
        </AnimatePresence>
    )
}

export default StairTransition