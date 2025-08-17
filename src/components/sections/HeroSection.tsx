/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import {  FileDown, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router';



const HeroSection = () => {
    return (
        <section id="hero" className="min-h-[90vh] flex items-center pb-16 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-center gap-x-12 gap-y-10">
                {/* Content */}
                <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                        Hi, I'm{' '}
                        <span className="text-primary-500 inline-block">
                            Muhammad Mubtasim
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
                        Senior Full Stack Developer
                    </h2>
                    <p className="text-base lg:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl">
                        Passionate about building modern web applications with JavaScript/TypeScript,
                        React, Node.js, and Python. Let's create something amazing together!
                    </p>
                    <div className="flex flex-wrap gap-5">
                        <Link 
                            to="/static/doc/mubtasim_resume.pdf"
                            className="px-8 py-3 bg-primary-500 text-white rounded-md font-medium 
                                hover:bg-primary-600 transition-colors duration-300 flex items-center"
                        >
                            <FileDown  className="w-4 h-4 mr-2"/>
                            Resume
                        </Link>
                        <a 
                            href="https://github.com/Mubtasimf443" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-gray-700 text-gray-300 rounded-md font-medium 
                                hover:border-primary-500 hover:text-primary-500 transition-colors duration-300 
                                flex items-center"
                        >
                            <Github className="w-4 h-4 mr-3" />
                            GitHub
                        </a>
                        <a 
                            href="https://twitter.com/MubtasimFu11492" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-gray-700 text-gray-300 rounded-md font-medium 
                                hover:border-primary-500 hover:text-primary-500 transition-colors duration-300 
                                flex items-center"
                        >
                            <Twitter className="w-4 h-4 mr-3" />
                            X Twitter
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="relative flex-shrink-0 mt-12 lg:mt-0">
                    <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative">
                        <img
                            src="/static/img/600X600.jpg"
                            alt="Muhammad Mubtasim Fuad - Full Stack Developer From Bangladesh"
                            
                            className="rounded-full object-cover border-2 border-primary-500"
                            
                        />
                        {/* Animated ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-primary-500/20 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;