import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Banner.css';
import 'animate.css';
function Banner() {
  return (
    <>
    <div className="banner fluid d-flex">
        <Container>
         <Row>
            <Col lg sm={12}  className='f1 mt-5 d-flex d-flex justify-content-center'>
                <div  className="content text-center">
                <img src="https://em-content.zobj.net/source/microsoft-teams/337/man-technologist_1f468-200d-1f4bb.png" style={{marginTop: '-117px'}} alt="Amal Prasad" />
                <h3 style={{color:'antiquewhite'}} className="animate__animated animate__fadeIn">Hi there 👋 i'm </h3>
                <h1 className="animate__animated animate__fadeIn" style={{fontFamily:"dotedf"}}>Amal <span style={{color:'#5bdb94'}}>Prasad</span> </h1>
                <h6 className="animate__animated animate__fadeIn"><span> Web Developer</span> || Frontend Developer || <span>Engineering Studennt</span></h6>
                
                <button  className='m-3 animate__animated animate__slideInUp'> <a href="https://drive.google.com/file/d/1YmQJQ_4nYqewkR2rMBe_VgpaYG9finco/view?usp=sharing" style={{textDecoration:"none",color:"antiquewhite"}}>Download Resume</a></button>
                </div>
            </Col>
            {/* <Col lg sm={12} className='f2'>
                <div className="content2 d-flex justify-content-center ">
                  
                  </div>
            </Col> */}
         </Row>
        </Container>
    </div>
        
    </>
  )
}

export default Banner