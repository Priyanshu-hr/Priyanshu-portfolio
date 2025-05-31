import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Priyanshu-hr. All rights reserved.</p>
            <p className="text-sm">Last updated: 2025-05-31 14:18:19 UTC</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex space-x-6 mb-2">
              {['GitHub', 'LinkedIn', 'Twitter'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Built with React + Vite + Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;