import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Button, CloseButton, Container } from "react-bootstrap";
import "../css/body.css";
import "../css/button.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, clear, removeItem, cartTotal } = useContext(CartContext);
  const totalPrice = cart.reduce(
    (total, compra) => total + compra.price * compra.quantity,
    0
  );

  const preConfirm = ()=>{
    Swal.fire({
      title:'¿Estas seguro de borrar todo el carrito?',
      showDenyButton:true,
      denyButtonText:'No',
      confirmButtonText:'Si'
    }).then((result)=>{
      if(result.isConfirmed){
        clear()
      }
    })
  }

  return (
    <Container className="tamaño">
      <h1 style={{ textAlign: "center", margin: "20px 10px" }}> Tu carrito</h1>
      <div>
        <div className="table-container">
          <Table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              margin: "2rem 0",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2", textAlign: "center" }}>
                <th style={{ padding: "1rem" }}>Producto</th>
                <th style={{ padding: "1rem" }}>Nombre</th>
                <th style={{ padding: "1rem" }}>Precio Unitario</th>
                <th style={{ padding: "1rem" }}>Cantidad</th>
                <th style={{ padding: "1rem" }}>Subtotal</th>
                <th style={{ padding: "1rem" }}>Quitar</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((compra) => (
                <tr key={compra.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "1rem" }}>
                    <img
                      src={compra.img}
                      alt={compra.name}
                      style={{ width: "5rem", objectFit: "cover" }}
                    />
                  </td>
                  <td style={{ padding: "1rem" }}>{compra.name}</td>
                  <td style={{ padding: "1rem" }}>${compra.price},00</td>
                  <td style={{ padding: "1rem" }}>{compra.quantity}</td>
                  <td style={{ padding: "1rem" }}>
                    ${compra.price * compra.quantity},00
                  </td>
                  <td style={{ padding: "1rem" }}>
                  <CloseButton onClick={() => removeItem(compra.id)}/>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ backgroundColor: "#f2f2f2", fontWeight: "bold" }}>
                <td colSpan="4" style={{ padding: "1rem", textAlign: "right" }}>
                  Total:
                </td>
                <td style={{ padding: "1rem" }}>${totalPrice},00</td>
                <td style={{ padding: "1rem" }}></td>
              </tr>
            </tfoot>
          </Table>
        </div>
        <div className="container-button">
          <Button
            variant="outline-danger"
            className="button-space btn-sm"
            onClick={preConfirm}
          >
            Borrar Carrito
          </Button>
          <Button
            as={Link}
            variant="outline-success"
            className="button-space btn-sm"
            to="/checkout"
          >
            Terminar Compra
          </Button>
          <Button
            as={Link}
            variant="outline-primary"
            className="button-space btn-sm"
            to="/"
          >
            Seguir Comprando
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CartView;
