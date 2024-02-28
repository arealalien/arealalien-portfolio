import React from 'react';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './css/main.css';

// Components
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Loader from "./components/Loader";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loading
            ? document.querySelector("body").classList.add("loading")
            : document.querySelector("body").classList.remove("loading");
    }, [loading]);

    return (
            <AnimatePresence>
                <div className='grain' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/grain/noise.gif)` }}></div>
                <div className='overlay'></div>
                {loading ? (
                    <motion.div key='loader'>
                        <Loader setLoading={setLoading} />
                    </motion.div>
                ) : (
                    <>
                        <Navbar />
                        <header>
                            <Banner />
                            {!loading && (
                                <div className='transition-image final'>
                                    <motion.img
                                        transition={{ ease: [0.175, 0.285, 0.32, 0.9], duration: 1.6 }}
                                        src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                                        layoutId='main-image-1'
                                    />
                                </div>
                            )}
                        </header>
                        <Services />
                        <Footer />
                    </>
                )}
            </AnimatePresence>
    );
}

export default App;
