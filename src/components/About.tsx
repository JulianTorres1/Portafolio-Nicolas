import React from 'react';
import { Code, Database, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Sobre Mí</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Soy un desarrollador junior con pasión por el desarrollo web y las nuevas tecnologías. 
              Me especializo en crear aplicaciones web modernas y responsivas utilizando las últimas 
              tecnologías del mercado.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Tecnologías que manejo:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <Code className="w-6 h-6 text-indigo-600 mb-2" />
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <Database className="w-6 h-6 text-indigo-600 mb-2" />
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <Globe className="w-6 h-6 text-indigo-600 mb-2" />
                  <h4 className="font-semibold mb-2">Otros</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>VS Code</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=800&q=80"
              alt="Espacio de trabajo"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;