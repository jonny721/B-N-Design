import { HiOutlineShoppingCart } from "react-icons/hi";
import Badge from "react-bootstrap/Badge";

const CartWidget = () => {
  return (
    <>
      <HiOutlineShoppingCart fontSize={"1.6rem"} />
      <Badge bg="danger">3</Badge>
    </>
  );
};

export default CartWidget;
