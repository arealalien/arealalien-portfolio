import React from "react";

const Contact = () => {
    return (
        <>
            <section className='contact' data-scroll-section>
                <div className='contact-inner component-grid view-width'>
                    <div className='component-grid-top'>
                        <h2 className='component-grid-title cgt'>/Let's talk/</h2>
                    </div>
                    <div className='component-grid-bottom'>
                        <h1>Ready to build experiences your audience will love?</h1>
                        <button onClick={() => window.location = 'mailto:arealalien.business@gmail.com'}>Let's talk</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
