import React from 'react';
import { Code2, Palette, Globe, Brain } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p className="text-gray-600">Crafting clean, efficient code and building scalable applications.</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Thinking</h3>
            <p className="text-gray-600">To solve most problems, it is necessary to think outside the box.</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Strategy</h3>
            <p className="text-gray-600">Always in touch with the future.</p>
          </div>
        </div>
      </div>
    </section>
  );
}