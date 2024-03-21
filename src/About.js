import React from 'react';
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import AboutSec from "./components/AboutSec";
import Footer from "./components/Footer";

function About() {

    return (
        <>
            <div className='grain'
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
            <Navbar pagename="About"/>
            <header>

            </header>
            <AboutSec/>
            <Footer/>
        </>
    );
}

export default About;
