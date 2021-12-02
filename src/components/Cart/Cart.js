import Button from '@restart/ui/esm/Button'
import React, { useContext } from 'react'
import { Container, Row, Table, Alert, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'

export const Cart = ( {greeting} ) => {

    const {carrito , clear, total } = useContext(CartContext)
    
    return (
        <Container className="my-3">
            <Row>
                <h2>{greeting}</h2>
                <hr/>
            </Row>

                {
                    carrito.length > 0
                    ?   <>
                            <Row>  
                                <Col lg={12}>  
                                    <Table striped bordered hover responsive>
                                            <thead>
                                                <tr>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th>SubTotal</th>
                                                <th>Acciones</th>
                                                </tr>
                                            </thead>
                                                {
                                                    carrito.map( (prod, id) => <CartItem {...prod} key={id}/> ) 
                                                }
                                                <thead>
                                                <tr>
                                                    <th colSpan="3">Total</th>
                                                    <th colSpan="2">{total()}</th>
                                                    
                                                </tr>
                                                </thead>
                                    </Table>
                                </Col>  
                            </Row>  
                            <Row>
                                <Col lg={12}>
                                    <Button className="btn btn-danger my-3 mx-3" onClick={clear}>Vaciar carrito</Button>
                                    <Button className="btn btn-success" >Teminar Compra</Button>
                                </Col>
                            </Row>
                        </>
                    :   <>
                           <Row> 
                                <Col lg={12}>
                                    <Alert variant="danger">
                                            No hay productos agregados!
                                    </Alert>
                                </Col>
                           </Row>  
                           <Row>
                               <Col lg={4}>
                                    <Link to="/" className="btn btn-primary">Volver</Link>
                               </Col> 
                           </Row>                 
                        </>
                }
                
        </Container>
    )
}
