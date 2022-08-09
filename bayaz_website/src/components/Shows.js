import React, { useEffect } from 'react'
import './Component.css'
import './Shows.css'

function Shows() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//widget.songkick.com/10225887/widget.js";
    script.async = true;
    document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
      }
  }, []);

  return (
    <div id="shows" className='page-wrapper component'>
        <div className="tourDates">
            <h1 className="section-title">Shows</h1>
            <a href="https://www.songkick.com/artists/10225887" className="songkick-widget" data-theme="dark" data-track-button="on" data-detect-style="true" data-font-color="#FCF3CB" data-background-color="transparent" data-locale="en">Bayaz (US) tour dates</a>
        </div>
    </div>
  )
}



export default Shows