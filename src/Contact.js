import React from 'react';
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import ContactSec from "./components/ContactSec";
import Footer from "./components/Footer";

function Contact() {
    return (
        <>
            <Navbar pagename="Contact" />
            <header>

            </header>
            <ContactSec />
            <Footer />
        </>
    );
}

export default Contact;
