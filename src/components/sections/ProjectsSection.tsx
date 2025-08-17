/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import { Link } from 'react-router';
import Heading2 from '../element/Heading2';
import Button from '../element/Button';
import ProjectCard from '../card/ProjectCard';



const ProjectsSection = () => {
  const projects = [
  {
    title: "FriendsBook App Backend",
    description: "I have done the Backend Developement of FriendsBook App Video Calling, Matrimony , Chat System and Feature",
    imagePath: "/static/img/express_typescript_mongodb.png",
  },
  {
    title: "Admin Panal - FriendsBook App",
    description: "I have built backend Admin Panel of a FriendsBook App to Manage Users, Gift , Membership Management and etc",
    imagePath: "/static/img/react_shadcn.png",
  },
    {
    title: "Ecommerce Feature",
    description: "For Gojushinryu International Martial Arts, I have build a Ecommerce Fuctionality",
    imagePath: "/static/img/nodejs_ecommerce.png",
    liveUrl: "https://gojushinryu.com/shop",
  },
  {
    title: "Backend Admin Panel",
    description: "I have built backend Admin Panel of a Gojushinryu International Martial Arts Website",
    imagePath: "/static/img/ejs.png",
    githubUrl: "https://github.com/Mubtasimf443/Gojushinryu-website",
  },
  {
    title: "Gojushinryu-website",
    description: "This is Martial Arts School Website having the feature of use student management, ecommerce and else.",
    imagePath: "/static/img/gojushinryu.website.png",
    liveUrl: "https://gojushinryu.com",
  },
  {
    title: "Elementor Clone",
    description: "I had a plan to build something Like elementor page builder and I have made simple clone with JavaScript",
    imagePath: "/static/img/elementor_clone.png",
    githubUrl: "#",
  },
  {
    title: "Product Search Api",
    description: "I have built a product search api using Nodejs and Expressjs and Mysql",
    imagePath: "/static/img/product_search_api_dem.png",
    githubUrl: "https://github.com/Mubtasimf443/Advance-Product-Search-Api",
  },
  {
    title: "PDF Processing Backend API",
    description: "I have built PDF Processing Backend API's with Python FastAPI",
    imagePath: "/static/img/fastApi.png",
    githubUrl: "https://github.com/Mubtasimf443/fastapi-pdf-Processing-Backend",
  },
  {
    title: "Photo Editing Tool",
    description: "I have built Photo Editing Tool using Reactjs and Jim.js",
    imagePath: "/static/img/react_redux.png",
    githubUrl: "https://github.com/Mubtasimf443/Photo-Editor-React.js",
  },
];

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading2>Projects</Heading2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant={'primary'} >
          <Link
            to="/projects"
           className='flex flex-row justify-center items-center w-full'
          >
            View More Projects
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
          </Link>
          </Button>
       
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;