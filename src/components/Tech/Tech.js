import React from 'react'
import './Tech.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AnimationOnScroll } from 'react-animation-on-scroll';



function Tech() {
    
    
  return (
    <div className='tech fluid' >
    <Container>
        <Row>
            <Col className='content  text-light text-uppercase ' lg sm={6}>
            <h1 id="headin" className=' text-center '>MY--------Tools🪄</h1>
            </Col >
            <Col className='text-light tools'>
            <h1 id="headin2" className=' text-center '>MY--------Tools🪄</h1>

            <AnimationOnScroll animateIn="animate__slideInRight">
            <h1 className='pl-0 mb-5 headi ' style={{letterSpacing:'20px',color:'#5bdb94'}}>Re<span style={{color:'antiquewhite'}}>a</span>ct</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInRight">
            <h1 className='ml-2 mb-5 headi' style={{letterSpacing:'20px',color:'antiquewhite'}}>Pyt<span style={{color:'#5bdb94'}}>h</span>on</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInRight">
            <h1 className='pl-3 mb-5 headi' style={{letterSpacing:'20px',color:'#5bdb94'}}>Git</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInRight">
            <h1 className='pl-3 mb-5 headi' style={{letterSpacing:'20px',color:'antiquewhite'}}><span style={{color:'#5bdb94'}}>N</span>odeJs</h1>
            </AnimationOnScroll>
            </Col >
            <AnimationOnScroll animateIn="animate__slideInRight" animateOut='animate__slideInLeft' delay={20}>
            </AnimationOnScroll>
        </Row>
    </Container>
    </div>
  )
}

export default Tech 