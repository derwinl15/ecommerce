import React from 'react'
import { Container } from 'react-bootstrap'

export const Cart = ( {greeting} ) => {
    return (
        <Container className="my-3">
            <h2>{greeting}</h2>
            <hr/>
        </Container>
    )
}
