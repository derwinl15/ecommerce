import React from 'react'
import '../ItemDetail/ItemDetail.css'
import { Col, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemDetail = ( { id, pictureUrl, title, price, description } ) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <Col className="mb-5">
            <Card key={id} className="card m-3" >
                <Card.Img className="img" variant="top" src={pictureUrl} alt={title} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <ItemCount stock={5}/>
                    <Button onClick={handleVolver}>Volver</Button>
                </Card.Body>
            </Card>
        </Col>      
    )
}