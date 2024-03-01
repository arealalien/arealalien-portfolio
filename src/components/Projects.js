import React from "react";

const Projects = () => {
    return (
        <section className='projects'>
            <div className='projects-inner component-grid view-width'>
                <div className='component-grid-left'>
                    <h2 className='component-grid-title'>/Projects</h2>
                </div>
                <div className='component-grid-right'>
                    <div className='projects-inner-grid'>

                        <div className='projects-inner-grid-item pigif'>
                            <div className='projects-inner-grid-item-image'>
                                <img alt='' src={process.env.PUBLIC_URL + `/images/image-1.jpg`}/>
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
                                <img alt='' src={process.env.PUBLIC_URL + `/images/image-4.jpg`}/>
                            </div>
                        </div>
                        <div className='projects-inner-grid-item pigif'>
                            <div className='projects-inner-grid-item-image'>
                                <img alt='' src={process.env.PUBLIC_URL + `/images/image-5.jpg`}/>
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
                                <img alt='' src={process.env.PUBLIC_URL + `/images/image-3.jpg`}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
