import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import { ProductCard } from '../ProductCard/ProductCard'
import Phone3 from '../../assets/products/Phone3.jpg'
import Phone2 from '../../assets/products/Phone2.png'
import '../ItemListContainer/ItemListContainer.css'

export const ItemListContainer = ( {greeting} ) => {
    return (
        <Container className="mt-2">
            <Row>
                <Col xs={12} md={12}>
                    <h3>{greeting}</h3>
                    <hr/>
                </Col>
            </Row>  
            <Row className="ItemListContainer">  
                <Col md={6} lg={6}>
                    <ProductCard img={Phone3} name="LG K61" description="128 GB titanio 4 GB RAM"/>
                </Col>
                <Col md={6} lg={6}>
                    <ProductCard img={Phone2} name="Samsung Galaxy S10" description="1 TB 8 GB RAM"/>
                </Col>
            </Row>
        </Container>
    )
}
