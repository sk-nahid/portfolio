import React from 'react';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Education from '../Components/Education';

const Home = () => {
    return (
        <div>
            <div className="Navbar" id='NavBar'>
                <NavBar></NavBar>
            </div>
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
        </div>
    );
};

export default Home;