import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import '../ProductCard/ProductCards.css'

export const ProductCard = ( { img, name, description } ) => {
    return (
        <Container className="mb-10">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <ItemCount stock={5}/>
                </Card.Body>
            </Card>
        </Container>
    )
}


