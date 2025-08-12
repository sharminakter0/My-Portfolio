import React from 'react';
import HeroText from './HeroText';
import HeroImage from './HeroImage';


const HeroMain = () => {
    return (
        <>
        <div id="hero" className=' max-w-7xl mx-auto pt-30 lg:pt-35 pb-20 px-4 shadow-md  '>
        <div className=' flex flex-col-reverse lg:flex-row gap-25 '>
            <div className="flex-2/3">
          <HeroText ></HeroText></div>  

          <div  className="flex-1/3">
          <HeroImage ></HeroImage></div>
           </div>
         
        </div>
        </>
    );
};

export default HeroMain;