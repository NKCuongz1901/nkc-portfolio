"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname();
    return (
        <AnimatePresence>
            <div key={pathName}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 0.4, duration: 0.4, ease: 'easeInOut' }
                    }}
                    className="w-screen h-screen fixed bg-primary top-0 pointer-events-none "
                />
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition