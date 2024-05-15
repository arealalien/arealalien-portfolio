import React from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Gallery = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        initial: "4",
        dragSpeed: ".6",
        easing: "cubic-bezier(.175, .685, .32, 1)",
        breakpoints: {
            "(min-width: 520px)": {
                slides: { perView: 2, spacing: 15 },
            },
            "(min-width: 800px)": {
                slides: { perView: 3, spacing: 15 },
            },
            "(min-width: 1400px)": {
                slides: { perView: 4, spacing: 15 },
            },
            "(min-width: 2200px)": {
                slides: { perView: 5, spacing: 15 },
            },
            "(min-width: 2600px)": {
                slides: { perView: 6, spacing: 15 },
            },
            "(min-width: 3000px)": {
                slides: { perView: 7, spacing: 15 },
            },
        },
        slides: {
            perView: 1,
            spacing: 15,
        },
    })

    return (
        <>
            <section className='gallery'>
                <div className='gallery-inner component-grid'>
                    <div className='component-grid-left view-width'>
                        <div className='gallery-inner-left'>
                            <h2 className='component-grid-title'>/Gallery</h2>
                        </div>
                    </div>
                    <div className='component-grid-right'>
                        <div className='gallery-inner-showcase'>
                            <div ref={sliderRef} className="keen-slider">
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Orange Bird</h3>
                                        <button className='gallery-inner-showcase-item-info-button'>Open Gallery
                                        </button>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-6.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Snow Bird</h3>
                                        <button className='gallery-inner-showcase-item-info-button'>Open Gallery
                                        </button>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-8.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>White Bird</h3>
                                        <button className='gallery-inner-showcase-item-info-button'>Open Gallery
                                        </button>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-15.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Snow Bird</h3>
                                        <button className='gallery-inner-showcase-item-info-button'>Open Gallery
                                        </button>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-3.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Snow Bird</h3>
                                        <button className='gallery-inner-showcase-item-info-button'>Open Gallery
                                        </button>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-28.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Snow Bird</h3>
                                        <button className='gallery-inner-showcase-item-info-button'>Open Gallery
                                        </button>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-25.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Snow Bird</h3>
                                        <button className='gallery-inner-showcase-item-info-button'>Open Gallery
                                        </button>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-1.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Snow Bird</h3>
                                        <button className='gallery-inner-showcase-item-info-button'>Open Gallery
                                        </button>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-17.jpg`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
