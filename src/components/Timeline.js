import React, { useState, useEffect, useRef } from "react";

const Timeline = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [rotateAngle, setRotateAngle] = useState(0);
    const timelineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;
            const projectsTop = timelineRef.current.offsetTop; // Get the top offset of the projects section
            const projectsHeight = timelineRef.current.offsetHeight;
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
        <section className='timeline' ref={timelineRef}>
            <div className='timeline-inner component-grid view-width'>
                <div className='component-grid-left cgl-left-col'>
                    <h2 className='component-grid-title'>/Timeline</h2>
                    <div className='component-grid-ball'
                         style={{transform: `rotate(${rotateAngle}deg)`}}>
                        <svg className='circle-svg' width="200" height="200" viewBox="0 0 100 100" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(-90deg)'}}>
                            <circle className="fill" r="45" cx="50" cy="50"
                                    stroke-dashoffset={`${(1 - scrollProgress) * 565.48}px`}
                                    stroke-dasharray="565.48px"></circle>
                            <circle className="circle" r="45" cx="50" cy="50" stroke-dashoffset="0"
                                    stroke-dasharray="565.48px"></circle>
                        </svg>
                        <p className='component-grid-ball-title'>View All</p>
                    </div>
                </div>
                <div className='component-grid-right'>
                    <div className='timeline-inner-grid'>

                        <div className='timeline-inner-grid-item'>
                            <div className='timeline-inner-grid-item-content'>
                                <img className='timeline-inner-grid-item-content-image'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-12.jpg`}/>
                                <p className='timeline-inner-grid-item-content-date'>2024.03.07</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This is a title</h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'>
                            <div className='timeline-inner-grid-item-content'>
                                <img className='timeline-inner-grid-item-content-image'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-1.jpg`}/>
                                <p className='timeline-inner-grid-item-content-date'>2024.01.24</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This is a longer
                                        title</h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'>
                            <div className='timeline-inner-grid-item-content'>
                                <img className='timeline-inner-grid-item-content-image'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-20.jpg`}/>
                                <p className='timeline-inner-grid-item-content-date'>2023.11.15</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This is a much, much
                                        longer title</h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'>
                            <div className='timeline-inner-grid-item-content'>
                                <img className='timeline-inner-grid-item-content-image'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-28.jpg`}/>
                                <p className='timeline-inner-grid-item-content-date'>2023.10.28</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This title is really
                                        quite long</h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'>
                            <div className='timeline-inner-grid-item-content'>
                                <img className='timeline-inner-grid-item-content-image'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-12.jpg`}/>
                                <p className='timeline-inner-grid-item-content-date'>2023.03.07</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This is a title</h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'>
                            <div className='timeline-inner-grid-item-content'>
                                <img className='timeline-inner-grid-item-content-image'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-1.jpg`}/>
                                <p className='timeline-inner-grid-item-content-date'>2023.01.24</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This is a longer
                                        title</h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'>
                            <div className='timeline-inner-grid-item-content'>
                                <img className='timeline-inner-grid-item-content-image'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-20.jpg`}/>
                                <p className='timeline-inner-grid-item-content-date'>2022.11.15</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This is a much, much
                                        longer title</h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'>
                            <div className='timeline-inner-grid-item-content'>
                                <img className='timeline-inner-grid-item-content-image'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-28.jpg`}/>
                                <p className='timeline-inner-grid-item-content-date'>2022.10.28</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This title is really
                                        quite long</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
