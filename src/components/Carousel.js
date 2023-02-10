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
                src="./pics/carousel-pics/bayaz_cover_for_label.jpg"
                alt="Bayaz's album cover - logo with 70s styled rainbow border."
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Designed by Kassidy Reynolds.</p>
                </div>
            </Carousel.Item>
                        <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/carousel-pics/GeoffTVEye.jpg"
                alt="A drummer looking intense playing live."
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Jeanette D. Moses.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/carousel-pics/GeorgeStudio.jpeg"
                alt="Closeup profile of a guy playing the bass guitar."
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Geoffrey Hug.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/carousel-pics/BovinaMountainsPressShot_MicheleHug.jpeg"
                alt="Bayaz band members by a lake in the Catskills, NY."
                />
                <div class="carousel-caption d-none d-md-block">
                    <p className='caption'>Photo by Michele Hug.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/carousel-pics/bayaz16_joebottari.jpg"
                alt="Bayaz guitarists Mike and Morgan back to back onstage"
                />
                <div class="carousel-caption d-none d-md-block">
                    <p className='caption'>Photo by Joe Bottari.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/carousel-pics/bayazspace.jpg"
                alt="Bayaz as aliens"
                />
                <div class="carousel-caption d-none d-md-block">
                    <p className='caption'>Photo by Bayaz.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/carousel-pics/BayazStudio.jpeg"
                alt="A rock n roll band in the recording studio."
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Julie DelSalle.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/carousel-pics/MorgMikeTVEye.jpg"
                alt="Two guitarists playing live."
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Jeanette D. Moses.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/carousel-pics/GeoffStudio.jpeg"
                alt="A drummer performing in a recording studio."
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Jeanette D. Moses.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/carousel-pics/BAYAZYELLOW.jpg"
                alt="BayazYellow"
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Michele Hug. Graphic by Stephen Voland.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/carousel-pics/MandGTVEye.jpg"
                alt="A guitarist and bassist performing onstage."
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Jeanette D. Moses.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/carousel-pics/bayaz18_joebottari.jpg"
                alt="A guitarist pick scrapes."
                />
                <div class="carousel-caption d-md-block">
                    <p className='caption'>Photo by Joe Bottari.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./pics/carousel-pics/BAYAZRED.jpg"
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