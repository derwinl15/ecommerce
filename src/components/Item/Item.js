import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Item/Item.css'

export const Item = ( { id, pictureUrl, title, price, description, category } ) => {
    return (
        <Col className="mb-3">
            <Link className="link" to={`/detail/${id}`}>
                <Card key={id} className="card m-3 mb-0" style={{ width: '18rem', padding: '10px'}}>
                <Card.Img variant="top" src={pictureUrl} alt={title} />
                <hr/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Precio $ {price}</Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    <Button>Ver más..</Button>
                    </Card.Body>    
                    <Card.Text className="category">Categoría: {category}</Card.Text>
                </Card>
            </Link>
        </Col>
    )
}


