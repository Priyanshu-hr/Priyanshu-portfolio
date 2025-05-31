import { motion } from 'framer-motion';
import { useState } from 'react';

const Brand = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="flex flex-col cursor-pointer relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Main Brand Container */}
      <div className="relative">
       
        <motion.div
          className="absolute -inset-2 from-blue-500 to-purple-600 opacity-[0.15] blur-lg rounded-full"
          animate={{
            opacity: isHovered ? 0.2 : 0.15,
            scale: isHovered ? 1.1 : 1,
          }}
        />

        {/* Main Text */}
        <motion.h1 
          className="text-[1rem] font-['Orbitron'] font-black tracking-[0.15em] leading-none
                     bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
          style={{
            textShadow: '0 0 10px rgba(0, 255, 157, 0.5), 0 0 20px rgba(0, 255, 157, 0.3)'
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          PRIYANSHU'S
        </motion.h1>

        {/* Portfolio Text */}
        <motion.div 
          className="mt-1 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="h-[1px] w-4 bg-[#0066ff] opacity-80" />
          <span className="text-sm font-['Share_Tech_Mono'] tracking-[0.3em] text-gray-300 opacity-80">
            PORTFOLIO
          </span>
          <div className="h-[1px] w-4 bg-[#0066ff] opacity-80" />
        </motion.div>

        {/* Scanline Effect */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div 
              className="w-full h-[2px] bg-[#00ff9d] opacity-20"
              animate={{
                y: ['0%', '400%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Brand;