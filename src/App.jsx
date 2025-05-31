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
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const timer = setTimeout(() => {
        setLoading(false);
        console.log('Loading complete'); 
      }, 1000);

      return () => clearTimeout(timer);
    } catch (err) {
      console.error('Loading error:', err);
      setError(err);
    }
  }, []);

 
  if (error) {
    return <div className="text-white p-4">Error loading app: {error.message}</div>;
  }

  return (
    <div className="min-h-screen bg-[#030014]"> {/* Add background color explicitly */}
      {loading ? (
        <div className="h-screen flex items-center justify-center bg-[#030014]">
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
        <div className="relative">
          <Navbar />
          <main className="relative">
            <div id="hero-section"><Hero /></div>
            <div id="about-section"><About /></div>
            <div id="projects-section"><Projects /></div>
            <div id="skills-section"><Skills /></div>
            <div id="contact-section"><Contact /></div>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;