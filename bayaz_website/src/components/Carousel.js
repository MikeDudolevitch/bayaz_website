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