//Maybe a form to fill out that sends to my email?
//First name / last name / email / message all required
//-Include link to press kit here as well
import React from 'react'
import './Component.css'
import './Contact.css'
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <div id="contact" className='page-wrapper component'>
      <div className="">
        <h1 className="section-title">Contact</h1>
        <Form id='contact-form'>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='form-label'>First Name</Form.Label>
            <Form.Control className='form-control' type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='form-label'>Last Name</Form.Label>
            <Form.Control className='form-control' type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='form-label'>Email address</Form.Label>
              <Form.Control className='form-control' type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className='form-label'>Message</Form.Label>
            <Form.Control as="textarea" rows={3}  className='form-control' type="textarea" placeholder="Write Your Message" />
          </Form.Group>
          <Button style={{marginRight: 'auto', marginLeft: 'auto', display: 'block', backgroundColor: '#E0514C', color: '#FCF3CB', border: 'thin solid red'}} variant="primary" type="submit">
            Submit
          </Button>
    </Form>
    <br>
    </br>
    <h3 id='merch'><a href='https://thenuclears.bandcamp.com/merch'>Buy a record! Buy a shirt! Buy both- Christmas is right around the corner!</a></h3>
    {/* Put Social Icons here */}
      </div>
    </div>
    
  )
}

export default Contact

