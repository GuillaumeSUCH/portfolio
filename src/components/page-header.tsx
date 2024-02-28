import React from 'react';
import { Button } from "@/components/ui/button"
import Link from "next/link"


const Hero = () => {
  const email = "guillaume.such@gmail.com";
  return (
    <div>
    <section className="hero text-black text-center flex flex-row align-center justify-center w-full pt-40">
      <div className="text-left flex flex-col mr-[350px] justify-center">
        <p className="text-lg md:text-xl mb-8 dark:text-white">Hey there !</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">Guillaume SUCH</h1>
        <p className="text-lg md:text-xl mt-4 dark:text-white">FullStack Web Developer</p>
      </div>
      <div className="text-right">
        <img src="https://media.licdn.com/dms/image/C4D03AQHUb8YWhottmA/profile-displayphoto-shrink_200_200/0/1582816179570?e=1714608000&v=beta&t=KwNjP4mAfGYuTjUM6NJ8iWOudBiWuGAOvkA5joho4Jg" alt="Guillaume Such" className="rounded-lg shadow-2xl" />
      </div>
      
    </section>
    <div className='flex space-x-4 justify-center pt-40'>
    <Button><Link href="https://github.com/GuillaumeSUCH" target="_blank" rel="noopener noreferrer">Github</Link></Button>
    <Button><Link href="https://www.linkedin.com/in/guillaume-such/" target="_blank" rel="noopener noreferrer">Linkedin</Link></Button>
    <Button><a href={`mailto:${email}`}>guillaume.such@gmail.com</a></Button>
    </div>
    </div>
  );
};

export default Hero;
