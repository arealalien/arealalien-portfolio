import React, {useEffect} from 'react';
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import ProjectsSec from "./components/ProjectsSec";
import TimelineSec from "./components/TimelineSec";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className='grain'
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
            <Navbar pagename="Projects"/>
            <header className="projects-header">
                <div className="projects-header-banner">
                    <Banner bannerwords="Projects , Projects , Projects , "/>
                </div>
            </header>
            <ProjectsSec/>
            <TimelineSec/>
            <Footer/>
        </>
    );
}

export default Projects;
