import React from 'react';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import profile from './Untitled.jpg'


const Hero = () => {
  const email = "guillaume.such@gmail.com";
  return (
    <div>
      <section className="flex space-x-4 justify-center pt-40">
        <div className="mb-8">
        </div>
        <div className="text-center ">
          <p className="text-lg md:text-xl mb-8 text-[#172554]">Hey there! I am</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#1e3a8a]">Guillaume SUCH</h1>
          <p className="text-lg md:text-xl mt-4 text-[#172554]">FullStack JS Web Developer</p>
        </div>
      </section>
      <div className='flex space-x-4 text-center items-center justify-center pt-40'>
        <Button className='bg-[#172554] color-[white]'>
          <Link href="https://github.com/GuillaumeSUCH" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6 mr-2" />
              <span>GitHub</span>
            </div>
          </Link>
        </Button>
        <Button className='bg-[#172554] color-[white]'>
          <a href={`mailto:${email}`}>guillaume.such@gmail.com</a>
        </Button>
        <Button className='bg-[#172554] color-[white]'>
          <Link href="https://www.linkedin.com/in/guillaume-such/" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 mr-2" />
              <span>LinkedIn</span>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
