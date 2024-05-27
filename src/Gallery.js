import React from 'react';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './css/main.css';
import useLocoScrollG from "./components/useLocoScrollG";

// Components
import Navbar from "./components/Navbar";
import GalleryItem from "./components/GalleryItem";
import GallerySec from "./components/GallerySec";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function Gallery() {
    const [loading] = useState(true);

    useLocoScrollG(!loading);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const galleryPhotos = queryParams.get("photos");

    if (galleryPhotos === "Olympus" || galleryPhotos === "Spring Portraits" || galleryPhotos === "Butterfly" || galleryPhotos === "Animals" || galleryPhotos === "Winter" || galleryPhotos === "Summer Portraits" || galleryPhotos === "Cyprus Vol 1" || galleryPhotos === "Cyprus Vol 2") {

        const galleryPhotosTitle = galleryPhotos.replace(/ /g, " ");

        return (
            <>
            <div id="gallery-container" data-scroll-container>
                <div className='grain'
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
                <Navbar/>
                <header className="gallery-header gbanner-2-s" data-scroll-section>
                    <div className="gallery-header-banner-2-title">
                        <h3>{galleryPhotosTitle}</h3>
                    </div>
                    <div className="gallery-header-banner-2">
                        <div className="gallery-header-banner-2-wrapper view-width">
                            <img className="gallery-header-banner-2-image-cutout" alt=''
                                 src={process.env.PUBLIC_URL + `/images/gallery/${galleryPhotos}/header/cutout.png`}/>
                            <img className="gallery-header-banner-2-image" alt=''
                                 src={process.env.PUBLIC_URL + `/images/gallery/${galleryPhotos}/header/header.jpg`}/>
                        </div>
                    </div>
                </header>
                <GalleryItem photos={galleryPhotos} data-scroll-section></GalleryItem>
                <GallerySec data-scroll-section/>
                <Footer data-scroll-section/>
            </div>
            </>
        );
    } else {
        return (
            <>
                <div id="gallery-container" data-scroll-container>
                <div className='grain'
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
                <Navbar/>
                <header className="gallery-header" data-scroll-section>
                    <div className="gallery-header-banner">
                        <Banner bannerwords="Gallery , Gallery , Gallery , "/>
                        <div className="gallery-header-banner-wrapper">
                            <img className="gallery-header-banner-image-cutout" alt=''
                                 src={process.env.PUBLIC_URL + `/images/gallery/Cyprus%20Vol%201/image-2.jpg`}/>
                            <img className="gallery-header-banner-image" alt=''
                                 src={process.env.PUBLIC_URL + `/images/gallery/Cyprus%20Vol%201/image-2.jpg`}/>
                        </div>
                    </div>
                </header>
                <GallerySec data-scroll-section/>
                <Footer data-scroll-section/>
                </div>
            </>
        );
    }
}

export default Gallery;
