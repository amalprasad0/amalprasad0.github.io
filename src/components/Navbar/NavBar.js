import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap';
import'./Navbar.css'
import   'react-bootstrap'

function NavBar() {
  return (
    <>
      <Navbar  expand="lg md" className='justify-content-between navbar fixed-top'  >
      <Container >
        <Navbar.Brand href="#home" className='animate__animated animate__slideInDown'  style={{color:'#5bdb94'}}>Amal Prasad</Navbar.Brand>
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
            <Nav.Link href="#Aboutme" className='navlinks text-light animate__animated animate__slideInDown'>01.About me👨‍🦰</Nav.Link>
            <Nav.Link href="#projects" className='navlinks text-light animate__animated animate__slideInDown'>02.Projects🌏</Nav.Link>
            <Nav.Link href="#Contact" className='navlinks text-light animate__animated animate__slideInDown'>03.Contact me📩</Nav.Link>
            <Nav.Link href="https://github.com/Liquid-Loop" className='navlinks text-light animate__animated animate__slideInDown'>04.Open-source community👾</Nav.Link>
            <Nav.Link href="https://dev.to/amalprasad" className='navlinks text-light animate__animated animate__slideInDown'>05.Dev.to📝</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </>
  )
}

export default NavBar