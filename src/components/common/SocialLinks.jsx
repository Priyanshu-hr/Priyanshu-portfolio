import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = ({ className = '' }) => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/Priyanshu-hr",
      label: "GitHub",
      hoverColor: "hover:text-gray-100"
    },
    {
      id: 2,
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/priyanshu-parjapat", // Replace with your LinkedIn profile URL
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400"
    }
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 transition-colors duration-300 ${link.hoverColor}`}
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;