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
                  <p className='text-justify aboutp '><span style={{color:' #5bdb94',fontSize:'25px'}}>--      </span> Hello! My name is  <strong>Amal Prasad</strong> and I enjoy creating things that live on the internet. <span> My interest in high-tech field started from 2017.  </span>I have created projects using various languages and  new technological tools.</p>
                  <p className="pb-5">Languages: <br/><br /> -> Python🐍 <br/> -> Javascript😀 <br />-> C ➰<br />-> HTML5😁</p>
               </Col>
               
              <Col sm={12} lg className='d-flex justify-content-center' style={{alignItems:'center'}}>
                      <AnimationOnScroll animateIn="animate__zoomIn">
                {/* <img src="https://www.instagram.com/p/CbSfHRBJ4wbPeQhgg6ZOjSarMqM-oV3AMPOY2E0/" className="m-5 img-fluid"  style={{width:'2000px'}}alt="" /> */}
                      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG7q53vRxHVcw/profile-displayphoto-shrink_800_800/0/1655486708973?e=1667433600&v=beta&t=em5jRt6wXmVaV3x4ty0B0o9utYeU4rPwy_2ERYc8o1M" className="Mt-5 ml-5 mb-5 d-flex justify-content-between myaboutimg animate__animated animate__bounce" alt="" />
                      </AnimationOnScroll>
              </Col>
              
          </Row>
      </Container>
       </div>

    
  )
}

export default About