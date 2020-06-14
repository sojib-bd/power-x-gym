import React from 'react';
import './Navigation.scss';
import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
    return (
        <div className="nav-container">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="#home" className="navTitle">POWER <span className="additional">X</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ml-auto'>
                        <Nav.Link href="#home" className="navLink">Home</Nav.Link>
                        <Nav.Link href="#service" className="navLink">Services</Nav.Link>
                        <Nav.Link href="#classes" className="navLink">Our Classes</Nav.Link>
                        <Nav.Link href="#about" className="navLink">About Us</Nav.Link>
                        <Nav.Link href="#blogs" className="navLink">Blogs</Nav.Link>
                        <Nav.Link href="#pricing" className="navLink">Pricing</Nav.Link>
                        <Nav.Link href="#contact" className="navLink">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;