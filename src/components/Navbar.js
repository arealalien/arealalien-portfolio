import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navbarBackgroundColor = `hsla(216, 19%, 11%, ${scrollPosition / 600})`;

    const toggleMenu = () => {
        setMenuVisible(prevState => !prevState);
    };

    return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='navbar'>
      <nav className='navbar-inner view-width' style={{ backgroundColor: navbarBackgroundColor }}>
        <div className='navbar-inner-left'>
          <button className='navbar-inner-left-button'>My reel</button>
        </div>
        <div className='navbar-inner-center'>
          <div className='navbar-inner-center-logo'>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 1438.88 1819.54">
              <title>icon-white</title>
              <polygon className="cls-1"
                       points="111.98 1586.26 0 1819.54 1020.91 1250.57 1126.35 948.08 111.98 1586.26"/>
              <polygon className="cls-1" points="183.51 1384.12 510.41 1178.46 925.79 318.48 830.56 0 183.51 1384.12"/>
              <polygon className="cls-1"
                       points="1126.35 948.08 1020.91 1250.57 1123.78 1471.02 1438.88 1663.28 1126.35 948.08"/>
              <polygon className="cls-1" points="783.64 1663.28 1123.78 1471.02 1438.88 1663.28 783.64 1663.28"/>
              <path className="cls-1" d="M392.54,1676.49" transform="translate(-280.56 -90.23)"/>
            </svg>
          </div>
        </div>
          <div className='navbar-inner-right'>
              <p className='navbar-inner-right-title'>Home</p>
              <div className='navbar-inner-right-line'></div>
              <div className='navbar-inner-right-burger'>
                  <svg className='navbar-inner-right-burger-button' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" onClick={toggleMenu}>
                      <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                          <animate dur=".5s" attributeName="d"
                                   values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                                   fill="freeze" begin="start.begin" calcMode="spline" keySplines=".175, .685, .32 1"/>
                          <animate dur=".5s" attributeName="d"
                                   values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                                   fill="freeze" begin="reverse.begin" calcMode="spline" keySplines=".175, .685, .32 1"/>
                      </path>
                      <rect width="10" height="10" stroke="none">
                          <animate dur="2s" id="reverse" attributeName="width" begin="click"/>
                      </rect>
                      <rect width="10" height="10" stroke="none">
                          <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze"
                                   begin="click"/>
                          <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze"
                                   begin="reverse.begin"/>
                      </rect>
                  </svg>
              </div>
          </div>
      </nav>
        <div className='menu' style={{ pointerEvents: menuVisible ? "auto" : "none" }}>
            <div className={`menu-inner ${menuVisible ? 'slide-down' : ''}`}></div>
        </div>
    </motion.div>
    );
};

export default Navbar;
