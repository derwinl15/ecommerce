import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'


export const ItemList = ( { productos, greeting } ) => {
    return (
        <Container className="my-3">
            <h2>{greeting}</h2>
            <hr/>
            <Row >
                {productos.map( (prod) => <Item {...prod}/> )}
            </Row>
        </Container>
    )
}
