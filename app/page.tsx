import Photo from "@/components/photo";
import Socials from "@/components/socials";
import { Button } from "@/components/ui/button";
import { IoMdDownload } from "react-icons/io";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none  ">
            <span className="text-2xl">Web Developer</span>
            <h1 className="h1 mb-6">Hello,Im <br /> <span className="text-accent">Khac Cuong</span></h1>
            <p className="max-w-[500px] pb-10 text-white/80">As a passionate and detail-oriented Web Developer, I aim to craft user-friendly, visually appealing, and responsive web interfaces that enhance user experiences.</p>
            <div className="flex flex-col xl:flex-row gap-8 items-center  ">
              <Button variant={'outline'} size={"lg"} className="uppercase flex items-center gap-2">
                <a href="/assets/nkCuong.pdf" download="KhacCuong_CV.pdf">DOWNLOAD CV</a>
                <IoMdDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles={"flex  gap-6"} iconStyles={"w-10 h-10 border border-accent rounded-full flex justify-center items-center hover:bg-accent hover:text-primary hover:transition-all duration-500 text-accent"} />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-0 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}
