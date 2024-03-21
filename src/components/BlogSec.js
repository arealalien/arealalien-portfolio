import React from "react";

const BlogSec = () => {
    return (
        <section className='blog'>
            <div className='blog-inner component-grid view-width'>
                <div className='component-grid-left'>
                    <h2 className='component-grid-title'>/Blog</h2>
                </div>
                <div className='component-grid-right'>
                    <div className='blog-inner-post'>
                        <p>Hey</p>
                        <div className='blog-inner-post-images p-images-3'>
                            <div className='blog-inner-post-images-image p-images-3-1'>
                                <img className='blog-inner-post-images-image-inner'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-28.jpg`}/>
                            </div>
                            <div className='blog-inner-post-images-image p-images-3-2'>
                                <img className='blog-inner-post-images-image-inner'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-14.jpg`}/>
                            </div>
                            <div className='blog-inner-post-images-image p-images-3-3'>
                                <img className='blog-inner-post-images-image-inner'
                                     src={process.env.PUBLIC_URL + `/images/gallery/image-22.jpg`}/>
                            </div>
                        </div>
                        <p>Hey</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSec;
