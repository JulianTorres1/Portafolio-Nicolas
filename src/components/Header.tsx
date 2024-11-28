import React from 'react';
import { Menu, X, Code2, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-xl">Nicolas Torres</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="hover:text-indigo-600 transition-colors">Inicio</a>
            <a href="#sobre-mi" className="hover:text-indigo-600 transition-colors">Sobre Mí</a>
            <a href="#proyectos" className="hover:text-indigo-600 transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-indigo-600 transition-colors">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/nicolastorres" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/nicolastorres" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t">
          <nav className="flex flex-col p-4">
            <a href="#inicio" className="py-2 hover:text-indigo-600 transition-colors">Inicio</a>
            <a href="#sobre-mi" className="py-2 hover:text-indigo-600 transition-colors">Sobre Mí</a>
            <a href="#proyectos" className="py-2 hover:text-indigo-600 transition-colors">Proyectos</a>
            <a href="#contacto" className="py-2 hover:text-indigo-600 transition-colors">Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;