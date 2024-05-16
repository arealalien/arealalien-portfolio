import React from "react";
import "keen-slider/keen-slider.min.css";

const Gallery = ({ photos }) => {
    return (
        <>
            <section className='gallery-item'>
                <div className='gallery-item-inner component-grid view-width'>
                    <div className='component-grid-left'>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-1.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-2.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-3.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-4.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-5.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-6.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-7.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-8.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-9.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-10.jpg`} alt=''/>
                    </div>
                    <div className='component-grid-right'>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-1.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-2.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-3.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-4.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-5.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-6.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-7.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-8.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-9.jpg`} alt=''/>
                        <img src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-10.jpg`} alt=''/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
