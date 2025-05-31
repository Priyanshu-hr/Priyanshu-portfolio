import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="w-full h-[600px] relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                 src="https://raw.githubusercontent.com/Priyanshu-hr/Priyanshu-portfolio/main/public/assets/images/profile.jpg"
          alt="Priyanshu Prajapati"
          className="w-full h-full object-cover object-center"
          style={{
            objectPosition: 'center center',
            backgroundColor: 'rgba(0,0,0,0.05)'
          }}
          onError={(e) => {
            console.error('Image failed to load');
            e.target.src = 'https://github.com/Priyanshu-hr.png'; 
          }}
        />
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-blue-500/10 backdrop-blur-sm rounded-full"></div>
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-purple-500/10 backdrop-blur-sm rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              Hello! I'm Priyanshu, a passionate Computer Science student with a strong foundation in programming fundamentals. 
              I'm currently exploring various aspects of software development and constantly learning new technologies.
            </p>

            {/* Education Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-4 rounded-lg backdrop-blur-sm mb-4">
                <h4 className="font-semibold">Computer Science Student</h4>
                <p className="text-gray-400">Currently pursuing my degree</p>
              </div>
            </div>

            {/* Core Knowledge */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Core Knowledge</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Programming Basics", detail: "Problem Solving" },
                  { name: "C/C++", detail: "Fundamentals" },
                  { name: "Python", detail: "Basic Programming" },
                  { name: "DBMS", detail: "Database Concepts" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-4 rounded-lg backdrop-blur-sm"
                  >
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-400">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Learning Goals */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Currently Learning</h3>
              <p className="text-gray-300">
                I'm actively learning web development fundamentals and exploring new programming concepts.
                My goal is to build a strong foundation in software development.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              View My Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;