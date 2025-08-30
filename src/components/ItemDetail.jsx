import React, { useState } from "react";
import "../css/itemDetail.css";
import "../css/body.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemDetail = ({ detalle }) => {
  const { addItem, itemQuantity } = useContext(CartContext);
  const [purchase, setPurchase] = useState(false);

  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    setPurchase(true);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Agregaste ${detalle.name} al carrito`,
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000,
    });
  };
  const stockActualizado = detalle.stock - itemQuantity(detalle.id);
  return (
    <Container className="my-5 tamaño">
      <Card className="p-4 border-0 shadow-sm">
        <Row>
          <Col md={6}>
            <img
              src={detalle.img}
              className="img-fluid w-100 detail-image"
              style={{ objectFit: "cover" }}
            />
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center text-center"
          >
            <h1 className="mb-4 fs-2">{detalle.name}</h1>
            <p className="lead mb-3">{detalle.description}</p>
            <p className="fw-bold mb-2">
              {stockActualizado > 0 ? (
                stockActualizado <= 5 ? (
                  <span style={{ color: "orange" }}>
                    Solo quedan {stockActualizado} unidades disponibles
                  </span>
                ) : (
                  <span style={{ color: "green" }}>
                    Stock disponible: {stockActualizado} unidades
                  </span>
                )
              ) : (
                <span style={{ color: "red" }}>Sin stock</span>
              )}
            </p>
            <p className="text-primary fs-5 mb-3">
              Precio: ${detalle.price},00
            </p>

            <ItemCount
              stock={stockActualizado}
              onAdd={onAdd}
              purchase={purchase}
              setPurchase={setPurchase}
            />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ItemDetail;
