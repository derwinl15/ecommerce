import React from 'react'
import '../ItemListContainer/ItemListContainer.css'
import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getItem } from '../../helpers/getItem'

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState([])

    useEffect(() => {
        setLoading(true)
        getItem()
            .then((resp) => {
                setItem(resp)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    
    return (
        <>
             {
                loading 
                ? <Spinner animation="border" style={{position: 'absolute', left: '50%', top: '50%',}}/>
                : <ItemDetail item={item}/>
            }
        </>
    )
}   