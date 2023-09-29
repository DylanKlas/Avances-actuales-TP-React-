import React from "react";
import { Link } from "react-router-dom";

const CartWidget = ({ itemsCarrito }) => {
  return (
    <>
      <div className="cartWidget p-0 mx-2"> 🛒 {itemsCarrito}</div>
    </>
  );
};

export default CartWidget;
