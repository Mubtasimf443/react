/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/

import { type FC } from "react";
import { Github, Twitter, Briefcase, User, Code2, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
    {
        href: "https://github.com/Mubtasimf443",
        icon: Github,
        label: "GitHub Profile"
    },
    {
        href: "https://www.upwork.com/freelancers/~01d88c06387ca7603a?mp_source=share",
        icon: Briefcase,
        label: "Upwork Profile"
    },
    {
        href: "https://x.com/MubtasimFu11492",
        icon: Twitter,
        label: "Twitter Profile"
    }
];

const quickLinks = [
    { href: "/home#about", label: "About", icon: User },
    { href: "/home#skills", label: "Skills", icon: Code2 },
    { href: "/home#projects", label: "Projects", icon: ExternalLink },
    { href: "/home#contact", label: "Contact", icon: Mail }
];

const Footer: FC = () => {
    return (
        <footer id="Footer" className="bg-slate-900 py-16 pb-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    {/* Footer Info */}
                    <div className="footer-info">
                        <h3 className="text-xl font-bold text-gray-200 mb-4">
                            Muhammad Mubtasim
                        </h3>
                        <p className="text-gray-400">
                            Senior Full Stack Developer crafting exceptional web experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-200 mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-500 transition-colors duration-300 
                                            flex items-center gap-2 group"
                                    >
                                        <link.icon 
                                            className="w-4 h-4 group-hover:text-primary-500 transition-colors" 
                                        />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-200 mb-4">
                            Connect
                        </h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary-500 transition-all duration-300 
                                        transform hover:-translate-y-1"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center pt-8 border-t border-gray-800">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Muhammad Mubtasim. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;