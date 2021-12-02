import React from 'react'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'

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
                ? <Loader />
                : <ItemList productos={productos} greeting={greeting}/>
            }
        </>
    )
}   
