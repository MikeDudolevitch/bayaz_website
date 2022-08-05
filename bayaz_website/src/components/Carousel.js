import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
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
// import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// export default class DemoCarousel extends Component {
//     render() {
//         return (
//             <Carousel>
//                 <div>
//                     <img alt="YELLOW" src="./pics/BAYAZYELLOW.jpg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img alt="RED" src="./pics/BAYAZRED.jpg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//             </Carousel>
//         );
//     }
// };