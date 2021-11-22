import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemDetail = ( { item } ) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={item.pictureUrl} alt={item.title} />
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <ItemCount stock={5}/>
                </Card.Body>
            </Card>
        </Col>
    )
}