import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Tech Enthusiast",
        "Computer Science Student",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Priyanshu
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 mb-8 h-20">
          <span ref={el}></span>
        </div>

        <div className="flex items-center justify-center space-x-4 mb-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-all">
            View Projects
          </button>
          <button className="bg-transparent border-2 border-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-500/10 transition-all">
            Contact Me
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Priyanshu-hr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-username" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;