import React from 'react';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import ProjectCard from '../Components/ProjectCard';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div>
            
            <div id="hero">
                <Hero></Hero>
            </div>
            <div id="about">
                <About></About>
            </div>
            <div id="skills">
                <Skills></Skills>
            </div>
            <div id="education">
                <Education></Education>
            </div>
            <div id="projects">
                <ProjectCard></ProjectCard>
            </div>
            <div id="contact">
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;