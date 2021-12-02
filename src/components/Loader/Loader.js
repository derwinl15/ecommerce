import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
    return (
        <div>
            <Spinner animation="border" style={{position: 'absolute', left: '50%', top: '50%'}}/>
        </div>
    )
}
