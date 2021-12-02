import { createContext, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito]= useState([])

        const addItem = (item) => {
            setCarrito( [...carrito, item] ) 
        }

        const removeItem = (itemId) => {
            setCarrito( carrito.filter( prod => prod.id !== itemId) )
        }
        
        const clear = () => {
            setCarrito([])
        }

        const isInCart = (id) => {
            return carrito.some( prod => prod.id === id )
        }
        
        const quantity = () => {
            return carrito.reduce((acc, prod) => acc + prod.count, 0)
        }    

        const total = () => { 
            return carrito.reduce((acc, {price, count}) => acc + price * count, 0)       
        }
        
        
    return (
        <CartContext.Provider value={{
            carrito,
            addItem,
            removeItem,
            clear,
            isInCart,
            quantity,
            total,
        }}> 
            {children}        
        </CartContext.Provider>
    )
}
