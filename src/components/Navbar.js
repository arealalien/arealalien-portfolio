import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Image from "./Image";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [menuVisible, setMenuVisible] = useState(false);
    const [shiftAmount, setShiftAmount] = useState(0);
    const [skewAngle, setSkewAngle] = useState(0);
    const [imageSkewAngle, setImageSkewAngle] = useState(0);
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [pinOpacity, setPinOpacity] = useState(0);
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const [hoveredItem, setHoveredItem] = useState(null);

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

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX;
        const menuCenterX = rect.left + rect.width / 2;
        const distanceFromCenter = mouseX - menuCenterX;
        const maxShift = 500;

        const shiftAmount = (distanceFromCenter / menuCenterX) * maxShift * -1; // Reversed direction
        setShiftAmount(shiftAmount);

        const maxSkewAngle = 80;
        const skewFactor = 0.5;
        const skew = distanceFromCenter / rect.width * maxSkewAngle * skewFactor * -1; // Reversed direction
        setSkewAngle(skew);

        const maxImageSkewAngle = 80;
        const imageskewFactor = 0.9;
        const imageSkew = distanceFromCenter / rect.width * maxImageSkewAngle * imageskewFactor * -1; // Reversed direction
        setImageSkewAngle(imageSkew);

        const maxRotation = 20;
        const rotationFactor = 0.7;
        const rotation = distanceFromCenter / rect.width * maxRotation * rotationFactor;
        setRotation(rotation);
    }


    const handleMouseLeave = () => {
        setShiftAmount(0);
        setSkewAngle(0);
        setImageSkewAngle(0);
        setScale(1);
        setRotation(0);
    };

    const handleMouseEnterText = () => {
        setScale(1.15);
        setPinOpacity(1);
    }

    const handleMouseLeaveText = () => {
        setShiftAmount(0);
        setSkewAngle(0);
        setImageSkewAngle(0);
        setScale(1);
        setPinOpacity(0.1);
    };

    const handleMouseItemMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;

        const maxSkewAngle = 80;
        const skewFactor = 0.2;
        const skewX = deltaY / rect.height * maxSkewAngle * skewFactor;
        const skewY = deltaX / rect.width * maxSkewAngle * skewFactor;

        setButtonPosition({ x: deltaX, y: deltaY, skewX, skewY });
    };

    const handleMouseItemEnter = (itemId) => {
        setHoveredItem(itemId);
    };

    const handleMouseItemLeave = () => {
        setHoveredItem(null);
        setButtonPosition({ x: 0, y: 0 });
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
            <div className={`menu-inner ${menuVisible ? 'slide-down' : ''}`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <ul className='menu-inner-list' style={{transform: `translateX(${shiftAmount}px) skewX(${skewAngle}deg)`}} onMouseEnter={handleMouseEnterText} onMouseLeave={handleMouseLeaveText}>
                    <li className='menu-inner-list-item'
                        onMouseMove={handleMouseItemMove}
                        onMouseEnter={() => handleMouseItemEnter('image-7')}
                        onMouseLeave={handleMouseItemLeave}>
                        <div className='menu-inner-list-item-image'
                             style={{
                                 transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-7' ? "1, 1" : "0, 0"})`,
                                 opacity: hoveredItem === 'image-7' ? 1 : 0,
                                 transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                             }}
                        >
                            <Image src={process.env.PUBLIC_URL + `/images/gallery/image-7.webp`}
                                   fallback={process.env.PUBLIC_URL + `/images/gallery/image-7.jpg`}/>
                        </div>
                        <NavLink to="/" className='menu-inner-list-item-link'>Home</NavLink>
                    </li>
                    <li className='menu-inner-list-item'
                        onMouseMove={handleMouseItemMove}
                        onMouseEnter={() => handleMouseItemEnter('image-1')}
                        onMouseLeave={handleMouseItemLeave}>
                        <div className='menu-inner-list-item-image'
                             style={{
                                 transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-1' ? "1, 1" : "0, 0"})`,
                                 opacity: hoveredItem === 'image-1' ? 1 : 0,
                                 transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                             }}
                        >
                            <Image src={process.env.PUBLIC_URL + `/images/gallery/image-1.webp`}
                                   fallback={process.env.PUBLIC_URL + `/images/gallery/image-1.jpg`}/>
                        </div>
                        <NavLink to="/projects" className='menu-inner-list-item-link'>Projects</NavLink>
                    </li>
                    <li className='menu-inner-list-item'
                        onMouseMove={handleMouseItemMove}
                        onMouseEnter={() => handleMouseItemEnter('image-27')}
                        onMouseLeave={handleMouseItemLeave}>
                        <div className='menu-inner-list-item-image'
                             style={{
                                 transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-27' ? "1, 1" : "0, 0"})`,
                                 opacity: hoveredItem === 'image-27' ? 1 : 0,
                                 transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                             }}
                        >
                            <Image src={process.env.PUBLIC_URL + `/images/gallery/image-27.webp`}
                                   fallback={process.env.PUBLIC_URL + `/images/gallery/image-27.jpg`}/>
                        </div>
                        <NavLink to="/gallery" className='menu-inner-list-item-link'>Gallery</NavLink>
                    </li>
                    <li className='menu-inner-list-item'
                        onMouseMove={handleMouseItemMove}
                        onMouseEnter={() => handleMouseItemEnter('image-12')}
                        onMouseLeave={handleMouseItemLeave}>
                        <div className='menu-inner-list-item-image'
                             style={{
                                 transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-12' ? "1, 1" : "0, 0"})`,
                                 opacity: hoveredItem === 'image-12' ? 1 : 0,
                                 transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                             }}
                        >
                            <Image src={process.env.PUBLIC_URL + `/images/gallery/image-12.webp`}
                                   fallback={process.env.PUBLIC_URL + `/images/gallery/image-12.jpg`}/>
                        </div>
                        <NavLink to="/about" className='menu-inner-list-item-link'>About</NavLink>
                    </li>
                    <li className='menu-inner-list-item'
                        onMouseMove={handleMouseItemMove}
                        onMouseEnter={() => handleMouseItemEnter('image-20')}
                        onMouseLeave={handleMouseItemLeave}>
                        <div className='menu-inner-list-item-image'
                             style={{
                                 transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) skew(${buttonPosition.skewX}deg, ${buttonPosition.skewY}deg) scale(${hoveredItem === 'image-20' ? "1, 1" : "0, 0"})`,
                                 opacity: hoveredItem === 'image-20' ? 1 : 0,
                                 transition: 'transform 1s cubic-bezier(.175, .685, .32, 1), opacity .3s cubic-bezier(.175, .285, .32, 1), width .2s cubic-bezier(.175, .285, .32, 1)'
                             }}
                        >
                            <Image src={process.env.PUBLIC_URL + `/images/gallery/image-20.webp`}
                                   fallback={process.env.PUBLIC_URL + `/images/gallery/image-20.jpg`}/>
                        </div>
                        <NavLink to="/contact" className='menu-inner-list-item-link'>Contact</NavLink>
                    </li>
                </ul>
                <div className='menu-inner-center'
                     style={{transform: `scale(${scale}) rotate(${rotation}deg) skewX(${imageSkewAngle}deg)`}}>
                    <div className='menu-inner-center-pin' style={{opacity: pinOpacity}}></div>
                </div>
            </div>
        </div>
    </motion.div>
    );
};

export default Navbar;
