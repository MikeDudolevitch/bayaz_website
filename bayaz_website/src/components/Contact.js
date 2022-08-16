//Maybe a form to fill out that sends to my email?
//First name / last name / email / message all required
//-Include link to press kit here as well
import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons'
import './Component.css'
import './Contact.css'


const Contact = () => {
  return (
    <div id="contact" className='page-wrapper component'>
      <div className=''>
      <h1 className="section-title">Contact</h1>
        <div className="contactParent">
          <div className="" id="contact-content">
            <div id="bandcamp-container">
              <p className="boxTextShadow">If there's one place to follow us, its here:
                <iframe scrolling="no" title="bandcamp" style={{display: "inline", border: 0, width: "100%", height: 33}} src="https://bandcamp.com/band_follow_button_classic/2460860197"></iframe>
              </p>
            </div>
            <h3 style={{marginBottom: "2vh"}} id='merch'><a className="boxTextShadow" id="link" href='https://thenuclears.bandcamp.com/merch'>Buy a record! Buy a shirt! Buy both- Christmas is right around the corner!</a></h3>  
          </div>
            <Form id='contactForm'>
              <Form.Text>
                <h2 className='content-header boxTextShadow'>Send Us A Line!</h2>
                <p className='content-header boxTextShadow'>Booking queries, press requests, hate-mail, etc.: This forwards to our band email, so we'll check it and get back to you ASAP!</p>
              </Form.Text>
              <Form.Group  className="mb-3" controlId="formBasicFirstName">
                <Form.Label className='boxTextShadow'>First Name</Form.Label>
                <Form.Control className="formFields" type="text" placeholder="First Name" required/>
              </Form.Group>
              <Form.Group  className="mb-3" controlId="formBasicLastName">
                <Form.Label className='boxTextShadow'>Last Name</Form.Label>
                <Form.Control className="formFields" type="text" placeholder="Last Name" required/>
              </Form.Group>
              <Form.Group  className="mb-3" controlId="formBasicEmail">
                <Form.Label className='boxTextShadow'>Email address</Form.Label>
                  <Form.Control className="formFields" type="email" placeholder="Enter email" required/>
              </Form.Group>
              <Form.Group  className="mb-3">
                <Form.Label className='boxTextShadow'>Message</Form.Label>
                <Form.Control className="formFields" as="textarea" rows={3}  type="textarea" placeholder="Write Your Message" required/>
              </Form.Group>
              <Button id="form-button" type="submit">
                Fire Away
              </Button>
            </Form>

        </div>
        <div className= "d-flex justify-content-center socialIconContainer">
            <SocialIcon className='socialIcon' url="https://www.facebook.com/bayazband" />
            <SocialIcon className='socialIcon' url="https://twitter.com/TheNuclears" />
            <SocialIcon className='socialIcon' url="https://www.instagram.com/bayazband/" />
            <SocialIcon className='socialIcon' url="https://www.youtube.com/user/bmavericknukes" />
            <SocialIcon className='socialIcon' network="email" url="mailto:bayaztheband@gmail.com" />
        </div>
      </div>
    </div>
    
  )
}

export default Contact

