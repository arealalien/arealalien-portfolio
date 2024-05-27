import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useLocoScroll = (start) => {
    useEffect(() => {
        if (!start) return;

        const scrollEl = document.querySelector('#main-container');
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            lerp: 0.03, // Adjust this value to control the "smoothness" and "damping"
            multiplier: 1.2, // Adjust this value to control the scrolling speed
            class: 'is-reveal'
        });

        return () => {
            if (locoScroll) locoScroll.destroy();
        };
    }, [start]);
};

export default useLocoScroll;