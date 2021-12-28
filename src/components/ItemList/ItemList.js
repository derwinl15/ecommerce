import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'
import { Form, FormControl, Col } from 'react-bootstrap';
import { useState } from 'react';

export const ItemList = ( { productos, greeting, setProductos } ) => {
    const [search, setSearch] = useState("")
    
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value);
        filter(e.target.value);
    }

    const filter = (terminoBusqueda) => {
        var resultadoBusqueda = productos.filter((elemento) => {
            if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        });
        setProductos(resultadoBusqueda);
    }
    return (
        <Container className="my-3">
            <Row>
                <Col lg={8} md={12} xs={12}><h2>{greeting}</h2></Col>
                <Col lg={4} md={12} xs={12}>
                    <Form className="left" >
                        <FormControl
                            type="Buscar"
                            value={search}
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Buscar"
                            onChange={handleSearch}
                        />
                    </Form> 
                </Col>
            </Row>
            <hr/>   
            <Row>
                {productos.map( (prod, id) => <Item key={id} {...prod}/> )}
            </Row>
        </Container>
    )
}
