import React, {useEffect} from 'react';
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import AboutSec from "./components/AboutSec";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className='grain'
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
            <Navbar pagename="About"/>
            <header className="about-header">
                <div className="about-header-banner">
                    <Banner bannerwords={`Areal Alien , Areal Alien , Areal Alien , `}/>
                    <img alt='' src={process.env.PUBLIC_URL + `/images/me.jpg`}/>
                    <img className="about-header-blur" alt='' src={process.env.PUBLIC_URL + `/images/me.jpg`}/>
                </div>
            </header>
            <AboutSec/>
            <Footer/>
        </>
    );
}

export default About;
