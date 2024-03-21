import React from 'react';
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import BlogSec from "./components/BlogSec";
import Footer from "./components/Footer";

function Blog() {
    return (
        <>
            <div className='grain'
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)`}}></div>
            <Navbar pagename="Contact"/>
            <header>

            </header>
            <BlogSec/>
            <Footer/>
        </>
    );
}

export default Blog;
