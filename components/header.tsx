import Link from "next/link"
import Nav from "./nav"
import { Button } from "./ui/button"
import MobileNav from "./mobileNav"


const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white ">
            <div className="container mx-auto flex items-center justify-between">
                <Link href={'/'}>
                    <h1 className="text-4xl font-semibold">NKCuong <span className="text-accent">.</span></h1>
                </Link>
                {/* desktop-nav */}
                <div className=" hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href={'/contact'}>
                        <Button>Contact me</Button>
                    </Link>
                </div>
                {/* Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>

        </header>
    )
}

export default Header