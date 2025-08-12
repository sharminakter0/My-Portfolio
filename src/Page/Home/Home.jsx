import React from 'react';

import HeroMain from '../../Component/HeroSection/HeroMain';
import About from '../../Component/About/About';
import MySkills from '../../Component/MySkills/MySkills';
import Education from '../../Component/MyEducation/Education';
import Projects from '../../Component/MyProject/Projects';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Header/Navbar';
import Contact from '../../Component/Contact/Contact';


const Home = () => {
    return (
    <>

    <div id="hero" className='bg-[#0f0219] text-white'>
<Navbar/>
    <div className=''>
        <HeroMain/>
    </div>
    <About></About>
    <MySkills></MySkills>
    <Education></Education>
    <Projects></Projects>

    <Contact></Contact>
   <Footer></Footer>
 
</div>
    </>
    );
};

export default Home;