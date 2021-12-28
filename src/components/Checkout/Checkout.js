import React, { useContext, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { validarDatos } from '../../helpers/validarDatos'
import { db } from '../../firebase/config'
import { collection, Timestamp, addDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore/lite'
import Swal from 'sweetalert2'

export const Checkout = ( {greeting} ) => {

    const {carrito, total, clear} = useContext(CartContext)
    
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

    const handleSubmit = async (e) => {
        e.preventDefault()

       if(!validarDatos(values)) { return }

        const orden = {
            buyer: {...values},
            items: carrito,
            total: total(),
            date:Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        
        const orderRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const q = query(productosRef, where(documentId(), 'in', carrito.map(el => el.id) ))
        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach(doc => {
            const itemToUpdate = carrito.find((prod) => prod.id === doc.id)

            if(doc.data().stock >= itemToUpdate.count) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.count
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        });

        if(outOfStock.length === 0){
            addDoc(orderRef, orden)
                .then((res) => {
                    batch.commit()
                Swal.fire({
                    icon: 'success',
                    title: 'Su orden ha sido registrada',
                    text: `Su numero de orden es: ${res.id}`
                })
                clear()
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No hay stock de los siguientes productos:',
                text: outOfStock.map(e => e.title).join(', ')              
            })
        }
    }
    

    return ( 
        <>
            {carrito.length === 0 && <Navigate to="/" />}

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
                                placeholder="Nombre"
                            />
                            {values.nombre.length < 4 && <small>Nombre inválido</small>}
                            <input
                                onChange={handleInputChange}
                                name="apellido"
                                value={values.apellido}
                                className='form-control my-2'
                                type="text"
                                placeholder="Apellido"
                            />
                            {values.apellido.length < 4 && <small>Apellido inválido</small>}
                            <input
                                onChange={handleInputChange}
                                name="email"
                                value={values.email}
                                className='form-control my-2'
                                type="email"
                                placeholder="Email"
                            />
                            {values.email.length < 4 && <small>Email inválido</small>}
                            <br/>
                            <Button type="submit" className='btn btn-primary'>Enviar</Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
