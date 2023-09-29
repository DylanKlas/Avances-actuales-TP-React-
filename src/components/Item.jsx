import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ p }) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-4 mb-4">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{p.nombre}</Card.Title>
        <Card.Text>$ {p.precio}</Card.Text>
        <Card.Text>Últimos {p.stock}</Card.Text>
        {/* <Card.Text>{p.descripcion}</Card.Text> */}

        <Button variant="primary">
          <Link to={`/item/${p.id}`} className="textoBlanco p-1">
            Detalles
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
