// src/components/Projects.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaFirefoxBrowser } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress } from 'react-icons/si';
import img2 from "../../assets/foodbridge.png"
import img1 from "../../assets/Freelancetask.png"
import img3 from "../../assets/KnowledgeTAsk.png"



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "WorkNest",
      image: img1,
      description: "A Freelance Task Platform connecting clients with skilled freelancers to post, bid, and manage tasks seamlessly with secure communication and payments.",
      technologies: ["React",  "MongoDB", "Express"],
      liveLink: "https://ass10-freelance-task.web.app/",
      githubLink: "https://github.com/sharminakter0/Freelance-Task-Client",
      challenges: [
        "Implementing real-time inventory updates",
        "Optimizing mobile checkout flow",
   
      ],
      improvements: [
        "Add AI-powered product recommendations",
        "Implement PWA features for offline access",
      
      ]
    },
    {
      id: 2,
      title: "Food Bridge",
      image: img2,
      description: " Food Bridge is a platform that links surplus food suppliers with charities and communities, helping reduce waste and feed those in need. ",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://ass12-foodbridge.web.app/",
      githubLink: "",
      challenges: [
        "Real-time sync across multiple devices",
        "Implementing granular permissions",
        "Optimizing for large task lists"
      ],
      improvements: [
        "Add calendar view integration",
        "Implement task automation rules",
        "Handling payment gateway integration"
      ]
    },
    {
      id: 3,
      title: "Think Trove",
      image: img3,
      description: "Your smartly paying solution",
      technologies: ["tailwind","React", "Express", "MongoDB", "D3.js"],
      liveLink: "https://assi11-knowledge-sharing.web.app/",
      githubLink: "https://github.com/sharminakter0/KnowledgeSharing-Client-side",
      challenges: [
        "Handling large datasets efficiently",
        "Creating responsive data visualizations",
        "Implementing secure OAuth flows"
      ],
      improvements: [
        "Add competitor comparison features",
        "Implement predictive analytics",
        "Expand platform integrations"
      ]
    }
  ];

  const techIcons = {
    "React": <FaReact className="text-cyan-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    "MongoDB": <SiMongodb className="text-green-600" />,
    "Express": <SiExpress className="text-gray-300" />,
    "Firebase": <SiFirebase className="text-amber-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-300" />
  };

  return (
    <section id="projects" className="py-20 px-4 ">
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
                           viewport={{ once: true }}className='text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#b227c2] to-[#ea46ed]'>My Projects</motion.h1>
                            <div className="w-25 h-1 bg-gradient-to-r from-[#c037f2] to-[#cf2a8d] mx-auto mb-6"></div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Some of my recent work that I'm particularly proud of
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#14011b] backdrop-blur-sm rounded-xl overflow-hidden border border-[#6c158c] hover:border-[#e712d2] hover:shadow-md hover:shadow-[#6a0c8c] transition-all duration-300 shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="flex text-white items-center gap-1 text-xs bg-gray-700/50 px-2 py-1 rounded hover:text-purple-500">
                      {techIcons[tech]} {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[#dc21ea] hover:text-white text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    View Details
                  </button>
                  <div className="flex gap-3">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub repository"
                    >
                      <FiGithub />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label="Live demo"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-gray-900/50 hover:bg-gray-700/50 p-2 rounded-full text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <FaFirefoxBrowser className="text-blue-400" /> Technology Stack
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.technologies.map((tech) => (
                        <li key={tech} className="flex items-center gap-2 text-gray-300">
                          {techIcons[tech]} {tech}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-white mt-6 mb-3 flex items-center gap-2">
                      🔗 Links
                    </h4>
                    <div className="flex gap-4">
                      <a 
                        href={selectedProject.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <FiGithub /> GitHub
                      </a>
                      <a 
                        href={selectedProject.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      🚧 Challenges Faced
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-cyan-400">▹</span> {challenge}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-white mt-6 mb-3 flex items-center gap-2">
                      🔮 Future Improvements
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      {selectedProject.improvements.map((improvement, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-purple-400">▹</span> {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;