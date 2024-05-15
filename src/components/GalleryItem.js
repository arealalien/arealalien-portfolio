import React from "react";
import "keen-slider/keen-slider.min.css";

const Gallery = ({ photos }) => {

    return (
        <>
            <section className='gallery-item'>
                <div className='gallery-item-inner component-grid view-width'>
                    <div className='component-grid-left'>

                    </div>
                    <div className='component-grid-right'>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/DSCF8211-2-min.jpg`} alt='' />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
