import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import { doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'

export const ItemDetailContainer = ( {greeting} ) => {
    const [item, setItem] = useState()  
    const [loading, setLoading] = useState(false)
    const { ItemId } = useParams();

    useEffect(() => {
        setLoading(true)
        // Referencia
        const docRef = doc(db, 'productos', ItemId)

        // GET referencia
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [ItemId])
    
    return (
        <>
            <Container className="my-2">
                <h2>{greeting}</h2>
                <hr/>
                <Row>                   
                    {
                        loading 
                        ? <Loader />
                        : <ItemDetail {...item} />
                    }
                </Row>
            </Container>
        </>
    )
}   