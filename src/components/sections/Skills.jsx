import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const fundamentals = [
    { name: "C Programming", level: 75, color: "#A8B9CC" },
    { name: "C++", level: 70, color: "#00599C" },
    { name: "Python", level: 65, color: "#3776AB" },
    { name: "HTML", level: 60, color: "#E34F26" },
    { name: "CSS", level: 55, color: "#1572B6" },
    { name: "OOP Concepts", level: 70, color: "#FF9800" },
    { name: "DBMS Basics", level: 65, color: "#4479A1" },
    { name: "Problem Solving", level: 75, color: "#2196F3" },
  ];

  const concepts = [
    "Data Structures",
    "Algorithms",
    "Object-Oriented Programming",
    "Database Management",
    "Basic Web Development",
    "Programming Logic",
    "Version Control (Basic)",
    "Command Line"
  ];

  return (
    <section id="skills" className="py-20 min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Technical Skills
          </h2>

          {/* Programming Fundamentals */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-white">Programming Fundamentals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fundamentals.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg p-6 backdrop-blur-sm hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <span className="text-sm text-blue-400">Learning</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      style={{ backgroundColor: skill.color }}
                      className="h-full rounded-full relative"
                    >
                      <span className="absolute right-0 -top-6 text-xs text-gray-400">
                        {skill.level}%
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Concepts */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Core Concepts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {concepts.map((concept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-500/5 to-purple-600/5 p-4 rounded-lg text-center hover:from-blue-500/10 hover:to-purple-600/10 transition-all cursor-default shadow-lg hover:shadow-blue-500/20"
                >
                  {concept}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Learning Journey */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Learning Journey</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Currently focusing on strengthening my programming fundamentals and exploring new technologies.
              I'm passionate about learning and constantly working to improve my skills through hands-on projects
              and continuous practice.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;