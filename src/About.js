import React, {useEffect, useState} from 'react';
import './css/main.css';
import LocomotiveScroll from "locomotive-scroll";

// Components
import Navbar from "./components/Navbar";
import AboutSec from "./components/AboutSec";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function About() {
    const [loading] = useState(true);

    useEffect(() => {
        if (!loading) return;

        const scrollEl = document.querySelector('#gallery-container');
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            lerp: 0.05, // Adjust this value to control the "smoothness" and "damping"
            multiplier: 1.2, // Adjust this value to control the scrolling speed
            class: 'is-reveal'
        });

        return () => {
            if (locoScroll) locoScroll.destroy();
        };
    }, [loading]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div id="gallery-container" data-scroll-container>
            <div className='grain'
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
            <Navbar pagename="About"/>
            <header className="about-header" data-scroll-section>
                <div className="about-header-banner">
                    <Banner bannerwords={`Areal Alien , Areal Alien , Areal Alien , `}/>
                    <img alt='' src={process.env.PUBLIC_URL + `/images/me.jpg`}/>
                    <img className="about-header-blur" alt='' src={process.env.PUBLIC_URL + `/images/me.jpg`}/>
                </div>
            </header>
            <AboutSec data-scroll-section/>
            <Footer data-scroll-section/>
            </div>
        </>
    );
}

export default About;
