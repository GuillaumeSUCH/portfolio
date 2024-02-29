import Image from "next/image";
import { NavigationMenuDemo } from '../components/main-nav';
import Hero from '../components/page-header'
import Skills from "@/components/skils";
import { MeteorsDemo } from "@/components/project";
import ToulonPage from "../components/weather";



export default function Home() {
  return (
    <div>
    <main className="flex flex-row items-center justify-center mt-[15px]">
      <div className="flex justify-center w-full max-w-screen-lg">
        <NavigationMenuDemo/>
      </div>
     
    </main>
    <div className="flex w-full justify-center">
    <Hero></Hero>
    </div>
    <div className="mt-40">
      <h1 className="text-center text-4xl font-bold text-[#172554] mb-20">Skills</h1>
    <Skills></Skills>
    </div>
    <div className=" mt-40 grid place-items-center gap-x-8 gap-y-4 grid-cols-1">
    <MeteorsDemo/>
    <div className="mt-40 text-center font-bold text-[#172554]">
      <p>Designed and built by Guillaume SUCH</p>

      <p className="mt-4 mb-10 font-bold text-center text-[#172554]">©Copyright 2024 - Guillaume SUCH</p>
    </div>
    <ToulonPage/>
    </div>
    
    </div>
  );
}
