import React from 'react'
import './Component.css'
import './Shows.css'

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

function Shows() {
  return (
    <div id="shows" className='page-wrapper component'>
        
            {/* <h1 className="section-title">Shows</h1> */}
            <div id="widget-container">
            <a href="https://www.songkick.com/artists/10225887" style={{marginLeft: "20vw"}} className="songkick-widget" data-theme="light" data-track-button="on" data-detect-style="false" data-font-family="Oswald" data-font-color="#FCF3CB" data-text-shadow="2px 2px 2px red" data-font-size="1.1em" data-background-color="transparent" data-locale="en">Here's a list of our upcoming shows- grab some tickets and we'll see ya there!</a>
            {AddLibrary("//widget.songkick.com/10225887/widget.js")}
        </div>
    </div>
  )
}

export default Shows