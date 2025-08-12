import React from 'react';
import { motion } from 'framer-motion';
import HeroSocialIcon from './HeroSocialIcon';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

const HeroText = () => {
    return (
        <div>
         <motion.h1 initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold ">Hi,I am  <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#b227c2] to-[#ea46ed]'>Sharmin Akter</span></motion.h1> 
            <div className='text-xl text-[#cc2aed] font-medium'>
                <Typewriter
  options={{
    strings: ['Fronted Devloper', 'React Specialist','Familiar with MERN Stack'],
    autoStart: true,
    loop: true,
  }}
/>
            </div>
            <motion.p  initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg ">I’m a passionate Frontend Developer crafting visually appealing, responsive and user-friendly websites. I specialize in React,  Tailwind CSS and modern JavaScript, turning ideas into interactive digital experiences.</motion.p>
           <div className='mt-4'> <HeroSocialIcon></HeroSocialIcon></div>
          
            <Link ><button  className='rounded-lg px-4 py-2 bg-gradient-to-r from-[#9222e2] to-[#b447ca] text-white hover:from-[#681070] hover:to-[#a932c0] transition-all shadow-md hover:shadow-[#c153d6] hover:scale-105 font-semibold mt-4'>Get In Touch</button></Link>
           
        </div>
    );
};

export default HeroText;