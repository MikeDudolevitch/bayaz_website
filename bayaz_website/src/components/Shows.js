//a Formatted <ul> that I can update - can also pull from Songkick /Bandsintown
import React from 'react'
import './Component.css'
import './Shows.css'

const Shows = () => {
  return (
    <div id="shows" className='page-wrapper component'>
      <div className="">
        <h1 className="section-title">Shows</h1>
        <br></br>
        <a href="https://www.songkick.com/artists/10225887" class="songkick-widget" data-theme="light" data-track-button="on" data-detect-style="true" data-background-color="transparent" data-locale="en">Bayaz (US) tour dates</a>
<script src="//widget.songkick.com/10225887/widget.js"></script>

      </div>
    </div>
  )
}

export default Shows