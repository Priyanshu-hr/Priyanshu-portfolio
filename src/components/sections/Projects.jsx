import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const baseUrl = import.meta.env.BASE_URL || '';
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Add this hover animation variant
  const cardHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React, featuring smooth animations and dark theme UI.",
      image: `${baseUrl}/portfolio-project.svg`, 
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Priyanshu-hr/Priyanshu-portfolio",
      live: "https://priyanshu-hr.github.io/Priyanshu-portfolio/"
    },
    // Add more projects
  ];

  return (
    <section id="projects" className="py-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                // Add these three lines for hover effect
                whileHover="hover"
                variants={cardHoverVariants}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black border border-gray-800 rounded-lg overflow-hidden"
              >
                {/* Rest of your card content remains exactly the same */}
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;