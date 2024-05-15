import React from 'react';
import { useLocation } from "react-router-dom";
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import GalleryItem from "./components/GalleryItem";
import GallerySec from "./components/GallerySec";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function Gallery() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const galleryPhotos = queryParams.get("photos");

    if (galleryPhotos === "Olympus") {
        return (
            <>
                <div className='grain'
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
                <Navbar/>
                <header className="gallery-header">
                    <div className="gallery-header-banner">
                        <Banner bannerwords={`${galleryPhotos}, ${galleryPhotos}, ${galleryPhotos}, `}/>
                    </div>
                </header>
                <GalleryItem photos={galleryPhotos}></GalleryItem>
                <GallerySec/>
                <Footer/>
            </>
        );
    } else {
        return (
            <>
                <div className='grain'
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
                <Navbar/>
                <header className="gallery-header">
                    <div className="gallery-header-banner">
                        <Banner bannerwords="Gallery , Gallery , Gallery , "/>
                    </div>
                </header>
                <GallerySec/>
                <Footer/>
            </>
        );
    }
}

export default Gallery;
