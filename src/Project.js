import React from 'react';
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function Project({ project }) {

    let projectName = project;

    if (project === "xcraft") {
        projectName = "xCraft";
    } else if (project === "yme") {
        projectName = "YME Universe";
    } else if (project === "gg") {
        projectName = "Grøss og Gru";
    } else {

    }

    return (
        <>
            <div className='grain'
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
            <Navbar pagename={project}/>
            <header className="project-header">
                <Banner bannerwords={`${projectName} , ${projectName} , ${projectName} , `} />
            </header>
            <Footer/>
        </>
    );
}

export default Project;
