import project1 from '../assets/sonar-tori.png'
import project2 from '../assets/dream-home.png'
import project3 from '../assets/foodLoop.png'
import { Link } from 'react-router-dom';

export default function ProjectCard() {
    const projects = [
        {
            id: 1,
            name: "Sonar Tori Courier",
            image: project1, // Replace with your image path
            description: "A full-stack parcel delivery application. with real time update",
            url: "https://example.com/project-one", // Link to project details or live demo
        },
        {
            id: 2,
            name: "Dream Home Building",
            image: project2,
            description: "A full-featured web application to manage a single apartment building.",
            url: "https://example.com/project-two",
        },
        {
            id: 3,
            name: "Food Loop BD",
            image: project3,
            description: "A food-sharing platform that allows users to donate and request leftover food to minimize waste.",
            url: "https://example.com/project-three",
        },
    ];

    return (
        <section id="projects" className="pt-16 pb-8 bg-base-200">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-4xl font-bold mb-12 text-primary text-center">My Projects</h2>
                <div  className="">
                    {projects.map(({ id, name, image, description, url }) => (
                        <div
                            data-aos="fade-up"
                            key={id}
                            className={`bg-base-100 rounded-lg shadow-lg overflow-hidden md:flex my-12 p-8 ${id === 2 ? 'flex-row-reverse' : ""}`}
                        >
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-48 object-cover md:w-1/2"
                            />
                            <div className="p-6 flex flex-col flex-grow md:w-1/2" >
                                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                                <p className="text-base-content flex-grow">{description}</p>
                                <Link to={`/project/${id}`} className="btn btn-primary w-max">
                                    View More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
