import React from 'react';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './css/main.css';
import useLocoScroll from "./components/useLocoScroll";

// Components
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Loader from "./components/Loader";
import ProjectsSec from "./components/ProjectsSec";
import GallerySec from "./components/GallerySec";
import TimelineSec from "./components/TimelineSec";
import IntroSec from "./components/IntroSec";
import AboutSec from "./components/AboutSec";
import ContactSec from "./components/ContactSec";
import Footer from "./components/Footer";

function Home() {
    const [loading, setLoading] = useState(true);

    useLocoScroll(!loading);

    useEffect(() => {
        loading
            ? document.querySelector("body").classList.add("loading")
            : document.querySelector("body").classList.remove("loading");
    }, [loading]);

    return (
        <div id="main-container" data-scroll-container>
            <AnimatePresence>
                <div className='grain' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
                <div className='overlay'></div>
                {loading ? (
                    <motion.div key='loader'>
                        <Loader setLoading={setLoading}/>
                    </motion.div>
                ) : (
                    <>
                        <Navbar pagename="Home"/>
                        <header data-scroll-section>
                            <Banner bannerwords="Designer , Developer , Photographer , "/>
                            {!loading && (
                                <div className='transition-image final'>
                                    <motion.img
                                        transition={{ease: [0.175, 0.285, 0.32, 0.9], duration: 1.6}}
                                        src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                                        layoutId='main-image-1'
                                    />
                                </div>
                            )}
                        </header>
                        <IntroSec data-scroll-section/>
                        <AboutSec data-scroll-section/>
                        <ProjectsSec data-scroll-section/>
                        <GallerySec data-scroll-section/>
                        <TimelineSec data-scroll-section/>
                        <ContactSec data-scroll-section/>
                        <Footer data-scroll-section/>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Home;