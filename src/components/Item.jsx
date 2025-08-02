import React from "react";
import { Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../css/imagen.css'

const Item = ({prod}) => {

    return (

        <Card border="secondary" style={{marginTop:'15px'}}>
            <Card.Img src={prod.img} className="product-image"/>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>
                    ${prod.price},00
                </Card.Text>
                <Link className="btn btn-primary" to={`/item/${prod.id}`}>Ver más</Link>
            </Card.Body>
        </Card>
    );
}

export default Item