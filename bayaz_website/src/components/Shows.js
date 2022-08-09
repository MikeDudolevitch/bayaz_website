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
        <div className="tourDates">
            <h1 className="section-title">Shows</h1>
            <a href="https://www.songkick.com/artists/10225887" className="songkick-widget" data-theme="dark" data-track-button="on" data-detect-style="true" data-font-color="#FCF3CB" data-background-color="transparent" data-locale="en">Bayaz (US) tour dates</a>
            {AddLibrary("//widget.songkick.com/10225887/widget.js")}
        </div>
    </div>
  )
}

export default Shows