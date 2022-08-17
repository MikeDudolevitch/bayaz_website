// Youtube Tiles, opens Modal like Danny's portfolio project
import React, { useState } from 'react'
import './Component.css'
import './Video.css'
import Modal from "./Modal";
import {Container, Row, Col} from 'react-bootstrap';

const Video = () => {
    // set each modal to "visible" if they are to open
    const [modalVis1, setModalVis1] = useState("");
    const [modalVis2, setModalVis2] = useState("");
    const [modalVis3, setModalVis3] = useState("");
    const [modalVis4, setModalVis4] = useState("");

  return (
    
    <div id='video' className='page-wrapper component'>
      <h1 className="section-title">Video</h1>
      <Container fluid>
        <Row >
          <Col className="videoContainer">    
            <h3>Zegema Beach</h3>
            <img
              className="youtube"
              src="./pics/Video1.png"
              alt="Zegema Beach"
              onClick={() => {setModalVis1("visible")}}
            />
            <p>Some text here</p>
          </Col>
          <Col className="videoContainer">     
            <h3>Lightspeed Getaway</h3>
            <img
              className="youtube"
              src="./pics/Video2.png"
              alt="Lightspeed Getaway"
              onClick={() => {setModalVis2("visible")}}
            />
            <p>Some text here</p>
          </Col>
        </Row>
        <Row>
          <Col className="videoContainer">  
          <h3>I Just Wanna Have Nothin to Do</h3>    
            <img
              className="youtube"
              src="./pics/Video3.png"
              alt="I Just Wanna Have Nothin to Do"
              onClick={() => {setModalVis3("visible")}}
            />
            <p>Some text here</p>
            </Col>
            <Col className="videoContainer">   
            <h3>Back to my Girl</h3> 
            <img
              className="youtube"
              src="./pics/Video4.png"
              alt="Back to my Girl"
              onClick={() => {setModalVis4("visible")}}
            />
            <p>Some text here</p>
          </Col>
        </Row>
      </Container>      
      <Modal
        modalVis={modalVis1}
        setModalVis={setModalVis1}
        URL='https://www.youtube.com/embed/BId86m-TCj4?enablejsapi=1&version=3&playerapiid=ytplayer'
        title="Zegema Beach"
      />
      <Modal
        modalVis={modalVis2}
        setModalVis={setModalVis2}
        URL='https://www.youtube.com/embed/WZcGftHr5Xg?enablejsapi=1&version=3&playerapiid=ytplayer'
        title="Lightspeed Getaway"
      />
      <Modal
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
      />
      {/* to add another video you have to add another clickable image,
      referencing the new modal and new state variable, 
      continuing the naming convention by increase the last number of each */}
    </div>
  )
}

export default Video