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
            <div className='footer-center'>
                <div className='footer-center-social-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 50 50" width="50px"
                         height="50px">
                        <path
                            d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                    </svg>
                </div>
                <div className='footer-center-social-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 50 50" width="50px"
                         height="50px">
                        <path
                            d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                    </svg>
                </div>
                <div className='footer-center-social-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 50 50" width="50px"
                         height="50px">
                        <path
                            d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                    </svg>
                </div>
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
