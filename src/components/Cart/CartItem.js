import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'

export const CartItem = ( {id, title, price, count } ) => {

    const { removeItem, totalBuy } = useContext(CartContext)

    return (
        <tbody key={id}>
            <tr>
                <td>{title}</td>
                <td>{price}</td>
                <td>{count}</td>
                <td>{totalBuy()}</td>
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
