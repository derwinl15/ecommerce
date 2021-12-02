import Button from '@restart/ui/esm/Button'
import React, { useContext } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'

export const Cart = ( {greeting} ) => {

    const {carrito , totalBuy, clear, removeItem} = useContext(CartContext)

    return (
        <Container className="my-3">
            <Row>
                <h2>{greeting}</h2>
                <hr/>
            </Row>
            <Row>
                {
                    carrito.map((prod, id) => (
                        <Table key={id} striped bordered hover>
                            <thead>
                                <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{prod.title}</td>
                                <td>{prod.price}</td>
                                <td>{prod.count}</td>
                                <td>{totalBuy()}</td>
                                <td>
                                    <Button className="btn btn-danger" 
                                    onClick={() => removeItem(prod.id)}
                                    >
                                        <BsFillTrashFill/>
                                    </Button>
                                </td>
                                </tr>
                            </tbody>   
                        </Table>
                    ))  
                }
            </Row>
                <Button className="btn btn-danger my-3 mx-3" onClick={clear}>Vaciar carrito</Button>
                <Button className="btn btn-success" >Teminar Compra</Button>
        </Container>
    )
}
