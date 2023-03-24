import React from "react";
import { Outlet } from "react-router";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return(
        <div>
            <Navbar className="navbar-default navbar-fixed-top" bg="dark" variant="dark" expand="md">
                <Container className="navbscontainer">
                    <Nav.Link href='/'>
                        <div className="navbar-brand page-scroll">Jason Valadez</div>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar-right">
                        <Nav className="me-auto nav navbar-nav ">
                            <Nav.Link href='#page-top' className='page-scroll'>
                                Services
                            </Nav.Link>  
                            <Nav.Link href='#services' className='page-scroll'>
                                Portfolio
                            </Nav.Link>
                            <Nav.Link href='#portfolio' className='page-scroll'>
                                About
                            </Nav.Link>
                            <Nav.Link href='#about' className='page-scroll'>
                                Team
                            </Nav.Link>
                            <Nav.Link href='#team' className='page-scroll'>
                                Contact
                            </Nav.Link>
                            <Nav.Link href='#contact' className='page-scroll'>
                                Blog
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    )
}

export default Navigation;