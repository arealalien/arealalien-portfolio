import React from "react";

const Gallery = () => {
    return (
        <>
            <section className='gallery'>
                <div className='gallery-inner component-grid'>
                    <div className='component-grid-left view-width'>
                        <div className='gallery-inner-left'>
                            <h2 className='component-grid-title'>/Gallery</h2>
                        </div>
                    </div>
                    <div className='component-grid-right view-width'>
                        <div className='gallery-inner-showcase'>
                            <div className='gallery-inner-showcase-item'>
                                <img className='gallery-inner-showcase-item-background'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-6.jpg`}/>
                            </div>
                            <div className='gallery-inner-showcase-item'>
                                <img className='gallery-inner-showcase-item-background'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-8.jpg`}/>
                            </div>
                            <div className='gallery-inner-showcase-item'>
                                <img className='gallery-inner-showcase-item-background'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-2.jpg`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
