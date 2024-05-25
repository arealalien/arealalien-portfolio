import React, { useState, useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";

const Gallery = ({ photos }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const leftImagesRef = useRef([]);
    const observer = useRef(null);

    const handleMouseEnter = (index) => {
        document.getElementById(`right-image-${index}`).classList.add('hover');
    };

    const handleMouseLeave = (index) => {
        document.getElementById(`right-image-${index}`).classList.remove('hover');
    };

    const handleClick = (index) => {
        document.getElementById(`left-image-${index}`).scrollIntoView({ behavior: "smooth", block: "center" });
        setActiveIndex(index);
    };
    
    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index, 10);
                        setActiveIndex(index);
                    }
                });
            },
            { threshold: 0.5, rootMargin: '0px 0px -40% 0px' }
        );

        leftImagesRef.current.forEach((img) => {
            if (img) observer.current.observe(img);
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);


    return (
        <>
            <section className='gallery-item'>
                <div className='gallery-item-inner component-grid view-width'>
                    <div className='component-grid-left'>
                        {[...Array(10).keys()].map(i => (
                            <img
                                key={i}
                                id={`left-image-${i}`}
                                src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-${i + 1}.jpg`}
                                alt=''
                                ref={el => leftImagesRef.current[i] = el}
                                data-index={i}
                            />
                        ))}
                    </div>
                    <div className='component-grid-right'>
                        {[...Array(10).keys()].map(i => (
                            <img
                                key={i}
                                id={`right-image-${i}`}
                                src={process.env.PUBLIC_URL + `/images/gallery/${photos}/image-${i + 1}.jpg`}
                                alt=''
                                onClick={() => handleClick(i)}
                                onMouseEnter={() => handleMouseEnter(i)}
                                onMouseLeave={() => handleMouseLeave(i)}
                                className={`${activeIndex === i ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
