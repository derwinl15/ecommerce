import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


export const NavBar = () => {
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Link href="#features">Inicio</Nav.Link>
                            <Nav.Link href="#pricing">Nosotros</Nav.Link>
                            <Nav.Link href="#portfolio">Portafolio</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                            </Nav>
                            <Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}



