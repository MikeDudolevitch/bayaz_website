// Youtube Tiles, opens Modal like Danny's portfolio project
import React from 'react'
import './Component.css'
import './Video.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Video = () => {
  return (
    <div id='video' className='page-wrapper component'>
      <h1 className="section-title">Video</h1>
      <Container fluid="md">
        <Row className="">
          <Col  className="videoContainer">      
            <iframe  className="youtube" src='https://www.youtube.com/embed/BId86m-TCj4'
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowfullscreen
              title='video'
              />
            </Col>
            <Col className="videoContainer">      
            <iframe  className="youtube" src='https://www.youtube.com/embed/BId86m-TCj4'
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowfullscreen
              title='video'
            />
          </Col>
        </Row>
        <Row className="">
          <Col className="videoContainer">      
            <iframe  className="youtube" src='https://www.youtube.com/embed/BId86m-TCj4'
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowfullscreen
              title='video'
              />
            </Col>
            <Col className="videoContainer">      
              <iframe  className="youtube"
                src='https://www.youtube.com/embed/BId86m-TCj4'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
              />
          </Col>
        </Row>
      </Container>      
    </div>
  )
}

export default Video