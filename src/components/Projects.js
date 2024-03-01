import React from "react";
import {motion} from "framer-motion";

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
                                <img alt='' src={process.env.PUBLIC_URL + `/images/image-1.jpg`} />
                            </div>
                            <div className='projects-inner-grid-item-info'>
                                <p>Website</p>
                            </div>
                        </div>
                        <div className='projects-inner-grid-item pigil'>
                            <div className='projects-inner-grid-item-info'>
                                <p>Website</p>
                            </div>
                            <div className='projects-inner-grid-item-image'>
                                <img alt='' src={process.env.PUBLIC_URL + `/images/image-4.jpg`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
