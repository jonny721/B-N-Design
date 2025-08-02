import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="my-5">
      
      <div className='d-flex justify-content-center'>
        <img
          src={'../notFound.jpg'}
          className="img-fluid w-50"
          style={{ objectFit: 'cover' }}
        />
        </div>
        <div className='d-flex justify-content-center mt-2'>
        <Link className='btn btn-dark w-25' to='/'> Volver al Home</Link>
        </div>
        
      
    </Container>
    
  )
}

export default NotFound