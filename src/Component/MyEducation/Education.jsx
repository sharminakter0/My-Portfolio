import React from "react";
import { motion } from 'framer-motion';
import { FaUniversity, FaBookOpen, FaGraduationCap } from 'react-icons/fa';
import { IoIosRibbon } from 'react-icons/io';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 ">
      <div className="w-12/13 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
        <motion.h1 
         initial={{ opacity: 0, y: -30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true }}className='text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#b227c2] to-[#ea46ed]'>My Skills</motion.h1>
          <div className="w-25 h-1 bg-gradient-to-r from-[#c037f2] to-[#cf2a8d] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            My academic foundation in Computer Science & Engineering
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative  backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500 shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#270734] blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full blur-xl"></div>
          
          {/* University Header */}
          <div className="bg-gradient-to-r from-[#270734] to-[#37004d] p-6 border-b border-gray-700 flex items-center gap-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-[#9d1fce] to-[#37004d] text-white">
              <FaUniversity className="text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">University of Global Village</h3>
              <p className="text-[#e714c4]"> Bsc in Computer Science & Engineering</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Degree Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-[#7010a9] text-xl" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Bachelor of Science</h4>
                    <p className="text-gray-400">2022 - 2026 (Expected)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <IoIosRibbon className="text-[#43f52b] text-xl" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Current GPA: 3.5/4.0</h4>
                    <p className="text-gray-400">Dean's List Honors</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaBookOpen className="text-purple-400 text-xl" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Key Courses</h4>
                    <p className="text-gray-400">Algorithms, Web Development, Database Systems</p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-whitepx-3 py-2 rounded-lg">
                  Notable Achievements
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#b31cef] mt-1">▹</span>
                    <span>Winner of 2023 University Hackathon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b31cef] mt-1">▹</span>
                    <span>Published research on Machine Learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b31cef] mt-1">▹</span>
                    <span>Lead Developer for Student Portal Project</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-cyan-400/10 blur-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;