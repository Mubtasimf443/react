/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import Heading2 from '../element/Heading2';



const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading2>About Me</Heading2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[500px]">
          {/* Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px] min-w-[350px] aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
                alt="Professional headshot"
                
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 min-w-[350px]">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a Senior Full Stack Developer with over a year of professional experience, passionate about
                building modern, scalable web applications.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-500">Technical Expertise</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Frontend: React, Redux, Next.js, TypeScript</li>
                  <li>Backend: Node.js, Python (FastAPI, Flask)</li>
                  <li>Databases: PostgreSQL, MySQL, MongoDB, Redis</li>
                  <li>DevOps: AWS, Ubuntu, Nginx, Linux</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-500">Current Focus</h3>
                <p>
                  Currently expanding my expertise in Rust, Java, and React Native, while leveraging modern tools like
                  ChatGPT, Deepseek, and Replit. Exploring cutting-edge technologies including GraphQL,
                  Nest.js, PyTorch, and WebSockets to deliver innovative solutions.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors duration-300"
                >
                  Contact Me
                  <svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary-500 text-primary-500 font-semibold hover:bg-primary-500 hover:text-white transition-colors duration-300"
                >
                  Download Resume
                  <svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;