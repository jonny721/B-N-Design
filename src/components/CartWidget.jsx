import { HiOutlineShoppingCart } from "react-icons/hi";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CartWidget = () => {
  const {cartQuantity} = useContext(CartContext)
  return (
    <>
      <HiOutlineShoppingCart fontSize={"1.6rem"} />
      <Badge bg="danger">{cartQuantity()}</Badge>
    </>
  );
};

export default CartWidget;
