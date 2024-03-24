import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.022,
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

const Banner = ({ bannerwords }) => {
    const [playMarquee, setPlayMarquee] = useState(false);
    const titleWithHTML = bannerwords.split(',').flatMap((word, index, array) => {
        const characters = [...word.trim()];
        if (index < array.length - 1) {
            characters.push(<b className='space'>·</b>);
            characters.push(' ');
        }
        return characters;
    });

    useEffect(() => {
        setTimeout(() => {
            setPlayMarquee(true);
        }, 2000);
    }, []);
    return (
        <motion.div className='banner' variants={banner}>
            <BannerRowTop title={titleWithHTML} playMarquee={playMarquee} />
            <BannerRowBottom title={titleWithHTML} playMarquee={playMarquee} />
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
        <div className={`banner-row marquee-2  ${playMarquee && "animate"}`}>
            <motion.div
                initial={{ y: -310 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.175, 0.285, 0.32, 0.9], duration: 1 }}
                className='marquee__inner-2'>
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
            </motion.div>
        </div>
    );
};

export default Banner;
