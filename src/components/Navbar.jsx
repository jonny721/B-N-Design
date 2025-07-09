import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";

const NavbarPrincipal = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="logo" src="../icon.svg"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Living</Nav.Link>
            <Nav.Link href="#features">Dormitorio</Nav.Link>
            <Nav.Link href="#pricing">Comedor</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPrincipal;
