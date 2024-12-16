import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
	return (
		<div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
					Jonathan Costa Moura
				</h1>
				<p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
					Full Stack Developer & Mobile Developer
				</p>
				<div className="flex justify-center space-x-6 mb-12">
					<a href="https://github.com/Jhon171819" className="transform hover:scale-110 transition-transform duration-200">
						<Github className="w-6 h-6" />
					</a>
					<a href="https://www.linkedin.com/in/jonathan-costa-7688a42a2/" className="transform hover:scale-110 transition-transform duration-200">
						<Linkedin className="w-6 h-6" />
					</a>
				</div>
			</div>
			<div className="absolute bottom-8 animate-bounce">
				<ChevronDown className="w-8 h-8" />
			</div>
		</div>
	);
}