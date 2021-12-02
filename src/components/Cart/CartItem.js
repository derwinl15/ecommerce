import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'

export const CartItem = ( {id, title, price, count } ) => {

    const { removeItem } = useContext(CartContext)

    const subtotal = price * count;
 
    return (
        <tbody key={id}>
            <tr>
                <td>{title}</td>
                <td>{price}</td>
                <td>{count}</td>
                <td>{subtotal}</td>
                <td>
                    <Button className="btn btn-danger" 
                    onClick={() => {removeItem(id)}}
                    >
                        <BsFillTrashFill/>
                    </Button>
                </td>
            </tr>

        </tbody>  
    )
}
