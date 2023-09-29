import React from "react";
import Item from "./Item";
import Detail from "./Detail";

const ItemList = ({ productosDB, hijo }) => {
  return (
    <>
      <div>
        {productosDB.map((p) => {
          return hijo == "detail" ? (
            <div key={p.id}>
              <Detail p={p} />
            </div>
          ) : (
            <div key={p.id}>
              <Item p={p} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
