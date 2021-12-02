import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getItem } from '../../helpers/getItem'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'

export const ItemDetailContainer = ( {greeting} ) => {
    const [item, setItem] = useState()  
    const [loading, setLoading] = useState(false)
    const { ItemId } = useParams();

    useEffect(() => {
        setLoading(true)
        getItem()
            .then((resp) => {
                setItem( resp.find( item => item.id === Number(ItemId)) )
            })
            .catch((err) => {
                console.log(err)
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