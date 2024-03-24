import React from 'react';
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import ContactSec from "./components/ContactSec";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function Contact() {
    return (
        <>
            <div className='grain'
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
            <Navbar pagename="Contact"/>
            <header className="contact-header">
                <div className="contact-header-banner">
                    <Banner bannerwords="Contact , Contact , Contact , "/>
                </div>
            </header>
            <ContactSec/>
            <Footer/>
        </>
    );
}

export default Contact;
