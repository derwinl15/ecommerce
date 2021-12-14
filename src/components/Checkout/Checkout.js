import React, { useContext, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'

export const Checkout = ( {greeting} ) => {

    const {carrito, total} = useContext(CartContext)
    
    const [values, setValues] = useState({
        nombre:"",
        apellido:"",
        email:"",
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            buyer: {
                nombre: "Derwin Oropeza",
                email: "derwin@gmail.com",
                tel: 12345678
            },
            items: carrito,
            total: total()
        }
        console.log(orden)
    }

    return ( 
        <Container className="my-2">
            <h2>{greeting}</h2>
            <hr/> 
            <Row>
                <Col>
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleInputChange}
                            name="nombre"
                            value={values.nombre}
                            className='form-control my-2'
                            type="text"
                            placeholder="nombre"
                        />
                        {values.nombre.length < 4 && <small>Nombre inválido</small>}
                        <input
                            onChange={handleInputChange}
                            name="apellido"
                            value={values.apellido}
                            className='form-control my-2'
                            type="text"
                            placeholder="apellido"
                        />
                        {values.apellido.length < 4 && <small>Apellido inválido</small>}
                        <input
                            onChange={handleInputChange}
                            name="email"
                            value={values.email}
                            className='form-control my-2'
                            type="email"
                            placeholder="email"
                        />
                        {values.email.length < 4 && <small>Email inválido</small>}

                        <Button type="submit" className='btn btn-primary'>Enviar</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}
