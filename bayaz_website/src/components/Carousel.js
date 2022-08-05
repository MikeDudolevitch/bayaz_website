// import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


// const ControlledCarousel = () => {
//     const [index, setIndex] = useState(0);

//     const handleSelect = (selectedIndex, e) => {
//         setIndex(selectedIndex);
//     };

//     return (
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//             <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=First slide&bg=373940"
//             alt="First slide"
//             />
//             <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//             <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Second slide&bg=282c34"
//             alt="Second slide"
//             />

//             <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//             <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Third slide&bg=20232a"
//             alt="Third slide"
//             />

//             <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//             </Carousel.Caption>
//         </Carousel.Item>
//         </Carousel>
//     );
// }

// export default ControlledCarousel
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img alt="YELLOW" src="./pics/BAYAZYELLOW.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt="RED" src="./pics/BAYAZRED.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        );
    }
};