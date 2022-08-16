//Use Bandcamp.com Widget 
import React from 'react'
import './Component.css'
import './Music.css'

const Music = () => {
  return (
    <div id='music' className="page-wrapper component">
      <h1 className="section-title">Music</h1>
      <div className="iframeContainer">
            {/* Music widgets */}
            <iframe title="seasides" className="iframeSong"  src="https://bandcamp.com/EmbeddedPlayer/album=1203236600/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/transparent=true/" seamless><a href="https://thenuclears.bandcamp.com/album/seasides">Seasides by The Nuclears</a></iframe>
            {/* Music widgets */}
            <iframe title="nothin to do" className="iframeSong" src="https://bandcamp.com/EmbeddedPlayer/track=3156155333/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/transparent=true/" seamless><a href="https://thenuclears.bandcamp.com/track/i-just-wanna-have-nothin-to-do">I Just Wanna Have Nothin&#39; To Do by The Nuclears</a></iframe>
            {/* Music widgets */}
            <iframe title="record high" className="iframeSong" src="https://bandcamp.com/EmbeddedPlayer/album=1609386363/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://thenuclears.bandcamp.com/album/record-high">Record High by The Nuclears</a></iframe>
      </div>
    </div>
  )
}

export default Music