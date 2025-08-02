import React from 'react'
import '../css/itemDetail.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import ItemCount from "./ItemCount"

const ItemDetail = ({detalle}) => {

  const onAdd = (cantidad)=>{
    console.log(`Compraste ${cantidad} de productos`)
  }

  return (
    <Container className="my-5">
      <Card className="p-4 border-0 shadow-sm">
        <Row>
          <Col md={6}>
            
            <img
              src={detalle.img}
              className="img-fluid w-100 detail-image"
              style={{ objectFit: 'cover' }}
            />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center text-center">
            <h1 className="mb-4 fs-2">{detalle.name}</h1>
            <p className="lead mb-3">{detalle.description}</p>
            <p className="fw-bold mb-2">Stock: {detalle.stock}</p>
            <p className="text-primary fs-5 mb-3">Precio: ${detalle.price},00</p>
            <ItemCount stock={detalle.stock} onAdd={onAdd}/>
          </Col>
        </Row>
      </Card>
    </Container>
        
    //</div>
  );
}

export default ItemDetail