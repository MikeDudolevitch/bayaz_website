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
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/BAYAZRED.jpg"
                alt="BayazRed"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/BovinaMountainsPressShot_MicheleHug.jpeg"
                alt="BayazRed"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel