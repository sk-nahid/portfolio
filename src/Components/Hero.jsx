import { FaGithub, FaLinkedin } from "react-icons/fa";

import profile1 from '../assets/profile.png'
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
    return (
        <div className="hero min-h-[80vh] bg-base-200  " id='home'>
            <div className="hero-content flex-col lg:flex-row-reverse justify-between md:w-[80%]">
                {/* Profile Image */}
                <div className='p-4 ' >
                    <img
                        src={profile1}
                        className="w-sm md:w-fit rounded-full shadow-2xl border-4 border-primary"
                        alt="Profile"
                    />
                </div>


                {/* Text Content */}
                <div className='text-center md:text-left'>
                    <h1 className="text-5xl font-bold">Hi, I’m Nahid 👋</h1>
                    <p className="py-4 text-lg text-base-content">
                        Front-End Developer
                    </p>

                    {/* Social Icons */}
                    <div className="mb-6 flex gap-4">
                        <a href="https://github.com/sk-nahid" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl" />
                        </a>
                        <a href="https://linkedin.com/in/sknahidbbl" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a href="mailto:sknahid01111@gmail.com">
                            <HiOutlineMail className="text-2xl" />
                        </a>
                    </div>  

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="#contact" className="btn btn-primary">Hire Me</a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"

                            className="btn btn-outline btn-primary"
                        >
                            View Resume
                        </a>
                    </div>


                </div>
            </div>
        </div>
    );
}
