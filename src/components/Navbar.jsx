import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const NavbarPrincipal = () => {
  const {cart} = useContext(CartContext)
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img alt="logo" src="../icon.svg" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/categories/living"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Living
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/categories/dormitorio"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Dormitorio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/categories/comedor"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Comedor
            </Nav.Link>
          </Nav>
          
          {cart.length > 0  && <NavLink to={`/cart`}><CartWidget /></NavLink>}
          
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPrincipal;
