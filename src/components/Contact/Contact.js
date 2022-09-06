import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css'


function Contact() {
  return (
    <div className='Contact fluid' id="Contact">
    <Container>
      <Row>
        <Col className='text-light text-center'>
        <h4 className='text-center next'  styel={{paddingTop:'80px'}}><span style={{color:"#5bdb94"}}>03.</span>WHAT'S NEXT---</h4>
        <h1 className='text-center'>Get in Touch</h1>
        <p className='text-center txt'>I'm currently looking for new opportunities, my inbox is always open. <br /> Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <button  className='btn btn-me m-5 '> <a href="mailto:amalprasad@gmail.com" style={{textDecoration:"none",textDecorationColor:"antiquewhite"}}>Say Hello!✉️</a></button>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Contact