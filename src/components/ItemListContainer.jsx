import Container from 'react-bootstrap/Container';

const ItemListContainer = ({saludo}) => {

    return(
        <Container className='d-flex justify-content-center align-items-center'>            
            <h1>{saludo}</h1>
        </Container>
    )

}

export default ItemListContainer