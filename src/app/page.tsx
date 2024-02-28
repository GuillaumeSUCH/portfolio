import Image from "next/image";
import { NavigationMenuDemo } from '../components/main-nav';

import Hero from '../components/page-header'
import Skills from "@/components/skils";
import { MeteorsDemo } from "@/components/project";

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
    <Skills></Skills>
    </div>
    <div className=" my-40 grid place-items-center gap-x-8 gap-y-4 grid-cols-3">
    <MeteorsDemo/>
    <MeteorsDemo/>
    <MeteorsDemo/>
    </div>
    </div>
  );
}
