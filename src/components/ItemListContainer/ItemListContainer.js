import React from 'react'
import '../ItemListContainer/ItemListContainer.css'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { Col, Container, Row, Spinner } from 'react-bootstrap'

export const ItemListContainer = ( {greeting} ) => {
 
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((resp) => {
                setProductos(resp)
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
                : <ItemList productos={productos}/>
            }
        </>
    )
}   
