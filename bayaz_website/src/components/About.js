//Bandcamp.com Merch section integration
import React from 'react'
import './Component.css'
import './About.css'

const About = () => {
  return (
    <div id="about" className='page-wrapper component'>
      <div className="">
        {/* <h1 className="section-title">About</h1> */}
          <div id='about-paragraph'>

            <h2 id="about-title" className='boxTextShadow content-header'>The Story of BAYAZ</h2>
            {/* <div className="story"> */}

            <div className="intro-row full-screen">              
              <p id='about-narration' className='boxTextShadow'>
                <strong>
                  Greetings intrepid traverser of the internet, and welcome to our small humble corner of this Information Superhighway. 
                  Make yourself comfortable, do some stretches, splash some Evan Williams into your coffee, and allow me to spin you a yarn of the creation, 
                  and continuing adventures, of some righteous dudes who together form the Rock 'n’ Roll outfit, BAYAZ. 
                </strong>
              </p>

              <img id='about-img' alt='placeholder pic' src='./pics/bayazpicouttake.jpeg'></img>
            </div>

            <div className="intro-row small-screen">              
              <p id='about-narration' className='boxTextShadow'>
                <strong>
                  Greetings intrepid traverser of the internet, and welcome to our small humble corner of this Information Superhighway. 
                  Make yourself comfortable, do some stretches, splash some Evan Williams into your coffee, and allow me to spin you a yarn of the creation, 
                  and continuing adventures, of some righteous dudes who together form the Rock 'n’ Roll outfit, BAYAZ. 
                </strong>
              </p>

              <img id='about-img' alt='placeholder pic' src='./pics/bayazpicouttake.jpeg'></img>
            </div>
              
                <p className='boxTextShadow main-content'>
                  <p>
                    The year was 2020. It was Summer in NYC, which typically makes for a lively time of year. 
                    This was, as you probably know, not the case then. 
                    Covid lockdowns were in full effect, and normal life was wildly disrupted. 
                  </p>
                  
                  <p>
                    Morgan (guitars, vocals) sent a message to Mike (vocals, guitar) asking to contribute to his isolation project
                    -- making an all-remote cover of “City Kids” by the Pink Fairies. 
                    Mike mentioned it was a song he had been wanting to cover with a hypothetical 
                    new project he was starting and asked if Morgan wanted to join. 
                  </p>

                  <p>
                    Mike had already spoken to Geoffrey Hug, a former bandmate from 
                    &nbsp;<a className="boxTextShadow" href='thenuclears.nyc'>the Nuclears</a>, to collaborate on a band. 
                    Geoff hadn't been active as a live performer for some years, since the success of his video company, 
                    &nbsp;<a className="boxTextShadow" href='https://oscillatingpictures.com/'>Oscillating Pictures</a>, had become enough to demand the majority of his time. 
                    However, the itch to get back onstage had grown. 
                  </p>

                  <p>
                    With a 3-piece lineup committed, and an opening in the Bushwick, Brooklyn rehearsal space owned by 
                    &nbsp;<a className="boxTextShadow" href='https://teepeerecords.com/pages/mirror-queen'>Mirror Queen</a> (Morgan's other band), Bayaz began working up original material.
                  </p>

                  <p>
                    They continued developing demos, primarily from Mike and Morgan's respective songwriting ideas, 
                    for the remaining Summer and Fall months of 2020, while venues were still indefinitely shuttered and restrictions for gathering remained high. 
                  </p>

                  <p>
                    Looking to fill out a lineup for when live gigs returned, Morgan reached out to George Simonds, 
                    his high school classmate and bandmate in 
                    &nbsp;<a className="boxTextShadow" href='https://humanmantheband.bandcamp.com/'>Human Man</a>, to see about rounding out the band as their bass player. 
                    He fit in seamlessly and helped the band work towards live shows.
                  </p>
                  
                  <p>
                    In the Spring of '21, they would finally get that chance to blaze through some of the songs they had labored over for an audience. 
                    But the venue needed to know their name! They elected for Bayaz (buy-as) after a track they had written about a character from 
                    &nbsp;<a className="boxTextShadow" href='https://joeabercrombie.com/'>Joe Abercrombie's</a> epic First Law Trilogy. 
                  </p>

                  <p>
                    The show was at Bowery Electric in NYC's East Village to a seated, distanced, masked, yet still wild audience. 
                    They have since been able to perform in clubs around NYC, the mid-Atlantic, and New England.
                  </p>

                  <p>
                    In 2021, they went into Studio G in Greenpoint, Brooklyn, to record a full-length LP with Jeff Berner 
                    (<a className="boxTextShadow" href='https://www.daisrecords.com/collections/psychic-tv'>Psychic TV</a>) at the controls. 
                    Having finished tracking, mixing, and mastering 
                    (the latter courtesy of <a className="boxTextShadow" href='https://saffmastering.com/'>Carl Saff</a>), 
                    Bayaz signed to New Jersey-based independent label 
                    &nbsp;<a className="boxTextShadow"href='https://fakechapter.com/'>Fake Chapter Records</a> to release the record in Spring '23. 
                  </p>

                  <p>
                    The first double A-side single, “Found Money” and “Circle”, is set to be released in November 2022. 
                    They will be playing regionally through '22 and touring to support the Bayaz LP in 2023. 
                    Be sure to check the Shows section to see if they roll through a city near you!
                  </p>
                </p>
            {/* </div> */}
          </div>
      </div>
    </div>
  )
}

export default About