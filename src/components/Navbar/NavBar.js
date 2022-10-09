import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap';
import'./Navbar.css'
import   'react-bootstrap'

function NavBar() {
  return (
    <>
      <Navbar  expand="lg md" className='justify-content-between navbar fixed-top ' >
      <Container className='navbarfont text-center' >
        <Navbar.Brand href="#home" className='animate__animated animate__slideInDown'  style={{color:'#5bdb94',fontFamily:"dotedf"}}>Amal Prasad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: 'none'}} className='navcircle'>
        <div class="demo">
	        <div class="menu-icon">
		        <input class="menu-icon__cheeckbox" type="checkbox" />
		        <div>
			        <span id='f1'></span>
			        <span></span>
		        </div>
	          </div>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Aboutme" className='navlinks text-light animate__animated animate__slideInDown' style={{fontFamily:"dotedf"}}>01.About me👨‍🦰</Nav.Link>
            <Nav.Link href="#projects" className='navlinks text-light animate__animated animate__slideInDown'style={{fontFamily:"dotedf"}}>02.Projects🌏</Nav.Link>
            <Nav.Link href="#Contact" className='navlinks text-light animate__animated animate__slideInDown' style={{fontFamily:"dotedf"}}>03.Contact me📩</Nav.Link>
            <Nav.Link href="https://liquid-loop.github.io/" className='navlinks text-light animate__animated animate__slideInDown' style={{fontFamily:"dotedf"}}>04.Liquid Loop Codes👾</Nav.Link>
            <Nav.Link href="https://dev.to/amalprasad0" className='navlinks text-light animate__animated animate__slideInDown'style={{fontFamily:"dotedf"}}>05.Dev.to📝</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </>
  )
}

export default NavBar