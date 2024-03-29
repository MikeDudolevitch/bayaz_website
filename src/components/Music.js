//Use Bandcamp.com Widget 
import React from 'react'
import './Component.css'
import './Music.css'

const Music = () => {

  return (
    <div style={{paddingBottom: '5vh'}} id='music' className="page-wrapper component">
      <h1 className="section-title">Music</h1>
      <div id='new-music'>
        <h2 style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', lineHeight: 1.6, marginLeft: '15vw', marginRight: '15vw'}}>The debut Bayaz LP comes out April 7, 2023:<br/> <a target={'_blank'} rel="noreferrer" className="boxTextShadow" href='https://www.bayaz.bandcamp.com/album/bayaz'>Preorder Your Copy Here!</a><br/><br/>
        <a className="boxTextShadow" href='#featured-video'>Check out the brand new music video for 'Someone Else's Dream'!</a></h2>
      </div>
      {/* <h3 style={{textAlign: 'center', paddingBottom: '10px', lineHeight: 1.6, marginLeft: '15vw', marginRight: '15vw'}}>Listen to our new single 'Found Money' on the streaming service of your choice! <br></br>
      Courtesy of <a className="boxTextShadow" href='fakechapter.com'>Fake Chapter Records</a></h3> */}
      <div className="iframeContainer">
            {/* Music widgets */}
            {/* <iframe title="Bayaz LP" className="iframeSong" width='360' height='840' scrolling="no" src="https://promo.theorchard.com/UAPdeSgf0b4yuOYGu55b" seamless></iframe> */}
            <iframe title="Found Money" className="iframeSong" width='360' height='840' scrolling="no" src="https://orcd.co/rzq43pe" seamless></iframe>
            {/* Music widgets */}
            {/* <iframe title="nothin to do" className="iframeSong" src="https://bandcamp.com/EmbeddedPlayer/track=3156155333/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/transparent=true/" seamless><a href="https://thenuclears.bandcamp.com/track/i-just-wanna-have-nothin-to-do">I Just Wanna Have Nothin&#39; To Do by The Nuclears</a></iframe> */}
            {/* Music widgets */}
            {/* <iframe title="record high" className="iframeSong" src="https://bandcamp.com/EmbeddedPlayer/album=1609386363/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://thenuclears.bandcamp.com/album/record-high">Record High by The Nuclears</a></iframe> */}
      </div>
    </div>
  )
}

export default Music