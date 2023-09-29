import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CounterDetail from "./CounterDetail";

const Detail = ({ p }) => {
  const { id } = useParams();

  //Para detectar si no me lo toma
  p.length > 0
    ? console.log(`ItemDetail: va a motrar un producto`)
    : console.log(`ItemDetail: No se detectó ningun producto con id ${id}`);

  return (
    <>
      {
        <Card style={{ width: "36rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{p.nombre}</Card.Title>
            <Card.Text>$ {p.precio}</Card.Text>
            <Card.Text>Últimos {p.stock}</Card.Text>
            <Card.Text>{p.descripcion}</Card.Text>
            <CounterDetail />
            {/* <Button variant="primary">
              <Link to={`/`}>Volver </Link>
            </Button>
            <Button variant="primary">
              <Link to={`/cart`}>Comprar</Link>
            </Button> */}
          </Card.Body>
        </Card>
      }
    </>
  );
};

export default Detail;
