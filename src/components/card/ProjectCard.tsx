/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { ExternalLink, Github } from 'lucide-react';
import { type FC } from 'react';

interface Props {
    title: string;
    description: string;
    imagePath: string;
    githubUrl?: string;
    liveUrl?: string;
};

const ProjectCard :FC<Props> = ({ title, description, imagePath, githubUrl, liveUrl }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
      <div className="relative h-48 w-full">
        <img
          src={imagePath}
          alt={title}
          className="object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-primary-500 mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-1">{description}</p>
        <div className="flex gap-4">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary-500 hover:text-primary-400 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary-500 hover:text-primary-400 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
  

export default ProjectCard;