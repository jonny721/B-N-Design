import React from 'react';
import Item from './Item';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/body.css'

const ItemList = ({ data }) => {
  return (
    <Container className='lista'>
      <Row>
        {data.map((prod) => (
          <Col key={prod.id} xs={12} sm={6} md={4} lg={3}>
            <Item prod={prod} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;