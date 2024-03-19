import React from 'react';
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import AboutSec from "./components/AboutSec";
import Footer from "./components/Footer";

function About() {

    return (
        <>
            <Navbar pagename="About" />
            <header>
                
            </header>
            <AboutSec />
            <Footer />
        </>
    );
}

export default About;
