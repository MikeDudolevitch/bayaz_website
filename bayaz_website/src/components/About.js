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
            <h2 className='page-content content-header'>Bayaz: The Story of Bayaz</h2>
            <p className='page-content'>Lorem ipsum <div class='img-responsive'><img id='about-img' alt='placeholder pic' src='./pics/bayazpictveye.jpg' style={{float: 'right'}}></img></div></p>
          </div>
      </div>
    </div>
  )
}

export default About