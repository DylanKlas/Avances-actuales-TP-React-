import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Swal from "sweetalert2";

const CounterDetail = () => {
  const [contador, setContador] = useState(0);

  const incremento = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const decremento = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const reseteo = () => setContador(0);

  const agregarAlCarrito = () => {
    contador == 1
      ? Swal.fire(
          "Buen Trabajo!",
          `Se ha añadido el producto seleccionado
     al carrito`
        )
      : Swal.fire(
          "Buen Trabajo!",
          `Se han añadido ${contador} productos
     al carrito`
        );
    reseteo();
  };

  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button variant="light" onClick={decremento}>
          -
        </Button>
        <label className="mx-4 mt-1 ">{contador}</label>
        <Button variant="light" onClick={incremento}>
          +
        </Button>
      </ButtonGroup>
      <br />
      <br />
      {contador == 0 ? (
        <Button variant="primary" disabled onClick={agregarAlCarrito}>
          Agregar al Carrito
        </Button>
      ) : (
        <Button variant="primary" onClick={agregarAlCarrito}>
          Agregar al Carrito
        </Button>
      )}
    </>
  );
};

export default CounterDetail;
