import React from 'react';
import image from "../../assets/WhatsApp_Image_2025-08-08_at_1.46.06_PM-removebg-preview.png"
import { Link } from 'react-router';
import { motion } from "framer-motion";

const About = () => {
    return (
        <div id="about" className='w-11/12 mx-auto mt-9 py-20 px-4'>
            <div className='text-center mb-13'>
                <motion.h1 
                   initial={{ opacity: 0, y: -30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}className='text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#b227c2] to-[#ea46ed]'>About Me</motion.h1>
                  <div className="w-25 h-1 bg-gradient-to-r from-[#c037f2] to-[#cf2a8d] mx-auto mb-6"></div>
            <motion.p
                      initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}>The creative mind behind innovative web solutions</motion.p>
            </div>
            {/* Content */}
            <div className='flex flex-col lg:flex-row gap-35'>
            {/* Image side */}
            <motion.div  
                      initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
            className='flex-1/3 '>
                <img className='h-60 w-60 lg:h-80 lg:w-80 rounded-full bg- shadow-lg shadow-purple-500 border-4 hover:border-purple-500' src={image} alt="About me" />

            </motion.div>

            <motion.div 
                 initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}className='flex-2/3'>
                <h3 className='mb-2 text-2xl font-semibold '>Turning Ideas Into Experiences</h3>
                <p className='text-gray-300'>With over 2 years of experience in web development, I specialize in creating pixel-perfect, performant applications that users love. My journey began when I discovered the magic of turning code into visual experiences.</p>

               <p className='text-gray-300 pt-2'>I approach each project with a unique blend of technical precision and creative thinking. Whether it's building responsive interfaces or solving complex problems, I believe in writing clean, maintainable code.</p>
                <p className='text-gray-300 py-2'>
                    Beyond coding, I'm an active contributor to developer communities and enjoy mentoring newcomers. When I'm not at my desk, you'll find me exploring new technologies or hiking for creative inspiration.
                </p>


                <div className='gap-5 mt-6 flex '>
                    <Link>   <button className='px-5 py-2 rounded-lg bg-[#9222e2] text-white font-semibold shadow-lg hover:scale-105 hover:bg-[#a932c0] transition duration-300'>Let's Collaboate</button>
                    </Link>
                    <Link>   <button className='px-5 py-2 rounded-lg bg-[#9222e2] text-white font-semibold shadow-lg hover:scale-105 hover:bg-[#a932c0] transition duration-300'>View Project</button>
                    </Link>
                </div>

            </motion.div>
              


            </div>
        </div>
    );
};

export default About;