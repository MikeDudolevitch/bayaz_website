// Youtube Tiles, opens Modal like Danny's portfolio project
import { React, useState } from 'react'
import './Component.css'
import './Video.css'
import Modal from "./Modal";
import { Container, Col } from 'react-bootstrap';
// ^ Add Row to import from react-bootstrap when rearranging video tiles

const Video = () => {
    // set each modal to "visible" if they are to open
    const [modalVis1, setModalVis1] = useState("");
    const [modalVis2, setModalVis2] = useState("");
    // const [modalVis3, setModalVis3] = useState("");
    // const [modalVis4, setModalVis4] = useState("");

  return (
    <div id='video' className='page-wrapper component'>
      <h1 className="section-title">Video</h1>
      <div id="featured-video"></div>
      {/* <div className="outerPlaceHolder">
        <h2>Coming Soon!</h2>
      </div> */}
      
      <Container fluid>
        {/* <Row > */}
        <Col className="videoContainer">     
            <h3>Someone Else's Dream</h3>
            <img
              className="youtube"
              src="./pics/video-thumbnails/SEDThumbnail.png"
              alt="Someone Else's Dream Video"
              onClick={() => {setModalVis1("visible")}}
            />
            <p>Directed by Geoffrey Hug, Filmed by Steven Reynolds and Geoffrey Hug</p>
          </Col>
          <Col className="videoContainer">    
            <h3>Found Money (Live In New York City)</h3>
            <img
              className="youtube"
              src="./pics/video-thumbnails/FMThumbnail.png"
              alt="4-piece band performing at a small club"
              onClick={() => {setModalVis2("visible")}}
            />
            <p>Filmed by Dawn Fontaine</p>
          </Col>
        {/* </Row> */}
        {/* <Row>
          <Col className="videoContainer">  
          <h3>I Just Wanna Have Nothin to Do</h3>    
            <img
              className="youtube"
              src="./pics/video-thumbnails/Video3.png"
              alt="I Just Wanna Have Nothin to Do"
              onClick={() => {setModalVis3("visible")}}
            />
            <p>Directed by the Nuclears</p>
            </Col>
            <Col className="videoContainer">   
            <h3>Back to my Girl</h3> 
            <img
              className="youtube"
              src="./pics/video-thumbnails/Video4.png"
              alt="Back to my Girl"
              onClick={() => {setModalVis4("visible")}}
            />
            <p>Animated by Briana Layon</p>
          </Col>
        </Row> */}
      </Container>      
      <Modal
        modalVis={modalVis1}
        setModalVis={setModalVis1}
        URL='https://www.youtube.com/embed/6uVVkkPn9jU'
        title="Someone Else's Dream"
      />
      <Modal
        modalVis={modalVis2}
        setModalVis={setModalVis2}
        URL='https://www.youtube.com/embed/509O3K-PwXA'
        title="Found Money (Live in New York City)"
      />
      {/* <Modal
        modalVis={modalVis3}
        setModalVis={setModalVis3}
        URL='https://www.youtube.com/embed/5mhtyW6gxMY?enablejsapi=1&version=3&playerapiid=ytplayer'
        title="I Just Wanna Have Nothin to Do"
      />
      <Modal
        modalVis={modalVis4}
        setModalVis={setModalVis4}
        URL='https://www.youtube.com/embed/mOoTwRQzB80?enablejsapi=1&version=3&playerapiid=ytplayer'
        title="Back to my Girl"
      /> */}
      {/* to add another video you have to add another clickable image,
      referencing the new modal and new state variable, 
      continuing the naming convention by increase the last number of each */}
    </div>
  )
}

export default Video