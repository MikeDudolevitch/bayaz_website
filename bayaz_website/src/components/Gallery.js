//Insta Integration Carousel? Or universally section where I can manually import photos
import React from 'react'
import Carousel from './Carousel'
import './Gallery.css'
import './Component.css'


const Gallery = () => {
  return (
    <div id="gallery" className='page-wrapper'>
      <div className="paddingTop borderBox">
        <h1 className="section-title">Gallery</h1>
        <Carousel/>
      </div>
    </div>
  )
}
      

export default Gallery