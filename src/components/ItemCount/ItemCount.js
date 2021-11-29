import Button from 'react-bootstrap/Button'
import React from 'react'
import { Container } from 'react-bootstrap'
import '../ItemCount/ItemCount.css'


export const ItemCount = ( { maxStock, count, setCount, onAdd } ) => {

    const handleDecrementar = () => {
        count > 1 
        ? setCount(count - 1)
        : alert("Debe elegir al menos un producto")
    }

    const handleIncrementar = () => {
        count < maxStock && setCount(count + 1)
        count < maxStock
        ? setCount(count + 1)
        : alert("Producto sin mas stock")
    }
       
    return (
        <Container className="Button">
            <Button variant="outline-primary" onClick={handleDecrementar}>-</Button>
            <Button variant="outline-secondary">{count}</Button>
            <Button variant="outline-primary" onClick={handleIncrementar}>+</Button>
            <Button className="m-2" variant="primary" onClick={onAdd}>Agregar al Carrito</Button>
            <hr/>
        </Container>
    )
}
