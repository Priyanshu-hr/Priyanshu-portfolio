import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 bg-blue-500"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;