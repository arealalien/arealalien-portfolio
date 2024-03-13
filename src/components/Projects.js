import React, { useState, useEffect, useRef } from "react";

const Projects = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [rotateAngle, setRotateAngle] = useState(0);
    const projectsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!projectsRef.current) return;
            const projectsTop = projectsRef.current.getBoundingClientRect().top;
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
        <section className='projects' ref={projectsRef}>
            <div className='projects-inner component-grid view-width'>
                <div className='component-grid-left cgl-left-col'>
                    <h2 className='component-grid-title'>/Projects</h2>
                    <div className='component-grid-ball'
                         style={{transform: `rotate(${rotateAngle}deg)`}}>
                        <svg className="circle-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle className="circle" cx="50" cy="50" r="45"/>
                            <circle className="fill" cx="50" cy="50" r="45"
                                    style={{
                                        strokeDasharray: `${scrollProgress * 100} 100`,
                                        transition: "stroke-dasharray 0.3s ease"
                                    }}/>
                        </svg>
                        <p className='component-grid-ball-title'>View All</p>
                    </div>
                </div>
                <div className='component-grid-right'>
                    <div className='projects-inner-grid'>

                        <div className='projects-inner-grid-item pigif'>
                            <div className='projects-inner-grid-item-image'>
                                <img alt='' src={process.env.PUBLIC_URL + `/images/gallery/image-1.jpg`}/>
                            </div>
                            <div className='projects-inner-grid-item-info'>
                                <p className='projects-inner-grid-item-info-tag'>Website</p>
                                <div className='projects-inner-grid-item-info-bottom'>
                                    <h3 className='projects-inner-grid-item-info-bottom-title'>Project Name</h3>
                                    <button className='projects-inner-grid-item-info-bottom-button'>Learn more</button>
                                </div>
                            </div>
                        </div>
                        <div className='projects-inner-grid-item pigil'>
                            <div className='projects-inner-grid-item-info'>
                                <p className='projects-inner-grid-item-info-tag'>Website</p>
                                <div className='projects-inner-grid-item-info-bottom'>
                                    <h3 className='projects-inner-grid-item-info-bottom-title'>A Much Longer Project
                                        Name</h3>
                                    <button className='projects-inner-grid-item-info-bottom-button'>Learn more</button>
                                </div>
                            </div>
                            <div className='projects-inner-grid-item-image'>
                                <img alt='' src={process.env.PUBLIC_URL + `/images/gallery/image-12.jpg`}/>
                            </div>
                        </div>
                        <div className='projects-inner-grid-item pigif'>
                            <div className='projects-inner-grid-item-image'>
                                <img alt='' src={process.env.PUBLIC_URL + `/images/gallery/image-20.jpg`}/>
                            </div>
                            <div className='projects-inner-grid-item-info'>
                                <p className='projects-inner-grid-item-info-tag'>Website</p>
                                <div className='projects-inner-grid-item-info-bottom'>
                                    <h3 className='projects-inner-grid-item-info-bottom-title'>A Much Longer Project
                                        Name</h3>
                                    <button className='projects-inner-grid-item-info-bottom-button'>Learn more</button>
                                </div>
                            </div>
                        </div>
                        <div className='projects-inner-grid-item pigil'>
                            <div className='projects-inner-grid-item-info'>
                                <p className='projects-inner-grid-item-info-tag'>Website</p>
                                <div className='projects-inner-grid-item-info-bottom'>
                                    <h3 className='projects-inner-grid-item-info-bottom-title'>A Much Longer Project
                                        Name</h3>
                                    <button className='projects-inner-grid-item-info-bottom-button'>Learn more</button>
                                </div>
                            </div>
                            <div className='projects-inner-grid-item-image'>
                                <img alt='' src={process.env.PUBLIC_URL + `/images/gallery/image-28.jpg`}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
