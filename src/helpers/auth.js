import React, { useState} from 'react'
import '../firebase/config'
import { Container } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap';
import { db } from './firebase/config'


export const Auth = ({greeting}) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleEmail = (e) => {
    setEmail({
        ...email,
        [e.target.email]:e.target.value
    })
}

const handlePassword = (e) => {
    setPassword({
        ...password,
        [e.target.password]:e.target.value
    })
}

const submit = async (e) => {
    e.preventDefault()
    await db.auth().createUserWithEmailAndPassword(email,password)
    // console.log(email,password);
}

    return (
        <Container className="my-2">
                <h2>{greeting}</h2>
                <hr/>
            <Form onClick={submit}>
                <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleEmail}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handlePassword}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ingresar
                </Button>
            </Form>
        </Container>
    )
}

 
