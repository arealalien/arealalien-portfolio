import React from "react";

const Gallery = () => {
    return (
        <section className='gallery'>
            <div className='gallery-inner component-grid view-width'>
                <div className='component-grid-left'>
                    <div className='gallery-inner-left'>
                        <h2 className='component-grid-title'>/Gallery</h2>
                    </div>
                </div>
                <div className='component-grid-right'>
                    <div className='gallery-inner-showcase'>
                        <div className='gallery-inner-showcase-item'>
                            <img className='gallery-inner-showcase-item-background gis-wide'
                                 src={process.env.PUBLIC_URL + `/images/gallery/image-20.jpg`}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
