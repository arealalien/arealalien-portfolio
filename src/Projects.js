import React from 'react';
import { useEffect, useState } from "react";
import './css/main.css';
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Components
import Navbar from "./components/Navbar";
import ProjectsSec from "./components/ProjectsSec";
import TimelineSec from "./components/TimelineSec";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function Projects() {
    const [loading] = useState(true);

    useEffect(() => {
        if (!loading) return;

        const scrollEl = document.querySelector('#gallery-container');
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            lerp: 0.05, // Adjust this value to control the "smoothness" and "damping"
            multiplier: 1.2, // Adjust this value to control the scrolling speed
            class: 'is-reveal'
        });

        return () => {
            if (locoScroll) locoScroll.destroy();
        };
    }, [loading]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div id="gallery-container" data-scroll-container>
                <div className='grain'
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
                <Navbar pagename="Projects"/>
                <header className="projects-header" data-scroll-section>
                    <div className="projects-header-banner">
                        <Banner bannerwords="Projects , Projects , Projects , "/>
                    </div>
                </header>
                <ProjectsSec data-scroll-section/>
                <TimelineSec data-scroll-section/>
                <Footer data-scroll-section/>
            </div>
        </>
    );
}

export default Projects;
