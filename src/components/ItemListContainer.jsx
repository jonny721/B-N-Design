import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  //se declara el estado donde se guardan los productos

  const [data, setData] = useState([]);
  const {category} = useParams()



  useEffect(() => {
    //llamar a la funcion que retorna una promesa
    getProducts()
      //tratar la promesa
      .then((res) => {
        if(category){
          setData(res.filter((prod)=> prod.category === category))
        }else{
          setData(res)
        }
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <Container>
      <ItemList data={data}/>
    </Container>
  );
};

export default ItemListContainer
