import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

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
        <footer className='footer' data-scroll-section>
            <div className='footer-top'>
                <div className='footer-top-inner'>
                    <ul className='footer-top-list'>
                        <NavLink to="/" className='footer-top-list-item'>
                            <p className='footer-top-list-item-text'>Home</p>
                            <div className='footer-top-list-item-bar'>
                                <div className='footer-top-list-item-bar-fill'></div>
                            </div>
                        </NavLink>
                        <NavLink to="/projects" className='footer-top-list-item'>
                            <p className='footer-top-list-item-text'>Projects</p>
                            <div className='footer-top-list-item-bar'>
                                <div className='footer-top-list-item-bar-fill'></div>
                            </div>
                        </NavLink>
                        <NavLink to="/gallery" className='footer-top-list-item'>
                            <p className='footer-top-list-item-text'>Gallery</p>
                            <div className='footer-top-list-item-bar'>
                                <div className='footer-top-list-item-bar-fill'></div>
                            </div>
                        </NavLink>
                        <NavLink to="/blog" className='footer-top-list-item'>
                            <p className='footer-top-list-item-text'>Blog</p>
                            <div className='footer-top-list-item-bar'>
                                <div className='footer-top-list-item-bar-fill'></div>
                            </div>
                        </NavLink>
                        <NavLink to="/about" className='footer-top-list-item'>
                            <p className='footer-top-list-item-text'>About</p>
                            <div className='footer-top-list-item-bar'>
                                <div className='footer-top-list-item-bar-fill'></div>
                            </div>
                        </NavLink>
                        <NavLink to="/contact" className='footer-top-list-item'>
                            <p className='footer-top-list-item-text'>Contact</p>
                            <div className='footer-top-list-item-bar'>
                                <div className='footer-top-list-item-bar-fill'></div>
                            </div>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className='footer-center'>
                <Link to="https://www.instagram.com/areal_alien/" target="_blank" rel="noopener noreferrer" className='footer-center-social-icon'>
                    <svg id='instagram' xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 50 50"
                         width="50px"
                         height="50px">
                        <path
                            d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                    </svg>
                </Link>
                <Link to="https://www.linkedin.com/in/arealalien/" target="_blank" rel="noopener noreferrer" className='footer-center-social-icon'>
                    <svg id='linkedin' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 27">
                        <path
                            d="M5.78 4.04c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm8.482 0h-5.968v16h5.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h5.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                    </svg>
                </Link>
                <Link to="https://github.com/arealalien" target="_blank" rel="noopener noreferrer" className='footer-center-social-icon'>
                    <svg id='github' xmlns="http://www.w3.org/2000/svg" width="98" height="96" viewBox="0 0 98 96">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        />
                    </svg>
                </Link>
                <Link to="https://www.twitter.com/Areal_Alien" target="_blank" rel="noopener noreferrer" className='footer-center-social-icon'>
                    <svg id='twitter' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px"
                         height="50px">
                        <path
                            d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"/>
                    </svg>
                </Link>
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
