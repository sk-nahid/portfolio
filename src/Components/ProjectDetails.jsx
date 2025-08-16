import { useParams, Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaStripe, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiTailwindcss, SiExpress, SiVite } from "react-icons/si";
import project1 from '../assets/sonar-tori.png'
import project2 from '../assets/dream-home.png'
import project3 from '../assets/foodLoop.png'

const techLogos = {
  React: <FaReact className="text-sky-500" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Stripe: <FaStripe className="text-purple-500" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400" />,
  Express: <SiExpress className="text-gray-700" />,
  Vite: <SiVite className="text-purple-400" />,
};

const projects = [
  {
    id: "1",
    name: "Sonar Tori - Parcel Delivery System",
    image: project1,
    intro:
      "Sonar Tori Courier is a full-stack parcel delivery platform built with React, Node.js, MongoDB, and Firebase Authentication. It offers door-to-door service with features like dynamic parcel creation, cost calculation, and unique tracking IDs for real-time status updates. Users can securely pay via Stripe, while role-based dashboards serve customers, admins, and riders. Admins manage parcels, riders, and payments, while riders track deliveries and earnings. With its responsive design, intuitive interface, and planned upgrades like a rider earnings dashboard, Sonar Tori provides a reliable, scalable, and user-friendly solution for modern courier services.",
    techStack: ["React", "Node.js", "MongoDB", "Firebase", "Stripe", "TailwindCSS", "Express"],
    liveLink: "https://sonar-tori-2adb2.web.app/",
    githubLink: "https://github.com/sk-nahid/sonar-tori-courier-client",
    description: [
      {
        title: "Features",
        content: [
          "Door-to-door parcel service with live tracking.",
          "Role-based dashboards for admin, rider, and customers.",
          "Stripe payment integration and payment history.",
          "Dynamic location selection and cost calculation.",
        ],
      },
      {
        title: "Challenges Faced",
        content: [
          "Implementing real-time tracking with multiple user roles.",
          "Complex location-based delivery cost logic.",
        ],
      },
      {
        title: "Future Plans",
        content: [
          "add district manager Dashboard",
          "user can track rider live location",
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Dream Home - Building Management System",
    image: project2,
    intro:
      "Dream Home is a building management web application designed for seamless interaction between users, tenants, and admins. Built with React, Node.js, MongoDB, and Firebase Authentication, it enables apartment listing, rent agreements, payments via Stripe, and announcements in a secure environment. Role-based dashboards provide tailored features—tenants manage agreements and payments, while admins oversee members, create coupons, and post announcements. With responsive design, real-time data updates, and integrated map support, Dream Home offers an efficient and user-friendly way to manage apartment operations.",
    techStack: ["React", "Vite", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "Stripe"],
    liveLink: "https://fir-auth-195ec.web.app/",
    githubLink: "https://github.com/sk-nahid/dream-home-client",
    description: [
      {
        title: "Features",
        content: [
          "Role-based dashboard for users, tenants, and admins.",
          "Rent payment with Stripe and coupon discounts.",
          "Building announcements and apartment applications.",
          "Admin analytics and coupon management.",
        ],
      },
      {
        title: "Challenges Faced",
        content: [
          "Managing multiple role-based permissions securely.",
          "Synchronizing payments and agreements in real-time.",
        ],
      },
      {
        title: "Future Plans",
        content: [
          "Add tenant maintenance request system.",
          "Automated rent reminders via email.",
        ],
      },
    ],
  },
  {
    id: "3",
    name: "FoodLoopBD - Food Sharing Platform",
    image: project3,
    intro:
      "FoodLoopBD is a community-driven food-sharing platform aimed at reducing waste and helping those in need. Developed with React, Tailwind CSS, MongoDB, and Firebase, it allows donors to post leftover food and requesters to claim it. The system supports role-based dashboards for admins, donors, and requesters, with secure authentication and real-time request management. Users can search, filter, and sort listings for convenience. By combining an intuitive interface with responsive design, FoodLoopBD promotes sustainability and strengthens community connections.",
    techStack: ["React", "TailwindCSS", "Node.js", "MongoDB", "Firebase"],
    liveLink: "https://foodloopbd.netlify.app/",
    githubLink: "https://github.com/sk-nahid/food-loop",
    description: [
      {
        title: "Features",
        content: [
          "Donate and request leftover food with real-time updates.",
          "Role-based dashboards for donors, requesters, and admins.",
          "Search, sort, and filter food listings.",
        ],
      },
      {
        title: "Challenges Faced",
        content: [
          "Real-time request handling and access control.",
          "Designing an intuitive food listing interface.",
        ],
      },
      {
        title: "Future Plans",
        content: [
          "Multi-language support.",
          "Advanced location-based search.",
        ],
      },
    ],
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <h2>Project not found</h2>;

  return (
    <section className="py-16 bg-base-100">
      <div   className="max-w-5xl mx-auto px-6 ">
        <img src={project.image} alt={project.name} className="rounded-xl shadow-lg mb-6" />
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-2 px-4 py-2 bg-base-200 rounded-full shadow-sm text-sm font-medium"
            >
              {techLogos[tech]} {tech}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
        <p className="text-lg mb-6">{project.intro}</p>

        

        {/* Details */}
        {project.description.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <ul className="list-disc list-inside space-y-1">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Links */}
        <div className="flex flex-col md:flex-row  gap-4 mt-6">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Live Site
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            GitHub Repo
          </a>
          <Link to="/" className="btn btn-secondary">
            Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
