import React from 'react'
import './Section.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Section() {
  return (
    <div className="fluid projects" id="projects">
        <Container>
        <AnimationOnScroll animateIn="animate__slideInUp">
            <Row className='d-flex justify-content-center animate__animated animate__slideInDown'>
                    <Col className='joj'>
                              <h1 className='text-light' style={{color:'antiquewhite'}}> <span>02.</span>Some Things I’ve Built🖇️</h1>
                              <div className="card">
                                
                                <h2>Netflix UI Clone</h2>
                                <p>Netflix UI Clone using ReactJs and having full ui fi=unctionalities</p>
                                <div className="tool d-flex justify-content-start text-light pl-1" >
                                    <p>React</p>
                                    <p>JSX</p>
                                    <p>REST-API</p>
                                </div>
                                <div className='d-flex justify-content-end share' style={{alignItems: 'end',width: '100%',marginTop: '-43px'}}>
                                    <a href="https://github.com"><FontAwesomeIcon icon={faUpRightFromSquare} href="www.github.com" /></a>
                                </div>
                              </div>
                              {/* card2 */}
                              <div className="card">
                                
                                <h2>Liquid-Loop Software</h2>
                                <p>Windows Software assistant for gate security gaurds</p>
                                <div className="tool d-flex justify-content-start text-light pl-1" >
                                    <p>PYTHON</p>
                                    <p>TKINTER</p>
                                    <p>TWILIO-API</p>
                                </div>
                                <div className='d-flex justify-content-end share' style={{alignItems: 'end',width: '100%',marginTop: '-43px'}}>
                                    <a href="https://github.com"><FontAwesomeIcon icon={faUpRightFromSquare} href="www.github.com" /></a>
                                </div>
                              </div>
                              {/* card3 */}
                              <div className="card">
                                
                                <h2>Resort Management System</h2>
                                <p>Full Stack web-application for resort management.</p>
                                <div className="tool d-flex justify-content-start text-light pl-1" >
                                    <p>PHP</p>
                                    <p>BOOTSTRAP</p>
                                    <p>MYSOL</p>
                                    <a href="https://github.com"><FontAwesomeIcon icon={faUpRightFromSquare} href="www.github.com" /></a>
                                </div>
                               
                                   
                                
                              </div>
                              {/* card4 */}
                              <div className="card">
                               
                                <h2>E-commerce Website</h2>
                                <p>A Nodejs project with mongoDB database</p>
                                <div className="tool d-flex justify-content-start text-light pl-1" >
                                    <p>NodeJs</p>
                                    <p>MonigoDB</p>
                                   
                                
                                </div>
                                <div className='d-flex justify-content-end share' style={{alignItems: 'end',width: '100%',marginTop: '-43px'}}>
                                    <a href="https://github.com"><FontAwesomeIcon icon={faUpRightFromSquare} href="www.github.com" /></a>
                                </div>
                              </div>  <br />

                    </Col>
            </Row>
            </AnimationOnScroll>
            <a href="https://github.com/amalprasad0?tab=repositories" className='sow'><h1 className='text-light text-center mt-5 showMore'>Show More</h1></a>

        </Container>
    </div>
  )
}

export default Section