import aboutPhoto from "../assets/aboutPhoto.png"

export default function About() {
    return (
        <section id="about" className="py-16 bg-base-100">
            <div className="container mx-auto lg:grid grid-cols-2 items-center gap-12 px-6">

                {/* Profile Image */}
                <div data-aos="fade-right" className="mx-auto w-full">
                    <img
                        src={aboutPhoto}
                        alt="Profile"
                        className=""
                    />
                </div>

                {/* Text Content */}
                <div data-aos="fade-left" className="max-w-xl">
                    <h3 className="text-primary font-semibold text-lg">About Me</h3>
                    <h2 className="text-4xl font-bold mb-4">Who I Am</h2>
                    <p className="mb-6 leading-relaxed text-base-content">
                        I'm a Front-End focused MERN Stack Developer with a strong passion for building responsive, user-friendly, and scalable web applications. I specialize in React.js for dynamic user interfaces and have solid experience with Node.js, Express.js, and MongoDB on the backend.
                        <br />
                        <br />
                        My programming journey started in class 9, when I first learned HTML and CSS on my Android phone. My father, seeing my passion, bought me a computer, and I explored even more. I began working with WordPress and took on freelance projects on Fiverr. Over time, I wanted to create things from scratch, so I started learning JavaScript. After a short break for my studies, I returned and continued learning until I became a MERN Stack Developer.
                        <br />
                        <br />
                        I enjoy working in a team, sharing ideas, and exploring new technologies that make projects better and more creative. Outside of coding, I’m a reciter and currently studying Bangla literature. I’m also a marathon runner, a street photography enthusiast, and I love reading novels. These hobbies keep me inspired, curious, and connected to the world around me.
                    </p>

                    

                    <a href="/resume.pdf" download className="btn btn-primary">
                        View Resume
                    </a>
                </div>

            </div>
        </section>
    );
}
