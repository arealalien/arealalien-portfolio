import React from 'react';
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import ProjectsSec from "./components/ProjectsSec";
import TimelineSec from "./components/TimelineSec";
import Footer from "./components/Footer";

function Projects() {
    return (
        <>
            <div className='grain'
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
            <Navbar pagename="Projects"/>
            <header>

            </header>
            <ProjectsSec/>
            <TimelineSec/>
            <Footer/>
        </>
    );
}

export default Projects;
