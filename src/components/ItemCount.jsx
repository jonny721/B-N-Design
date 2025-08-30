import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Asegúrate de importar Link

const ItemCount = ({ stock, onAdd, purchase, setPurchase }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const comprar = () => {
    onAdd(count);
    setPurchase(true); // Actualiza el estado de purchase al comprar
  };

  return (
    <Container className="d-flex justify-content-center flex-column">
      {stock > 0 && !purchase ? (
        <>
          <div>
            <button className="btn btn-secondary" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-secondary" onClick={sumar}>+</button>
          </div>
          <button
            className="btn btn-primary mt-2 w-auto m-5 mt-4"
            disabled={count === 0}
            onClick={comprar}
          >
            Comprar
          </button>
        </>
      ) : (
        <div>
          <Link className="btn btn-dark mt-2 w-auto m-5 mt-4" to="/">
            Seguir Comprando
          </Link>
          <Link className="btn btn-dark mt-2 w-auto m-5 mt-4" to="/cart">
            Ir al carrito
          </Link>
        </div>
      )}
    </Container>
  );
};

export default ItemCount;