import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { ItemCount } from "../ItemCount/ItemCount"

export const Item = ( { prod } ) => {
    return (
        <Col>
            <Card key={prod.id} className="card m-3" style={{ width: '18rem', padding: '10px'}}>
            <Card.Img variant="top" src={prod.pictureUrl} alt={prod.title} />
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>{prod.price}</Card.Text>
                    <Card.Text>
                        {prod.description}
                    </Card.Text>
                <Button>Agregar</Button>
                </Card.Body>    
            </Card>
        </Col>
    )
}


