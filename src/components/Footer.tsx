import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Code2 className="w-6 h-6 text-indigo-400" />
            <span className="font-bold text-xl">Nicolas Torres</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/nicolastorres"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/nicolastorres"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nicolas.torres@email.com"
              className="hover:text-indigo-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Nicolas Torres. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;