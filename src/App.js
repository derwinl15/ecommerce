import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting="Pagina Principal"/>} />
          <Route path="/productos" element={ <ItemListContainer greeting="Productos"/>} />
          <Route path="/productos/:catId" element={ <ItemListContainer greeting="Productos"/>} />
          <Route path="/detail/:ItemId" element={ <ItemDetailContainer />} />
          <Route path="/cart" element={ <Cart greeting="Carrito de Compras" />}/>
          <Route path="*" element={ <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
