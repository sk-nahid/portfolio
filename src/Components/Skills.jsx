import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiVercel, SiNetlify, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const frontendSkills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-600" />,
      desc: "Building semantic and accessible web pages.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-600" />,
      desc: "Creating responsive and visually appealing designs.",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-[#00bcff]" />,
      desc: "Easy design and increase work flow.",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400" />,
      desc: "Writing dynamic and interactive frontend logic.",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
      desc: "Developing reusable UI components and SPA.",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-600" />,
      desc: "Building fast and scalable backend APIs.",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-700" />,
      desc: "Creating RESTful APIs with simplicity and speed.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
      desc: "Managing flexible and scalable NoSQL databases.",
    },
  ];

  const toolsSkills = [
    {
      name: "Git",
      icon: <FaGitAlt className="text-red-600" />,
      desc: "Version control and collaboration with teams.",
    },
    {
      name: "Vercel",
      icon: <SiVercel className="text-black" />,
      desc: "Deploying frontend applications with ease and speed.",
    },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-green-600" />,
      desc: "Continuous deployment and hosting for modern web projects.",
    },
  ];

  const renderSkills = (skills) =>
    skills.map(({ name, icon, desc }) => (
      <div
        data-aos="flip-left"
        
        
        key={name}
        className="flex flex-col items-center gap-3 hover:scale-105 transition-transform  duration-300 cursor-pointer hover:bg-secondary py-8 bg-base-300 hover:shadow-2xl shadow-xl rounded-2xl scroll-smooth "
        title={name}
      >
        <div className="text-7xl">{icon}</div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-base-content max-w-xs">{desc}</p>
      </div>
    ));

  return (
    <section id="skills" className="py-16 bg-base-200 ">
      <div className="container mx-auto px-6 ">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">
          My Skills
        </h2>

        <div  className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-primary text-center">
            Frontend
          </h3>
          <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-10 justify-center items-center text-center ">
            {renderSkills(frontendSkills)}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-primary text-center">
            Backend
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-start text-center md:w-3/4 mx-auto">
            {renderSkills(backendSkills)}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-6 text-primary text-center">
            Tools & Deployment
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-start text-center md:w-3/4 mx-auto">
            {renderSkills(toolsSkills)}
          </div>
        </div>
      </div>
    </section>
  );
}
