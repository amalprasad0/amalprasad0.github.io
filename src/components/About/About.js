import React from 'react'
import './About.css'
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function About() {
  return (
    
       <div className="about fluid" id="Aboutme">
       <Container>
          <Row className="d-flex justify-content-center mt-1">
              <Col lg sm={12} className="pl-5">
                  <h2 className='abouth' style={{fontFamily:"dotedf"}}><span style={{color:' #5bdb94',fontFamily:"dotedf"}}>01. </span>About---------------------</h2>
                  <p className='text-justify aboutp '><span style={{color:' #5bdb94',fontSize:'25px'}}>--      </span> Hello! I'm  <strong>Amal's Webpage👋,</strong>Meet Amal👥, the web wizard who spins digital silk and weaves virtual wonders. With a mouse as their trusty wand, they craft stunning websites and bring design dreams to life.<span> When not coding, you can find him exploring the depths of the internet, sampling strange new websites, and occasionally emerging from their lair to catch some vitamin D☀️ (and check that the real world still exists😁).</span></p>
                  <p className="pb-5">Languages: <br/><br /> -> DART and JAVASCRIPT🐍 <br/> -> PYTHON and JAVA😀 <br />-> C-SHARP and C ➰<br /></p>
               </Col>
               
              <Col sm={12} lg className='d-flex justify-content-center' style={{alignItems:'center'}}>
                      <AnimationOnScroll animateIn="animate__zoomIn">
                {/* <img src="https://www.instagram.com/p/CbSfHRBJ4wbPeQhgg6ZOjSarMqM-oV3AMPOY2E0/" className="m-5 img-fluid"  style={{width:'2000px'}}alt="" /> */}
                      <img src="https://media.licdn.com/dms/image/D5603AQE1ekc93TT02g/profile-displayphoto-shrink_800_800/0/1676804090679?e=2147483647&v=beta&t=YourjvHIW_RC0CM-OXD319POUY97rFQC1gA2GGOQSD0" className="Mt-5 ml-5 mb-5 d-flex justify-content-between myaboutimg animate__animated animate__bounce" alt="" />
                      </AnimationOnScroll>
              </Col>
              
          </Row>
      </Container>
       </div>

    
  )
}

export default About