import Image from "next/image";
import { NavigationMenuDemo } from '../components/main-nav';
import Hero from '../components/page-header'
import Skills from "@/components/skils";
import { Projects } from "@/components/project";





export default function Home() {
  return (
    <div>
    <main className="flex flex-row items-center justify-center mt-[15px] mb:flex-col">
      <div className="flex justify-center w-full max-w-screen-lg">
        <NavigationMenuDemo/>
      </div>
     
    </main>
    <div className="flex w-full mb:flex-col justify-center">
    <Hero></Hero>
    <div id="Contact"></div>
    </div>
    <div id="Skills" className="mt-40">
      <h2 className="text-center text-4xl font-bold text-[#172554] mb-20">Skills</h2>
    <Skills></Skills>
    </div>
    <h2 className="text-center text-4xl font-bold text-[#172554] mt-40 mb-20">Projects</h2>
    <div id='Projects'className=" mt-40 grid place-items-center gap-x-8 gap-y-4 grid-cols-1">
    <Projects/>
    <div className="mt-40 text-center font-bold text-[#172554]">
      <p>Designed and built by Guillaume SUCH</p>

      <p className="mt-4 mb-10 font-bold text-center text-[#172554]">©Copyright 2024 - Guillaume SUCH</p>
    </div>
  
    </div>
    
    </div>
  );
}
