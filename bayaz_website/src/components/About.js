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
            <h2 id='about-header'>Bayaz: The Story of Bayaz</h2>
            <p>Lorem ipsum <img id='about-img' alt='placeholder pic' src='../../public/pics/BAYAZRED.jpg'></img></p>
          </div>
      </div>
    </div>
  )
}

export default About