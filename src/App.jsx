import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Detail from "./components/Detail";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCartContext from "./context/ShoppingCartContext";
import ComponenteA from "./components/ComponenteA";

function App() {
  return (
    <>
      <ShoppingCartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <ComponenteA />
            <Route exact path="/" element={<ItemDetailContainer />} />
            <Route
              exact
              path="/category/:categoria"
              element={<ItemDetailContainer />}
            />
            {/* o ItemListContainer */}
            <Route exact path="/item/:id" element={<Detail />} />
            {/* o Item */}
            <Route exact path="/cart" element={<CartContainer />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartContext>
    </>
  );
}

export default App;
