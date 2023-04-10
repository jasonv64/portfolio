import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navigation() {
    return(
        <div>
            <Navbar className="navbar-default row" bg="dark" variant="dark" expand="lg" sticky="top"> 
                <Container fluid>
                    <Nav.Link href='/'>
                        <div className="navbar-brand page-scroll">Jason Valadez</div>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto nav navbar-nav ">
                            <Nav.Link href='#services' className='page-scroll'>
                                Services
                            </Nav.Link>  
                            <Nav.Link href='#portfolio' className='page-scroll'>
                                Portfolio
                            </Nav.Link>
                            <Nav.Link href='#about' className='page-scroll'>
                                About
                            </Nav.Link>
                            <Nav.Link href='#about' className='page-scroll'>
                                Team
                            </Nav.Link>
                            <Nav.Link href='#contact' className='page-scroll'>
                                Contact
                            </Nav.Link>
                            <Nav.Link href='#contact' className='page-scroll'>
                                <Link to="/blog" style={{ textDecoration: 'none'}}>Blog</Link>
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