import React from 'react';
import { Code2, Layout, Database, Github as Git, Terminal, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['C++', 'Python']
    },
    {
      title: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: <Database className="w-6 h-6" />,
      skills: ['Node.js', 'Express.js']
    },
    {
      title: 'Tools & Frameworks',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['MongoDB', 'Git']
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#1E1E1E] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group bg-[#121212] p-6 rounded-lg border border-gray-800 hover:border-[#0d6efd] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#0d6efd] transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-[#0d6efd]/10 text-[#0d6efd] rounded-full hover:bg-[#0d6efd]/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;