/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { Mail, Github, Twitter, Briefcase } from 'lucide-react';
import Heading2 from '../element/Heading2';

const ContactSection = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            link: "mailto:mubtasimf443@gmail.com",
            text: "mubtasimf443@gmail.com"
        },
        {
            icon: Github,
            title: "GitHub",
            link: "https://github.com/Mubtasimf443",
            text: "Mubtasimf443"
        },
        {
            icon: Twitter,
            title: "X Twitter",
            link: "https://x.com/MubtasimFu11492",
            text: "@mubtasim"
        },
        {
            icon: Briefcase,
            title: "Upwork",
            link: "https://www.upwork.com/freelancers/~01d88c06387ca7603a?mp_source=share",
            text: "View Upwork Profile"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Heading2>Get In Touch</Heading2>
                   
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    minLength={6}
                                    maxLength={35}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white 
                                        placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    minLength={7}
                                    maxLength={50}
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white 
                                        placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    minLength={25}
                                    maxLength={2500}
                                    rows={6}
                                    placeholder="Your message here..."
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white 
                                        placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold 
                                    hover:bg-primary-600 transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {contactInfo.map((item, index) => (
                            <div 
                                key={index}
                                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 flex flex-col items-center 
                                    text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary-500"
                            >
                                <item.icon className="w-8 h-8 text-primary-500 mb-4" />
                                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary-500 transition-colors"
                                >
                                    {item.text}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;