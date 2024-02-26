import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
};

const letterAni = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: [0.175, 0.285, 0.32, 0.9],
            duration: 1,
        },
    },
};

const Banner = () => {
    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPlayMarquee(true);
        }, 2000);
    }, []);
    return (
        <motion.div className='banner' variants={banner}>
            <BannerRowTop title={"Designer · Developer · Photographer"} playMarquee={playMarquee} />
            <BannerRowBottom title={"Designer · Developer · Photographer"} playMarquee={playMarquee} />
        </motion.div>
    );
};

const AnimatedLetters = ({ title, disabled }) => (
    <motion.span
        className='row-title'
        variants={disabled ? null : banner}
        initial='initial'
        animate='animate'>
        {[...title].map((letter) => (
            <motion.span
                className='row-letter'
                variants={disabled ? null : letterAni}>
                {letter}
            </motion.span>
        ))}
    </motion.span>
);

const BannerRowTop = ({ title, playMarquee }) => {
    return (
        <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
            <motion.div
                initial={{ y: 310 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.175, 0.285, 0.32, 0.9], duration: 1 }}
                className='marquee__inner'>
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
            </motion.div>
        </div>
    );
};

const BannerRowBottom = ({ title, playMarquee }) => {
    return (
        <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
            <motion.div
                initial={{ y: 310 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.175, 0.285, 0.32, 0.9], duration: 1 }}
                className='marquee__inner'>
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
            </motion.div>
        </div>
    );
};

export default Banner;
