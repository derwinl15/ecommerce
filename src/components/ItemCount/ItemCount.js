import Button from 'react-bootstrap/Button'
import React from 'react'
import { Alert, Container } from 'react-bootstrap'
import '../ItemCount/ItemCount.css'
import { useState } from 'react'

export const ItemCount = ( { stock } ) => {

    const [count, setCount] = useState(1)

    const incrementar = () => {
        if(stock>count){
            setCount(count + 1)
        }else{
            alert("Producto sin stock")
        }
    }
    
    const decrementar = () => {
        if(count>1){
            setCount(count - 1)
        }else {
            alert("Debe elegir al menos un producto")
        }
    }
    
    const productosAgregados = () => {
        if(count === 1){
            alert(`Agregaste ${count} producto al carro de compras`)
        }else{
            alert(`Agregaste ${count} productos al carro de compras`)
        }
        
    }
    
    return (
        <Container className="Button">
            <Button variant="outline-primary" onClick={decrementar}>-</Button>
            <Button variant="outline-secondary">{count}</Button>
            <Button variant="outline-primary" onClick={incrementar}>+</Button>
            <hr/>
            <Button variant="primary" onClick={productosAgregados}>Agregar al Carro</Button>
        </Container>
    )
}
