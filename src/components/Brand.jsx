// Fix 1: Import motion properly
import { motion } from 'framer-motion';

const Brand = () => {
  return (
    // Fix 2: Use motion.div instead of motion
    <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
      {/* Logo Icon */}
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-xl font-bold text-white">P</span>
      </div>

      {/* Brand Name */}
      <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Priyanshu
      </span>
    </div>
  );
};

export default Brand;