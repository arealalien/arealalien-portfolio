import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <nav className='header-inner'>
        <div className='header-inner-left'>
          <button className='header-inner-left-button'>My reel</button>
        </div>
        <div className='header-inner-center'>
          <div className='header-inner-center-logo'>
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
        <div className='header-inner-right'>
            <p className='header-inner-right-title'>Home</p>
            <div className='header-inner-right-line'></div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Header;
