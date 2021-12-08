import React from 'react'
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'

export const ItemListContainer = ( { greeting } ) => {
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])
    const { catId } = useParams();

    useEffect(() => {
        setLoading(true)
        // Referencia
        const productosRef = collection(db, 'productos')
        // consulta con condiciones y uso de operador ternario para validar si es consulta a una categoria o a todos los productos
        const q = catId ? query(productosRef, where('category', '==', catId)) : productosRef    
        // GET referencia
        getDocs(q)
            .then((collection) => {
                const items = collection.docs.map((doc) => ({
                    id: doc.id, 
                    ...doc.data()
                }))
                setProductos(items)
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
