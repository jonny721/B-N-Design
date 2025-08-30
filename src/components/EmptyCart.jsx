import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../css/body.css"

const EmptyCart = () => {
  return (
    <Container className='center'>
        <h2> Tu carrito esta vacio 😭</h2>
        <h4>Te invitamos a ver nuestros productos</h4>
        <Link className='btn btn-dark' to='/'>Ir a comprar</Link> 
    </Container>
  )
}

export default EmptyCart