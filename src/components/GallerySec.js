import React from "react";
import { NavLink } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Gallery = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        initial: 0,
        dragSpeed: ".6",
        centered: true,
        easing: "cubic-bezier(.175, .685, .32, 1)",
        breakpoints: {
            "(min-width: 500px)": {
                slides: { perView: 1.2, spacing: 15 },
            },
            "(min-width: 600px)": {
                slides: { perView: 2.2, spacing: 15 },
            },
            "(min-width: 900px)": {
                slides: { perView: 2.5, spacing: 15 },
            },
            "(min-width: 1400px)": {
                slides: { perView: 3.5, spacing: 15 },
            },
            "(min-width: 2200px)": {
                slides: { perView: 5.5, spacing: 15 },
            },
            "(min-width: 2600px)": {
                slides: { perView: 6.5, spacing: 15 },
            },
            "(min-width: 3000px)": {
                slides: { perView: 7.5, spacing: 15 },
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
                                        <h3 className='gallery-inner-showcase-item-info-title'>Olympus</h3>
                                        <NavLink to={`/gallery?photos=${encodeURIComponent('Olympus')}`}
                                                 className='gallery-inner-showcase-item-info-button'>Open
                                            Gallery
                                        </NavLink>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/olympus/image-3.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Butterfly</h3>
                                        <NavLink to={`/gallery?photos=${encodeURIComponent('Butterfly')}`}
                                                 className='gallery-inner-showcase-item-info-button'>Open
                                            Gallery
                                        </NavLink>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/butterfly/image-10.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Orange Bird</h3>
                                        <NavLink to="/gallery" className='gallery-inner-showcase-item-info-button'>Open
                                            Gallery
                                        </NavLink>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-6.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Snow Bird</h3>
                                        <NavLink to="/gallery" className='gallery-inner-showcase-item-info-button'>Open
                                            Gallery
                                        </NavLink>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-8.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Animals</h3>
                                        <NavLink to="/gallery" className='gallery-inner-showcase-item-info-button'>Open
                                            Gallery
                                        </NavLink>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-15.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Summer Portraits</h3>
                                        <NavLink to="/gallery" className='gallery-inner-showcase-item-info-button'>Open
                                            Gallery
                                        </NavLink>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-3.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Lost</h3>
                                        <NavLink to="/gallery" className='gallery-inner-showcase-item-info-button'>Open
                                            Gallery
                                        </NavLink>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-28.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Spring Portraits</h3>
                                        <NavLink to={`/gallery?photos=${encodeURIComponent('spring-portraits')}`}
                                                 className='gallery-inner-showcase-item-info-button'>Open
                                            Gallery
                                        </NavLink>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-25.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Summer Vibes</h3>
                                        <NavLink to="/gallery" className='gallery-inner-showcase-item-info-button'>Open
                                            Gallery
                                        </NavLink>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-1.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Neon Portraits</h3>
                                        <NavLink to="/gallery" className='gallery-inner-showcase-item-info-button'>Open
                                            Gallery
                                        </NavLink>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-17.jpg`}/>
                                </div>
                                <div className='keen-slider__slide gallery-inner-showcase-item'>
                                    <div className='gallery-inner-showcase-item-info'>
                                        <p className='gallery-inner-showcase-item-info-date'>14.05.2024</p>
                                        <h3 className='gallery-inner-showcase-item-info-title'>Snowy Shooner</h3>
                                        <NavLink to="/gallery" className='gallery-inner-showcase-item-info-button'>Open
                                            Gallery
                                        </NavLink>
                                    </div>
                                    <img className='gallery-inner-showcase-item-background'
                                         src={process.env.PUBLIC_URL + `/images/gallery/image-24.jpg`}/>
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
