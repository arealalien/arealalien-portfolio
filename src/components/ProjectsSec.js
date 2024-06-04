import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Projects = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [rotateAngle, setRotateAngle] = useState(0);
    const projectsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!projectsRef.current) return;
            const projectsTop = projectsRef.current.offsetTop; // Get the top offset of the projects section
            const projectsHeight = projectsRef.current.offsetHeight;
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

    return (
        <>
            <section className='projects' ref={projectsRef} data-scroll-section>
                <div className='projects-inner component-grid view-width'>
                    <div id="projects" className='component-grid-left cgl-left-col'>
                        <h2 className='component-grid-title'>/Projects</h2>
                        <div data-scroll data-scroll-sticky data-scroll-offset="-350, 640" data-scroll-target="#projects" className='component-grid-ball'
                             style={{transform: `rotate(${rotateAngle}deg)`}}>
                            <svg className='circle-svg' width="200" height="200" viewBox="0 0 100 100" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(-90deg)'}}>
                                <circle className="fill" r="45" cx="50" cy="50"
                                        stroke-dashoffset={`${(1 - scrollProgress / 2) * 565.48}px`}
                                        stroke-dasharray="565.48px"></circle>
                                <circle className="circle" r="45" cx="50" cy="50" stroke-dashoffset="0"
                                        stroke-dasharray="565.48px"></circle>
                            </svg>
                            <p className='component-grid-ball-title'>View All</p>
                        </div>
                    </div>
                    <div className='component-grid-right'>
                        <div className='projects-inner-grid'>

                            <div className='projects-inner-grid-item pigif'>
                                <div className='projects-inner-grid-item-image'>
                                    <img alt='' src={process.env.PUBLIC_URL + `/images/projects/xcraft/xcraft.jpg`}/>
                                </div>
                                <div className='projects-inner-grid-item-info'>
                                    <p className='projects-inner-grid-item-info-tag'>Website / Game Server</p>
                                    <div className='projects-inner-grid-item-info-bottom'>
                                        <h3 className='projects-inner-grid-item-info-bottom-title'>xCraft</h3>
                                        <NavLink to="projects/xcraft"
                                                 className='projects-inner-grid-item-info-bottom-button'>Learn
                                            more</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className='projects-inner-grid-item pigil'>
                                <div className='projects-inner-grid-item-info'>
                                    <p className='projects-inner-grid-item-info-tag'>Website</p>
                                    <div className='projects-inner-grid-item-info-bottom'>
                                        <h3 className='projects-inner-grid-item-info-bottom-title'>YME - Fashion and
                                            Streetwear</h3>
                                        <NavLink to="projects/yme"
                                                 className='projects-inner-grid-item-info-bottom-button'>Learn
                                            more</NavLink>
                                    </div>
                                </div>
                                <div className='projects-inner-grid-item-image'>
                                    <img alt='' src={process.env.PUBLIC_URL + `/images/projects/yme/yme.jpg`}/>
                                </div>
                            </div>
                            <div className='projects-inner-grid-item pigif'>
                                <div className='projects-inner-grid-item-image'>
                                    <img alt='' src={process.env.PUBLIC_URL + `/images/projects/gg/gg.jpg`}/>
                                </div>
                                <div className='projects-inner-grid-item-info'>
                                    <p className='projects-inner-grid-item-info-tag'>Logo / Poster</p>
                                    <div className='projects-inner-grid-item-info-bottom'>
                                        <h3 className='projects-inner-grid-item-info-bottom-title'>Lanmine 36 - Grøss og
                                            Gru</h3>
                                        <NavLink to="projects/gg"
                                                 className='projects-inner-grid-item-info-bottom-button'>Learn
                                            more</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className='projects-inner-grid-item pigil'>
                                <div className='projects-inner-grid-item-info'>
                                    <p className='projects-inner-grid-item-info-tag'>3D Model</p>
                                    <div className='projects-inner-grid-item-info-bottom'>
                                        <h3 className='projects-inner-grid-item-info-bottom-title'>Porsche</h3>
                                        <NavLink to="projects/porsche"
                                                 className='projects-inner-grid-item-info-bottom-button'>Learn
                                            more</NavLink>
                                    </div>
                                </div>
                                <div className='projects-inner-grid-item-image'>
                                    <img alt=''
                                         src={process.env.PUBLIC_URL + `/images/projects/porsche/porsche.jpg`}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
