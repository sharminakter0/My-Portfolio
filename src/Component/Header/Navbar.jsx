// src/components/Navbar.jsx
import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
// import logo from '../assets/ChatGPT Image Jun 29, 2025, 08_00_00 PM.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const navItems = [
    { id: 1, label: 'Home', to: 'hero' },
    { id: 2, label: 'About', to: 'about' },
    { id: 3, label: 'MySkills', to: 'my-skills' },
    { id: 4, label: 'Education', to: 'education' },
    { id: 5, label: 'Projects', to: 'projects'},
    { id: 6, label: 'Contact', to: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-60 bg-gradient-to-r from-[#120515] to-[#240e28] shadow-md shadow-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo on the left */}
        <div className='flex items-center gap-8'>
 {/* <img className='w-14' src= {logo} alt="" />  */}
  <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9222e2] to-[#ce6ae2]">
          {"Sharmin Akter."}
        </h1>
        </div>
     

        {/* Centered Navigation Items - Hidden on mobile */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          {navItems.map(({ id, label, to }) => (
            <Link
              key={id}
              to={to}
              smooth
                offset={-20} 
              duration={500}
              className="cursor-pointer relative group text-gray-300 hover:text-white transition-all"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a323bc] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Resume Button - Hidden on mobile */}
        <div className="hidden md:block">
          <a
           
            download
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#9222e2] to-[#b447ca] text-white hover:from-[#681070] hover:to-[#a932c0] transition-all shadow-md hover:shadow-[#c153d6] hover:scale-105"
          >
            <FaDownload className="text-sm" />
          Download  Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden text-gray-200 text-2xl cursor-pointer  transition-colors" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#230629] text-center py-4 space-y-3">
          {navItems.map(({ id, label, to }) => (
            <Link
              key={id}
              to={to}
              smooth
              duration={500}
              onClick={toggleMenu}
              className="block py-2 text-white  transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
          
            
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-md bg-gradient-to-r   from-[#9222e2] to-[#b447ca] text-white"
          >
            <FaDownload className="text-sm" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;