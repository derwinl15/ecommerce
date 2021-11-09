import React from 'react'
import { Container } from 'react-bootstrap'

export const ItemListContainer = ( {greeting} ) => {
    return (
        <Container className="my-2">
            <h3>{greeting}</h3>
            <hr/>
        </Container>
    )
}
