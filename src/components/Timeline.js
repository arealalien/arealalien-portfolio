import React, { useState, useEffect, useRef } from "react";

import Image from "./Image";

const Timeline = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [rotateAngle, setRotateAngle] = useState(0);
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const [hoveredItem, setHoveredItem] = useState(null);
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

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;

        const maxSkewAngle = 80;
        const skewFactor = 0.2;
        const skewX = deltaY / rect.height * maxSkewAngle * skewFactor;
        const skewY = deltaX / rect.width * maxSkewAngle * skewFactor;

        setButtonPosition({ x: deltaX, y: deltaY, skewX, skewY });
    };

    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
        setButtonPosition({ x: 0, y: 0 });
    };

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
                                    stroke-dashoffset={`${(1 - scrollProgress / 2) * 565.48}px`}
                                    stroke-dasharray="565.48px"></circle>
                            <circle className="circle" r="45" cx="50" cy="50" stroke-dashoffset="0"
                                    stroke-dasharray="565.48px"></circle>
                        </svg>
                        <p className='component-grid-ball-title'>View All</p>
                    </div>
                </div>
                <div className='component-grid-right'>
                    <div className='timeline-inner-grid'>

                        <div className='timeline-inner-grid-item'
                             onMouseMove={handleMouseMove}
                             onMouseEnter={() => handleMouseEnter('image-12')}
                             onMouseLeave={handleMouseLeave}>
                            <div className='timeline-inner-grid-item-content'>
                                <div className='timeline-inner-grid-item-content-image'
                                     style={{
                                         transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-12' ? "1, 1" : "0, 0"})`,
                                         opacity: hoveredItem === 'image-12' ? 1 : 0,
                                         transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                                     }}
                                >
                                    <Image src={process.env.PUBLIC_URL + `/images/gallery/image-12.webp`} fallback={process.env.PUBLIC_URL + `/images/gallery/image-12.jpg`} />
                                </div>
                                <p className='timeline-inner-grid-item-content-date'>2024.03.07</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This is a title<span className="outer" aria-hidden="true"><span className="inner">This is a title</span></span></h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'
                             onMouseMove={handleMouseMove}
                             onMouseEnter={() => handleMouseEnter('image-1')}
                             onMouseLeave={handleMouseLeave}>
                            <div className='timeline-inner-grid-item-content'>
                                <div className='timeline-inner-grid-item-content-image'
                                     style={{
                                         transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-1' ? "1, 1" : "0, 0"})`,
                                         opacity: hoveredItem === 'image-1' ? 1 : 0,
                                         transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                                     }}
                                >
                                    <Image src={process.env.PUBLIC_URL + `/images/gallery/image-1.webp`} fallback={process.env.PUBLIC_URL + `/images/gallery/image-1.jpg`} />
                                </div>
                                <p className='timeline-inner-grid-item-content-date'>2024.01.24</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This is a longer title<span className="outer" aria-hidden="true"><span className="inner">This is a longer title</span></span></h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'
                             onMouseMove={handleMouseMove}
                             onMouseEnter={() => handleMouseEnter('image-20')}
                             onMouseLeave={handleMouseLeave}>
                            <div className='timeline-inner-grid-item-content'>
                                <div className='timeline-inner-grid-item-content-image'
                                     style={{
                                         transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-20' ? "1, 1" : "0, 0"})`,
                                         opacity: hoveredItem === 'image-20' ? 1 : 0,
                                         transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                                     }}
                                >
                                    <Image src={process.env.PUBLIC_URL + `/images/gallery/image-20.webp`} fallback={process.env.PUBLIC_URL + `/images/gallery/image-20.jpg`} />
                                </div>
                                <p className='timeline-inner-grid-item-content-date'>2023.11.15</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This is a much, much longer title<span className="outer" aria-hidden="true"><span className="inner">This is a much, much longer title</span></span></h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'
                             onMouseMove={handleMouseMove}
                             onMouseEnter={() => handleMouseEnter('image-28')}
                             onMouseLeave={handleMouseLeave}>
                            <div className='timeline-inner-grid-item-content'>
                                <div className='timeline-inner-grid-item-content-image'
                                     style={{
                                         transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-28' ? "1, 1" : "0, 0"})`,
                                         opacity: hoveredItem === 'image-28' ? 1 : 0,
                                         transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                                     }}
                                >
                                    <Image src={process.env.PUBLIC_URL + `/images/gallery/image-28.webp`} fallback={process.env.PUBLIC_URL + `/images/gallery/image-28.jpg`}/>
                                </div>
                                <p className='timeline-inner-grid-item-content-date'>2023.10.28</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This title is really quite long<span className="outer" aria-hidden="true"><span className="inner">This title is really quite long</span></span></h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'
                             onMouseMove={handleMouseMove}
                             onMouseEnter={() => handleMouseEnter('image-15')}
                             onMouseLeave={handleMouseLeave}>
                            <div className='timeline-inner-grid-item-content'>
                                <div className='timeline-inner-grid-item-content-image'
                                     style={{
                                         transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-15' ? "1, 1" : "0, 0"})`,
                                         opacity: hoveredItem === 'image-15' ? 1 : 0,
                                         transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                                     }}
                                >
                                    <Image src={process.env.PUBLIC_URL + `/images/gallery/image-15.webp`} fallback={process.env.PUBLIC_URL + `/images/gallery/image-15.jpg`} />
                                </div>
                                <p className='timeline-inner-grid-item-content-date'>2023.03.07</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This is a title<span className="outer" aria-hidden="true"><span className="inner">This is a title</span></span></h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'
                             onMouseMove={handleMouseMove}
                             onMouseEnter={() => handleMouseEnter('image-22')}
                             onMouseLeave={handleMouseLeave}>
                            <div className='timeline-inner-grid-item-content'>
                                <div className='timeline-inner-grid-item-content-image'
                                     style={{
                                         transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-22' ? "1, 1" : "0, 0"})`,
                                         opacity: hoveredItem === 'image-22' ? 1 : 0,
                                         transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                                     }}
                                >
                                    <Image src={process.env.PUBLIC_URL + `/images/gallery/image-22.webp`} fallback={process.env.PUBLIC_URL + `/images/gallery/image-22.jpg`} />
                                </div>
                                <p className='timeline-inner-grid-item-content-date'>2023.01.24</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This is a longer title<span className="outer" aria-hidden="true"><span className="inner">This is a longer title</span></span></h3>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-inner-grid-item'
                             onMouseMove={handleMouseMove}
                             onMouseEnter={() => handleMouseEnter('image-27')}
                             onMouseLeave={handleMouseLeave}>
                            <div className='timeline-inner-grid-item-content'>
                                <div className='timeline-inner-grid-item-content-image'
                                     style={{
                                         transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-27' ? "1, 1" : "0, 0"})`,
                                         opacity: hoveredItem === 'image-27' ? 1 : 0,
                                         transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                                     }}
                                >
                                    <Image src={process.env.PUBLIC_URL + `/images/gallery/image-27.webp`} fallback={process.env.PUBLIC_URL + `/images/gallery/image-27.jpg`} />
                                </div>
                                <p className='timeline-inner-grid-item-content-date'>2022.11.15</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This is a much, much longer title<span className="outer" aria-hidden="true"><span className="inner">This is a much, much longer title</span></span></h3>
                            </div>
                        </div>
                    </div>
                    <div className='timeline-inner-grid-item'
                         onMouseMove={handleMouseMove}
                             onMouseEnter={() => handleMouseEnter('image-17')}
                             onMouseLeave={handleMouseLeave}>
                            <div className='timeline-inner-grid-item-content'>
                                <div className='timeline-inner-grid-item-content-image'
                                     style={{
                                         transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-17' ? "1, 1" : "0, 0"})`,
                                         opacity: hoveredItem === 'image-17' ? 1 : 0,
                                         transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                                     }}
                                >
                                    <Image src={process.env.PUBLIC_URL + `/images/gallery/image-17.webp`} fallback={process.env.PUBLIC_URL + `/images/gallery/image-17.jpg`} />
                                </div>
                                <p className='timeline-inner-grid-item-content-date'>2022.10.28</p>
                                <div className='timeline-inner-grid-item-content-divider'></div>
                                <div className='timeline-inner-grid-item-content-title'>
                                    <h3 className='timeline-inner-grid-item-content-title-text'>This title is really quite long<span className="outer" aria-hidden="true"><span className="inner">This title is really quite long</span></span></h3>
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
