import React, {useState} from 'react';
import { useEffect } from "react";
import './css/main.css';
import LocomotiveScroll from "locomotive-scroll";

// Components
import Navbar from "./components/Navbar";
import BlogSec from "./components/BlogSec";
import Footer from "./components/Footer";

function Blog() {
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
            <header data-scroll-section>

            </header>
            <BlogSec data-scroll-section/>
            <Footer data-scroll-section/>
            </div>
        </>
    );
}

export default Blog;
