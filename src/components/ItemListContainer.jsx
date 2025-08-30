import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import LoaderComponent from "./LoaderComponent";
import '../css/textos.css'
import '../css/body.css'

const ItemListContainer = ({ saludo }) => {
  //se declara el estado donde se guardan los productos

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {category} = useParams()



  useEffect(() => {
    setLoading(true)
    //llamar a la funcion que retorna una promesa
    const productsCollection = category ? query(collection(db, "productos"), where("category", "==", category)) :collection(db, "productos")
    //Conseguir info de firebase
    getDocs(productsCollection)
      //tratar la promesa
      .then((res) => {
        //limpiamos y creamos nuestro array de datos
        const list = res.docs.map((doc)=>{
          return{
                id:doc.id,
                ...doc.data()
            }
      })
      setData(list)
    })
      .catch((error) => console.log(error))
      .finally(()=> setLoading(false))
  }, [category])

    return(
        <Container className="tamaño">        
        {loading 
        ? <LoaderComponent/>
        : <div>
            <h1 className="titulo">{saludo} {category || ""}</h1>
            <ItemList data={data}/>
        </div>}
        </Container>      
    )
}

export default ItemListContainer
