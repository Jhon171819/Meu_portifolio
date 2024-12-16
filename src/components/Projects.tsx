import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Agrolite Smart Farm",
    description: "A software solution for farm and livestock management.",
    image: "/agro-logo-icon-colored.svg",
    tech: ["React", "Python", "PostgreSQL", "Zustand"],
    live: "https://agrolite.com.br/",
    style: {width: "100%", heigth: "100%"}
  },
  {
    title: "Agrolite Manager App",
    description: "Collaborative project management tool",
    image: "/agro-logo-icon-colored.svg",
    tech: ["React-native", "Python", "PostgreSQL"],
    live: "https://play.google.com/store/apps/details?id=com.agrolitemanager&hl=pt_BR"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} style={project.style} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end space-x-4">
                  {project.github? 
                  (<a href={project.github} className="text-gray-600 hover:text-gray-900">
                    <Github className="w-5 h-5" />
                  </a>) : null}
                  <a href={project.live} className="text-gray-600 hover:text-gray-900">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}