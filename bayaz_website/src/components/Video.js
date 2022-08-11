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
      <Container flow="md">
        <Row className="d-flex flex-row">
          <Col  className="videoContainer">    
            <img
              className="youtube"
              src="./pics/Video1.png"
              alt="Zegema Beach"
              onClick={() => {setModalVis1("visible")}}
            />
          </Col>
          <Col className="videoContainer">     
            <img
              className="youtube"
              src="./pics/Video2.png"
              alt="Lightspeed Getaway"
              onClick={() => {setModalVis2("visible")}}
            />
          </Col>
        </Row>
        <Row className="d-flex flex-row">
          <Col className="videoContainer">      
            <img
              className="youtube"
              src="./pics/Video3.png"
              alt="Lightspeed Getaway"
              onClick={() => {setModalVis3("visible")}}
            />
            </Col>
            <Col className="videoContainer">    
            <img
              className="youtube"
              src="./pics/Video4.png"
              alt="Lightspeed Getaway"
              onClick={() => {setModalVis4("visible")}}
            />
          </Col>
        </Row>
      </Container>      
      <Modal
        modalVis={modalVis1}
        setModalVis={setModalVis1}
        URL='https://www.youtube.com/embed/BId86m-TCj4?enablejsapi=1&version=3&playerapiid=ytplayer'
        title="Zegema Beach"
        text=""
      />
      <Modal
        modalVis={modalVis2}
        setModalVis={setModalVis2}
        URL='https://www.youtube.com/embed/WZcGftHr5Xg?enablejsapi=1&version=3&playerapiid=ytplayer'
        title="Lightspeed Getaway"
        text=""
      />
      <Modal
        modalVis={modalVis3}
        setModalVis={setModalVis3}
        URL='https://www.youtube.com/embed/5mhtyW6gxMY?enablejsapi=1&version=3&playerapiid=ytplayer'
        title="I Just Wanna Have Nothin to Do"
        text=""
      />
      <Modal
        modalVis={modalVis4}
        setModalVis={setModalVis4}
        URL='https://www.youtube.com/embed/mOoTwRQzB80?enablejsapi=1&version=3&playerapiid=ytplayer'
        title="Back to my Girl"
        text=""
      />
    </div>
  )
}

export default Video