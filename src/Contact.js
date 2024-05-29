import React, {useEffect, useState} from 'react';
import './css/main.css';
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Components
import Navbar from "./components/Navbar";
import ContactSec from "./components/ContactSec";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function Contact() {
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
            <Navbar pagename="Contact"/>
            <header className="contact-header" data-scroll-section>
                <div className="contact-header-banner">
                    <Banner bannerwords="Contact , Contact , Contact , "/>
                </div>
            </header>
            <ContactSec data-scroll-section/>
            <Footer data-scroll-section/>
            </div>
        </>
    );
}

export default Contact;
