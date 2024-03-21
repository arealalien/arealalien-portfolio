import React from 'react';
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import GallerySec from "./components/GallerySec";
import Footer from "./components/Footer";

function Gallery() {
    return (
        <>
            <div className='grain'
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
            <Navbar/>
            <header>

            </header>
            <GallerySec/>
            <Footer/>
        </>
    );
}

export default Gallery;
