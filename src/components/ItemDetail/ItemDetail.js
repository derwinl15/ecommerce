import React, { useContext } from 'react'
import '../ItemDetail/ItemDetail.css'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


export const ItemDetail = ( { id, pictureUrl, title, price, description, stock } ) => {

    const { addItem, isInCart } = useContext(CartContext)

    const navigate = useNavigate()
    const [count, setCount] = useState(0)

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        if(count > 0) {
           count === 1 
            ? alert(`Agregaste ${count} producto al carro de compras`)
            : alert(`Agregaste ${count} productos al carro de compras`)
           addItem({
                id,
                title,
                price,
                pictureUrl,
                count
           })
       }       
    }

    return (
        <div className="container bcontent">
            <div className="card" key={id}>
                <div className="row no-gutters">
                    <div className="col-sm-5">
                        <Card.Img className="img-detail" variant="top" src={pictureUrl} alt={title} />
                    </div>
                    <div className="col-sm-7">
                        <div className="card-body-detail">
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>Precio: ${price}</Card.Text>
                            <Card.Text>
                                Descripción: {description}
                            </Card.Text >
                            <Card.Text>
                                {
                                    !isInCart(id) 
                                        ?   <ItemCount 
                                                
                                                maxStock={stock} 
                                                count={count} 
                                                setCount={setCount}
                                                onAdd={handleAgregar}
                                            />
                                        :   <Link to="/cart" className="btn btn-success mx-2">Comprar</Link>
                                }
                            <Button onClick={handleVolver}>Volver</Button>                               
                            </Card.Text >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}











/* <Col className="mb-5">
        <Card key={id} className="card m-3" >
            <Card.Img className="img" variant="top" src={pictureUrl} alt={title} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{price}</Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>

            {
                !isInCart(id) 
                    ?   <ItemCount 
                            maxStock={stock} 
                            count={count} 
                            setCount={setCount}
                            onAdd={handleAgregar}
                        />
                    :   <Link to="/cart" className="btn btn-success mx-2">Terminar mi compra</Link>
            }

                <Button onClick={handleVolver}>Volver</Button>
            </Card.Body>
        </Card>
        </Col>   */