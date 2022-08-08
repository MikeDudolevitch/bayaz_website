//Use Bandcamp.com Widget 
import React from 'react'
import './Component.css'
import './Music.css'

const Music = () => {
  return (
    <div id='music' className="page-wrapper">
      <h1 className="section-title">Music</h1>
        <div className="music borderBox"><iframe title="seasides" style={{margin: "1vw", border: 0, width: "30vw", height: "50vw"}} src="https://bandcamp.com/EmbeddedPlayer/album=1203236600/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/transparent=true/" seamless><a href="https://thenuclears.bandcamp.com/album/seasides">Seasides by The Nuclears</a></iframe><iframe title="nothin to do" style={{margin: "1vw" ,border: 0, width: "30vw", height: "50vw"}} src="https://bandcamp.com/EmbeddedPlayer/track=3156155333/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/transparent=true/" seamless><a href="https://thenuclears.bandcamp.com/track/i-just-wanna-have-nothin-to-do">I Just Wanna Have Nothin&#39; To Do by The Nuclears</a></iframe>
        <iframe title="record high" style={{margin: "1vw", border: 0, width: "30vw", height: "50vw"}} src="https://bandcamp.com/EmbeddedPlayer/album=1609386363/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://thenuclears.bandcamp.com/album/record-high">Record High by The Nuclears</a></iframe>
      </div>
    </div>
  )
}

export default Music