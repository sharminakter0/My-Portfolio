import React from 'react';
import image from"../../assets/WhatsApp_Image_2025-08-08_at_1.46.06_PM-removebg-preview.png"
import { motion } from 'framer-motion';

const HeroImage = () => {
    return (
        <div>
           <div className="flex justify-center relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 0.8, opacity: 2 }}
            transition={{ duration: 1 }}
            className="absolute w-60 h-60 md:w-90 md:h-90 rounded-full blur-3xl opacity-80 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 animate-pulse"
          />
          <motion.img
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            src={image}
            alt="Developer"
            className="relative w-50 h-50 md:w-80 md:h-80 rounded-full object-cover border-4 bg-gradient-to-r from-pink-400 via-purple-500 to-[#b613d7]  border-[#0f0219]
            hover:border-[#cd41e9] shadow-lg"
          />
        </div>
        </div>
    );
};

export default HeroImage;