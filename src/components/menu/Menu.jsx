import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import {  } from "../../assets/logo.png";
import "./menu.css"
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <Navbar expand="lg" className='menu_bg'>
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/work">Work</Link>
            <Link to="/case">Case</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/readblog">Read Blog</Link>
            <Link to="/policy">Policy</Link>
          </Nav>
          <div className="nav_anchore text-end">
          <Link to="/contact">Contact us</Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu