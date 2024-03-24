import React, { useState, useEffect } from "react";

const About = () => {
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1220);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMouseMove = (event) => {
        if (isHovering) {
            const rect = event.currentTarget.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = event.clientX - centerX;
            const deltaY = event.clientY - centerY;
            setButtonPosition({ x: deltaX, y: deltaY });
        }
    };

    const handleMouseEnter = (event) => {
        setIsHovering(true);
        handleMouseMove(event);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setButtonPosition({ x: 0, y: 0 });
    };

    return (
        <>
            <section className='about'>
                <div className='about-inner component-grid view-width'>
                    <div className='component-grid-left cgl-space-bet'>
                        <div className='about-inner-left'>
                            <h2 className='component-grid-title'>/About Me</h2>
                            <h3 className='about-inner-left-title'>I craft engaging digital experiences that drive
                                results</h3>
                            <button className='about-inner-left-button'>Learn More</button>
                        </div>
                    </div>
                    <div
                        className="component-grid-right"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{textAlign: isSmallScreen ? "center" : "left"}}
                    >
                        <div
                            className="about-inner-video-button"
                            style={{
                                left: isHovering || isSmallScreen ? "auto" : "-7.5em",
                                transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
                                transition: "transform 0.35s cubic-bezier(.175, .685, .32, 0.94)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                                data-reactroot=""
                            >
                                <path
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="1.5"
                                    stroke="#ffffff"
                                    fill="none"
                                    d="M18 12L6 5V19L18 12Z"
                                />
                            </svg>
                        </div>
                        <div className='about-inner-video' onMouseMove={handleMouseMove}>
                            <div className='about-inner-video-overlay'></div>
                            <video className='about-inner-video-content' autoPlay muted loop>
                                <source src={process.env.PUBLIC_URL + `/videos/about.webm`} type='video/webm'/>
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
