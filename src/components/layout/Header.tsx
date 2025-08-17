/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { useToggle } from 'usehooks-ts';
import Button from '../element/Button';



const Header = () => {
    const [showMobileNav, toggle] = useToggle();

    return (
        <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50">
            <nav className="h-16">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="/"
                        className="text-primary-500 text-xl font-bold no-underline"
                    >
                        M. Mubtasim
                    </a>

                    {/* Hamburger Menu */}
                    <button
                        className="md:hidden flex flex-col cursor-pointer ml-4"
                        onClick={toggle}
                    >
                        <span className={`h-0.5 w-6 bg-white mb-1 transition-transform duration-300 ${showMobileNav ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`h-0.5 w-6 bg-white mb-1 transition-opacity duration-300 ${showMobileNav ? 'opacity-0' : ''}`}></span>
                        <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${showMobileNav ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    {/* Navigation Links */}
                    <ul className={`md:flex md:gap-4 md:static md:bg-transparent md:p-0 md:w-auto
                        ${showMobileNav ? 'flex' : 'hidden'}
                        absolute top-16 left-0 w-full bg-gray-900 p-4 flex-col
                        md:flex-row items-center z-40`}
                    >
                        <li><a href="/home#about" className="text-white hover:text-primary-500 transition-colors duration-300">About</a></li>
                        <li><a href="/home#skills" className="text-white hover:text-primary-500 transition-colors duration-300">Skills</a></li>
                        <li><a href="/projects" className="text-white hover:text-primary-500 transition-colors duration-300">Projects</a></li>
                        <li><a href="/english-blogs" className="text-white hover:text-primary-500 transition-colors duration-300">Blogs</a></li>
                        <li><a href="/home#contact" className="text-white hover:text-primary-500 transition-colors duration-300">Contact</a></li>
                    </ul>

                    {/* Contact Button */}
                    <Button variant={'outline'}>
                        <a
                            href="/home#contact"
                             >
                            Contact Me
                        </a>
                    </Button>

                </div>
            </nav>
        </header>
    );
};

export default Header;