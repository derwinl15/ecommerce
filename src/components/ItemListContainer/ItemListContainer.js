import React from 'react'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router'

export const ItemListContainer = ( { greeting } ) => {
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])
    const { catId } = useParams();

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((resp) => {
                if(!catId){
                    setProductos(resp)
                }else {
                    setProductos( resp.filter ( prod => prod.category === catId) )
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId])
    
    return (
        <>
             {
                loading 
                ? <Spinner animation="border" style={{position: 'absolute', left: '50%', top: '50%'}}/>
                : <ItemList productos={productos} greeting={greeting}/>
            }
        </>
    )
}   
