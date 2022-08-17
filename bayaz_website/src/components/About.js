//Bandcamp.com Merch section integration
import React from 'react'
import './Component.css'
import './About.css'

const About = () => {
  return (
    <div id="about" className='page-wrapper component'>
      <div className="">
        <h1 className="section-title">About</h1>
          <div id='about-paragraph'>

            <h2 id="about-title" className='boxTextShadow content-header'>Bayaz: The Story of Bayaz</h2>
            {/* <div className="story"> */}
              <img id='about-img' alt='placeholder pic' src='./pics/BAYAZRED.jpg'></img>
              <p className='boxTextShadow'>The year was 2020. It was Summer in NYC, which usually makes for a lively time of year. This was not the case then: Covid lockdowns were in full effect, and normal life was disrupted. Morgan (guitars, vocals) sent a message to Mike (vocals, guitar) asking to contribute to his project making an all-remote cover of 'City Kids' by the Pink Fairies. Mike mentioned that was a song he had been wanting to cover with a hypothetical new project, and asked if Morgan wanted to join. Mike had</p>
            {/* </div> */}
          </div>
      </div>
    </div>
  )
}

export default About