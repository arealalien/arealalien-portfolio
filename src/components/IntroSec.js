import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const IntroSec = () => {
    const [age, setAge] = useState(null);
    const [iconPositions, setIconPositions] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const birthDate = new Date("2001-12-18");
        const today = new Date();
        const diff = today - birthDate;
        const ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        setAge(ageInYears);

        const gridSize = 20; // Adjust grid size as needed
        const cellSize = 5; // Adjust cell size as needed

        const centerX = gridSize / 2;
        const centerY = gridSize / 2;
        const noGoAreaSize = 6; // Adjust size of the central area

        const positions = [];

        const isInNoGoArea = (pos) => {
            const halfNoGoAreaSize = noGoAreaSize / 2;
            return (
                pos.left >= (centerX - halfNoGoAreaSize) * cellSize &&
                pos.left <= (centerX + halfNoGoAreaSize) * cellSize &&
                pos.top >= (centerY - halfNoGoAreaSize) * cellSize &&
                pos.top <= (centerY + halfNoGoAreaSize) * cellSize
            );
        };

        const isOverlapping = (pos) => {
            if (isInNoGoArea(pos)) {
                return true;
            }
            for (const position of positions) {
                const xDiff = Math.abs(position.left - pos.left);
                const yDiff = Math.abs(position.top - pos.top);
                if (xDiff < 2 * cellSize && yDiff < 2 * cellSize) { // Adjust overlap threshold as needed
                    return true;
                }
            }
            return false;
        };

        const shuffleGrid = (gridSize) => {
            const grid = Array.from({ length: gridSize * gridSize }, (_, i) => i);
            return grid.sort(() => Math.random() - 0.5);
        };

        const generatePosition = () => {
            let position;
            do {
                const shuffledGrid = shuffleGrid(gridSize);
                position = {
                    top: Math.floor(shuffledGrid[0] / gridSize) * cellSize,
                    left: (shuffledGrid[0] % gridSize) * cellSize
                };
            } while (isOverlapping(position));
            positions.push(position);
            return position;
        };

        const generateIcons = () => {
            const iconPositions = [];
            const iconTypes = ['instagram', 'linkedin', 'github', 'twitter'];
            const blurLevels = ['0rem', '0.1rem', '0.2rem', '0.3rem'];

            iconTypes.forEach(icon => {
                for (let i = 0; i < 6; i++) {
                    iconPositions.push({
                        type: icon,
                        position: generatePosition(),
                        blur: blurLevels[Math.floor(Math.random() * blurLevels.length)]
                    });
                }
            });
            return iconPositions;
        };

        setIconPositions(generateIcons());
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };

        const introElement = document.querySelector('.intro');
        if (introElement) {
            introElement.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (introElement) {
                introElement.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <section className='intro' data-scroll-section>
            <div className='intro-inner component-grid view-width'>
                <div className="intro-inner-foreground">
                    <div className='component-grid-top'>
                        <h2 className='component-grid-title cgt'>/Areal Alien/</h2>
                    </div>
                    <div className='component-grid-bottom'>
                        <h1>Hi 👋 I'm Arild, a <span className='age'>{age}</span> year old <span
                            className='out'>designer</span>, <span className='out'>developer</span> and <span
                            className='out'>photographer</span> from Norway.</h1>
                    </div>
                </div>
                {iconPositions.map((item, index) => (
                    <React.Fragment key={index}>
                        <Link to={item.type === 'instagram' ? "https://www.instagram.com/areal_alien" :
                            item.type === 'linkedin' ? "https://www.linkedin.com/in/arealalien/" :
                                item.type === 'github' ? "https://github.com/arealalien" :
                                    "https://twitter.com/Areal_Alien"}
                              target="_blank" rel="noopener noreferrer" className={`intro-inner-social-icon ic-${item.type}-${index + 1}`} style={{
                            top: `${item.position?.top}%`,
                            left: `${item.position?.left}%`,
                            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * (0.015 + (index % 4) * 0.0075)}px, ${(mousePosition.y - window.innerHeight / 2) * (0.015 + (index % 4) * 0.0075)}px)`,
                            filter: `blur(${item.blur})`
                        }}>
                            <svg className={`i-${item.type}`} xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 50 50"
                                 width="50px"
                                 height="50px">
                                {item.type === 'instagram' && (
                                    <path
                                        d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                                )}
                                {item.type === 'linkedin' && (
                                    <path
                                        d="M5.78 4.04c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm8.482 0h-5.968v16h5.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h5.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                                )}
                                {item.type === 'github' && (
                                    <path
                                        d="M25 2C12.317 2 2 12.317 2 25c0 11.04 7.16 20.398 17.09 23.672 1.248.228 1.703-.54 1.703-1.197 0-.593-.022-2.163-.035-4.247-6.95 1.512-8.408-3.16-8.408-3.16-1.135-2.886-2.768-3.65-2.768-3.65-2.272-1.552.17-1.52.17-1.52 2.51.176 3.826 2.582 3.826 2.582 2.223 3.814 5.828 2.71 7.25 2.07.225-1.607.876-2.71 1.595-3.33-5.585-.64-11.466-2.79-11.466-12.422 0-2.746.977-4.984 2.582-6.736-.258-.638-1.117-3.177.244-6.622 0 0 2.1-.672 6.9 2.564 2-.556 4.136-.833 6.258-.842 2.122.01 4.259.286 6.259.842 4.8-3.236 6.896-2.564 6.896-2.564 1.364 3.445.506 5.984.248 6.622 1.608 1.752 2.58 3.99 2.58 6.736 0 9.655-5.89 11.777-11.492 12.405.905.774 1.703 2.308 1.703 4.65 0 3.36-.03 6.067-.03 6.885 0 .664.45 1.433 1.72 1.19C40.84 45.39 48 36.03 48 25c0-12.683-10.317-23-23-23z"/>
                                )}
                                {item.type === 'twitter' && (
                                    <path
                                        d="M42.86 11.4c-1.58.716-3.28 1.198-5.068 1.416 1.82-1.096 3.22-2.826 3.88-4.89-1.706.994-3.59 1.716-5.6 2.104-1.61-1.726-3.9-2.82-6.45-2.82-4.89 0-8.857 3.965-8.857 8.857 0 .695.08 1.37.24 2.018-7.36-.368-13.905-3.89-18.308-9.26-.77 1.324-1.214 2.868-1.214 4.51 0 3.106 1.582 5.845 3.996 7.464-1.472-.046-2.85-.452-4.07-1.126v.112c0 4.34 3.09 7.95 7.18 8.77-.75.204-1.54.314-2.35.314-.576 0-1.14-.056-1.685-.164 1.14 3.554 4.444 6.14 8.367 6.206-3.065 2.4-6.905 3.834-11.106 3.834-.722 0-1.43-.042-2.122-.126 3.965 2.55 8.67 4.04 13.72 4.04 16.464 0 25.48-13.647 25.48-25.48 0-.39-.008-.78-.025-1.167 1.75-1.277 3.28-2.882 4.5-4.706z"/>
                                )}
                            </svg>
                        </Link>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default IntroSec;
