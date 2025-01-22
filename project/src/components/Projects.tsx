import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const projects = [

    {
       title:"My Portfolio Website",
       description:"A sleek and responsive portfolio website crafted with React and Tailwind CSS, featuring seamless contact functionality powered by EmailJS. Explore my projects and get in touch effortlessly!",
       image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       tech:['React','TS','Tailwind CSS','EmailJS'],
       github:'#',
       demo:'#'
    },
    {
      title: 'Real Estate Management Platform - Coming Soon',
      description: "An innovative platform simplifying property management, buying, and selling, launching soon!",
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'MongoDB', 'Tailwind CSS','Node.js','Express.js','Redux','Google Map Integration'],
      github: '#',
      demo: '#'
    },
    {
      title:'Premium Bag Shop',
      description:"A premium bag shop website built with EJS, Node.js, Express.js, and MongoDB, offering a dynamic and user-friendly platform to browse, purchase, and manage premium bag collections.",
      image:"https://images.unsplash.com/photo-1684407261522-48ad66a060e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZyUyMHNob3B8ZW58MHx8MHx8fDA%3D",
      tech:['EJS','Tailwind CSS','Node.js','Express.js','MongoDB'],
      github: '#',
      demo: '#'

    },
    {
      title: 'Recipe Finder App',
      description: 'A recipe application with Redux integration, API handling, and responsive design.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Redux', 'Node.js'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Music Player App',
      description: 'A feature-rich music player with playlist management and song visualization.',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
      tech: ['JavaScript', 'WebGL', 'HTML/CSS'],
      github: '#',
      demo: 'https://shadav-music-player.netlify.app/'
    },
    {
      title: 'Automobile Sample Website',
      description: 'Build a sleek, responsive automobile website with React, showcasing modern car designs, features, and seamless user navigation.',
      image: 'https://plus.unsplash.com/premium_photo-1682147848371-c27b0726a84f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tech: ['React' , 'Bootstrap'],
      github: '#',
      demo: 'https://autoxcarupdate.netlify.app/'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-[#121212] relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5
                  }
                }
              }}
              className="group bg-[#1E1E1E] rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#0d6efd] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-[#0d6efd]/20 text-[#0d6efd] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <Github size={20} className="group-hover:rotate-12 transition-transform" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <ExternalLink size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;