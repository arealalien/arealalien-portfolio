import React, { useEffect } from "react";

const Footer = () => {

    useEffect(() => {
        const footerListItem = document.querySelectorAll('.footer-top-list-item');

        const handleMouseEnter = (e) => {
            e.currentTarget.querySelector(".footer-top-list-item-bar-fill").style.transform = 'translate3d(0%, 0px, 0px)';
        };

        const handleMouseLeave = (e) => {
            const barFill = e.currentTarget.querySelector(".footer-top-list-item-bar-fill");
            barFill.style.transform = 'translate3d(101%, 0px, 0px)';

            setTimeout(() => {
                barFill.style.transition = 'none';
                barFill.style.transform = 'translate3d(-101%, 0px, 0px)';
                setTimeout(() => {
                    barFill.style.transition = 'transform .75s cubic-bezier(.175, .685, .32, 1)';
                });
            }, 750);
        };

        footerListItem.forEach(item => {
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });

        // Cleanup function to remove event listeners when the component unmounts
        return () => {
            footerListItem.forEach(item => {
                item.removeEventListener("mouseenter", handleMouseEnter);
                item.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <footer className='footer'>
            <div className='footer-top'>
                <ul className='footer-top-list'>
                    <li className='footer-top-list-item'>
                        <p className='footer-top-list-item-text'>Home</p>
                        <div className='footer-top-list-item-bar'>
                            <div className='footer-top-list-item-bar-fill'></div>
                        </div>
                    </li>
                    <li className='footer-top-list-item'>
                        <p className='footer-top-list-item-text'>Projects</p>
                        <div className='footer-top-list-item-bar'>
                            <div className='footer-top-list-item-bar-fill'></div>
                        </div>
                    </li>
                    <li className='footer-top-list-item'>
                        <p className='footer-top-list-item-text'>Gallery</p>
                        <div className='footer-top-list-item-bar'>
                            <div className='footer-top-list-item-bar-fill'></div>
                        </div>
                    </li>
                    <li className='footer-top-list-item'>
                        <p className='footer-top-list-item-text'>CV</p>
                        <div className='footer-top-list-item-bar'>
                            <div className='footer-top-list-item-bar-fill'></div>
                        </div>
                    </li>
                    <li className='footer-top-list-item'>
                        <p className='footer-top-list-item-text'>About</p>
                        <div className='footer-top-list-item-bar'>
                            <div className='footer-top-list-item-bar-fill'></div>
                        </div>
                    </li>
                    <li className='footer-top-list-item'>
                        <p className='footer-top-list-item-text'>Contact</p>
                        <div className='footer-top-list-item-bar'>
                            <div className='footer-top-list-item-bar-fill'></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-inner view-width'>
                    <div className='footer-bottom-inner-left'>
                        <p>&copy; <span className='year'>2024</span> Areal Alien</p>
                    </div>
                    <div className='footer-bottom-inner-right'>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
