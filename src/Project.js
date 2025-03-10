import React, {useEffect, useRef, useState} from 'react';
import './css/main.css';
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function Project({ project }) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [rotateAngle, setRotateAngle] = useState(0);
    const projectRef = useRef(null);

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

    let projectName = project;

    if (project === "xcraft") {
        projectName = "xCraft";
    } else if (project === "yme") {
        projectName = "YME Universe";
    } else if (project === "gg") {
        projectName = "Grøss og Gru";
    } else if (project === "porsche") {
        projectName = "Porsche";
    } else {

    }

    useEffect(() => {
        const handleScroll = () => {
            if (!projectRef.current) return;
            const projectsTop = projectRef.current.offsetTop; // Get the top offset of the projects section
            const projectsHeight = projectRef.current.offsetHeight;
            const windowHeight = window.innerHeight;
            const maxScroll = projectsTop + projectsHeight - windowHeight;
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            // Calculate the scroll progress within the section
            let progress = 0;
            if (scrollPosition >= projectsTop && scrollPosition <= maxScroll) {
                progress = Math.min(Math.max(0, (scrollPosition - projectsTop) / (maxScroll - projectsTop)), 1);
            } else if (scrollPosition < projectsTop) {
                progress = 0;
            } else {
                progress = 1;
            }

            // Update the rotation angle and scroll progress state
            setScrollProgress(progress);
            setRotateAngle(progress * 360);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div id="gallery-container" data-scroll-container>
            <div className='grain'
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
            <Navbar pagename={project}/>
            <header className="project-header" data-scroll-section>
                <div className="project-header-banner">
                    <Banner bannerwords={`${projectName} , ${projectName} , ${projectName} , `}/>
                </div>
                <div className="project-header-section">
                    <div className="project-header-section-left"></div>
                    <div className="project-header-section-right">
                        <img alt='' src={process.env.PUBLIC_URL + `/images/projects/${project}/${project}.jpg`}/>
                    </div>
                </div>
            </header>
            <section className='project' ref={projectRef} data-scroll-section>
                <div className='project-inner component-grid view-width'>
                    <div id="project" className='component-grid-left cgl-left-col'>
                        <h2 className='component-grid-title'>/Overview</h2>
                        <div data-scroll data-scroll-sticky data-scroll-offset="-350, 640" data-scroll-target="#project" className='component-grid-ball'
                             style={{transform: `rotate(${rotateAngle}deg)`}}>
                            <svg className='circle-svg' width="200" height="200" viewBox="0 0 100 100" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(-90deg)'}}>
                                <circle className="fill" r="45" cx="50" cy="50"
                                        stroke-dashoffset={`${(1 - scrollProgress / 2) * 565.48}px`}
                                        stroke-dasharray="565.48px"></circle>
                                <circle className="circle" r="45" cx="50" cy="50" stroke-dashoffset="0"
                                        stroke-dasharray="565.48px"></circle>
                            </svg>
                            <p className='component-grid-ball-title'>View Live</p>
                        </div>
                    </div>
                    <div className='component-grid-right'>
                        <div className='project-inner-grid'>

                        </div>
                    </div>
                </div>
            </section>
            <Footer data-scroll-section/>
            </div>
        </>
    );
}

export default Project;
