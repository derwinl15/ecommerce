import Button from 'react-bootstrap/Button'
import React from 'react'
import { Container } from 'react-bootstrap'
import '../ItemCount/ItemCount.css'


export const ItemCount = ( { maxStock, count, setCount, onAdd } ) => {

    const handleDecrementar = () => {
        count > 0 
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
            <Button 
                variant={count === 0 ? 'btn btn-danger' : 'outline-primary'} 
                disabled={count === 0}
                onClick={handleDecrementar}
            >
                -
            </Button>
            <Button variant="outline-secondary">{count}</Button>
            <Button 
                variant={count === maxStock ? 'btn btn-danger' : 'outline-primary'}
                disabled={count === maxStock} 
                onClick={handleIncrementar}
            >
                +
            </Button>
            <Button 
                className="m-2" 
                variant="primary" 
                disabled={count === 0}
                onClick={onAdd}
            >
                Agregar al Carrito
            </Button>
            <hr/>
        </Container>
    )
}
