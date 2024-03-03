import React from "react";

const About = () => {
    return (
        <section className='about'>
            <div className='about-inner component-grid view-width'>
                <div className='component-grid-left'>
                    <div className='about-inner-left'>
                        <h2 className='component-grid-title'>/About Me</h2>
                        <h3 className='about-inner-left-title'>I craft engaging digital experiences that drive results</h3>
                        <button className='about-inner-left-button'>Learn More</button>
                    </div>
                </div>
                <div className='component-grid-right'>
                    <div className='about-inner-video-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" data-reactroot="">
                            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#ffffff"
                                  fill="none" d="M18 12L6 5V19L18 12Z"/>
                        </svg>
                    </div>
                    <div className='about-inner-video'>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
