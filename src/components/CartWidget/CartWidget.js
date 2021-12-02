import React, { useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import './CartWidget.css'

export const CartWidget = () => {

    const {quantity} = useContext(CartContext)

    return (
        <div className="CartWidget">
            <BsCartPlus/>  
            <span className="quantity">{`(${quantity()})`}</span> 
        </div>
    )
}
