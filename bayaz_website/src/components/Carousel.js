import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'


const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel id="carousel" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/GeoffTVEye.jpg"
                alt="A drummer looking intense playing live"
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Jeanette D. Moses.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/GeorgeStudio.jpeg"
                alt="Closeup profile of a guy playing the bass guitar."
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Geoffrey Hug.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/BovinaMountainsPressShot_MicheleHug.jpeg"
                alt="BayazRed"
                />
                <div class="carousel-caption d-none d-md-block">
                    <p className='caption'>Photo by Michele Hug.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/BayazStudio.jpeg"
                alt="A rock n roll band in the recording studio."
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Julie DelSalle.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/MorgMikeTVEye.jpg"
                alt="A drummer looking intense playing live"
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Jeanette D. Moses.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/GeoffStudio.jpeg"
                alt="A drummer performing in a recording studio."
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Jeanette D. Moses.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/MandGTVEye.jpg"
                alt="A guitarist and bassist performing onstage."
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Jeanette D. Moses.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/BAYAZYELLOW.jpg"
                alt="BayazYellow"
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Michele Hug. Graphic by Stephen Voland.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/BAYAZRED.jpg"
                alt="BayazRed"
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Michele Hug. Graphic by Stephen Voland.</p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}
            // HERE IS THE TEMPLATE FOR ADDING NEW PICS TO THE CAROUSEL.
            // <Carousel.Item>
            //     <img
            //     className="d-block w-100"
            //     src="./pics/filename.jpg"
            //     alt="descriptive text"
            //     />
            //     <div class="carousel-caption d-md-block">
            //         <p className='caption'>The photo credit.</p>
            //     </div>
            // </Carousel.Item>

export default ControlledCarousel