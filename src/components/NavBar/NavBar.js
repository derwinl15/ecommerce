import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css'

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg md" bg="success" variant="dark">
            <Container >
                <Link className="navbar-brand" to="/">E-Commerce</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />                       
                <Navbar.Collapse id="responsive-navbar-nav">                          
                    <Nav className="me-auto">  
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/productos">Productos</Link>
                    <Link className="nav-link" to="">Contacto</Link> 
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item ><Link className="item" to="/productos/Tecnología">Tecnología</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className="item" to="/productos/Ropa">Ropa</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className="item" to="/productos/Zapatos">Zapatos</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className="item" to="/productos/Deportes">Deportes</Link></NavDropdown.Item>
                    </NavDropdown>  
                    </Nav> 
                    <Link to="/cart"><CartWidget /></Link>
                </Navbar.Collapse>  
            </Container>
        </Navbar>
    )
}







