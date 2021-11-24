import React from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css'

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg md" bg="success" variant="dark">
            <Container >
                <Navbar.Brand><Link to="/">E-Commerce</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />                       
                <Navbar.Collapse id="responsive-navbar-nav">                          
                    <Nav className="me-auto">
                    <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
                    <Nav.Link><Link to="/productos">Productos</Link></Nav.Link>
                    <Nav.Link> <Link to="#">Contacto</Link></Nav.Link>  
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item ><Link className="item" to="/productos/Tecnología">Tecnología</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className="item" to="/productos/Ropa">Ropa</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className="item" to="/productos/Zapatos">Zapatos</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className="item" to="/productos/Deportes">Deportes</Link></NavDropdown.Item>
                    </NavDropdown>  
                    </Nav> 
                    <Nav className="mr-auto">  
                    <Nav.Link> <Link to="#">Crea tu cuenta</Link></Nav.Link>
                    <Nav.Link> <Link to="#">Ingresa</Link></Nav.Link>
                    </Nav> 
                    <Link to="/cart"><CartWidget /></Link>
                    <Form className="d-flex">
                        <FormControl
                            type="Buscar"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Buscar"
                        />
                        <Button variant="outline-light">Buscar</Button>
                    </Form>
                </Navbar.Collapse>  
            </Container>
        </Navbar>
    )
}
