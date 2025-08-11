import profile from '../assets/profile.jpeg'
import profile1 from '../assets/profile.png'

export default function Hero() {
    return (
        <div className="hero min-h-[80vh] bg-animated  ">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between md:w-[80%]">
                {/* Profile Image */}
                <div className='p-4'>
                    <img
                        src={profile1}
                        className="w-sm md:w-fit rounded-full shadow-2xl border-4 border-primary"
                        alt="Profile"
                    />
                </div>


                {/* Text Content */}
                <div className=''>
                    <h1 className="text-5xl font-bold">Hi, I’m Nahid 👋</h1>
                    <p className="py-4 text-lg text-base-content">
                        Front-End Developer
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4">
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

                    {/* Social Icons */}
                    <div className="mt-6 flex gap-4">
                        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github text-2xl"></i>
                        </a>
                        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin text-2xl"></i>
                        </a>
                        <a href="mailto:youremail@example.com">
                            <i className="fa-solid fa-envelope text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
