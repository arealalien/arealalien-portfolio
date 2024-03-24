import React from 'react';
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import GallerySec from "./components/GallerySec";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function Gallery() {
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

export default Gallery;
