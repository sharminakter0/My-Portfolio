import React from 'react';
import { FaGithub,  FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const HeroSocialIcon = () =>{

    const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

      const socialLinks = [
        { 
          id: 1, 
          icon: <FaGithub className="text-xl" />, 
          url: "https://github.com/sharminakter0",
          color: "hover:text-gray-400",
          bg: "hover:bg-gray-800/50"
        },
        { 
          id: 2, 
          icon: <FaFacebook className="text-xl" />, 
          url: "https://www.facebook.com/sharminakter0s",
          color: "hover:text-blue-400",
          bg: "hover:bg-blue-800/30"
        },
        { 
          id: 3, 
          icon: <FaLinkedin className="text-xl" />, 
          url: "https://www.linkedin.com/in/sharmin-akter0s/",
          color: "hover:text-cyan-400",
          bg: "hover:bg-cyan-800/30"
        },
        { 
          id: 4, 
          icon: <FiMail className="text-xl" />, 
          url: "mailto:sharminakter0sr@gmail.com",
          color: "hover:text-red-400",
          bg: "hover:bg-red-800/30"
        },
      ];
    return (
         <motion.div
            className="flex flex-col "
            variants={itemVariants}
          >
           
            <div className="flex gap-4">
              {socialLinks.map(({ id, icon, url, color, bg }) => (
                <motion.a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-purple-500 ${color} ${bg} p-2 rounded-full transition-all duration-300`}
                  whileHover={{ 
                    y: -5,
                    scale: 1.2,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
    );
};

export default HeroSocialIcon;