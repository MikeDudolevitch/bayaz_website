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
              <img id='about-img' alt='placeholder pic' src='./pics/bayazpicouttake.jpeg'></img>
                <p id='about-narration' className='boxTextShadow'><strong>Greetings intrepid traverser of the internet, and welcome to our small humble corner of this Information Superhighway. Make yourself comfortable, do some stretches, splash some Evan Williams into your coffee, and allow me to spin you a yarn of the creation, and continuing adventures, of some righteous dudes who together form the Rock 'n’ Roll  outfit, Bayaz. </strong></p><br></br>
                <p className='boxTextShadow'>The year was 2020. It was Summer in NYC, which typically makes for a lively time of year. This was, as you probably know, not the case then. Covid lockdowns were in full effect, and normal life was wildly disrupted. Morgan (guitars, vocals) sent a message to Mike (vocals, guitar) asking to contribute to his isolation project -- making an all-remote cover of “City Kids” by the Pink Fairies. Mike mentioned it was a song he had been wanting to cover with a hypothetical new project he was starting and asked if Morgan wanted to join. Mike had already spoken to Geoffrey Hug, a former bandmate from <a className="boxTextShadow" href='thenuclears.nyc'>the Nuclears</a>, to collaborate on a band. Geoff hadn't been active as a live performer for some years, since the success of his video company, <a className="boxTextShadow" href='https://oscillatingpictures.com/'>Oscillating Pictures</a>, had become successful enough to demand the majority of his time. However, the itch to get back onstage had grown. With a 3-piece lineup committed, and an opening in the Bushwick, Brooklyn rehearsal space owned by <a className="boxTextShadow" href='https://teepeerecords.com/pages/mirror-queen'>Mirror Queen</a> (Morgan's other band), Bayaz began working up original material.
                <br></br><br></br>
                They continued developing demos, primarily from Mike and Morgan's respective songwriting ideas, for the remaining Summer and Fall months of 2020, while venues were still indefinitely shuttered and restrictions for gathering remained high. Looking to fill out a lineup for when live gigs returned, Morgan reached out to George Simonds, his high school classmate and bandmate in <a className="boxTextShadow" href='https://humanmantheband.bandcamp.com/'>Human Man</a>, to see about rounding out the band as their bass player. He fit in seamlessly and helped the band work towards live shows.
                <br></br><br></br>
                In the Spring of '21, they would finally get that chance to blaze through some of the songs they had labored over for an audience. But the venue needed to know their name! They elected for Bayaz (buy-as) after a track they had written about a character from <a className="boxTextShadow" href='https://joeabercrombie.com/'>Joe Abercrombie's</a> epic First Law Trilogy. The show was at Bowery Electric in NYC's East Village to a seated, distanced, masked, yet still wild audience. They have since been able to perform in clubs around NYC, the mid-Atlantic, and New England.
                <br></br><br></br>
                In 2021, they went into Studio G in Greenpoint, Brooklyn, to record a full-length LP with Jeff Berner (<a className="boxTextShadow" href='https://www.daisrecords.com/collections/psychic-tv'>Psychic TV</a>) at the controls. Having finished tracking, mixing, and mastering (the latter courtesy of <a className="boxTextShadow" href='https://saffmastering.com/'>Carl Saff</a>), Bayaz signed to New Jersey-based independent label <a className="boxTextShadow"href='https://fakechapter.com/'>Fake Chapter Records</a> to release the record in Spring '23. The first double A-side single, “Found Money” and “Circle”, is set to be released in November 2022. They will be playing regionally through '22 and touring to support the Bayaz LP in 2023. Be sure to check the Shows section to see if they roll through a city near you!
 
            </p>
            {/* </div> */}
          </div>
      </div>
    </div>
  )
}

export default About