import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed w-full bg-opacity-90 bg-[#121212] backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">
            Mohd. <span className="text-[#0d6efd]">Shadav</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-[#0d6efd] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Mohd-Shadav" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0d6efd]">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mohd-shadav-aa53aa28b" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0d6efd]">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/shadav_sheikh" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0d6efd]">
                <Twitter size={20} />
              </a>
            <a href="/CV/MY CV pdf updated.pdf" download={"/CV/MY CV pdf updated.pdf"}>
            <button className="flex items-center space-x-2 bg-[#0d6efd] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
             
             <Download size={16} />
             
             
             <span>Resume</span>
           </button>
            </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-[#0d6efd]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 py-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0d6efd]">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0d6efd]">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0d6efd]">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;