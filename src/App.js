import React from "react";
import { BrowserRouter} from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { CartProvider } from "./context/CartContext";
import { AppRouter } from "./router/AppRouter";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;


/* <Routes>
<Route path="/" element={ <ItemListContainer greeting="Pagina Principal"/>} />
<Route path="/productos" element={ <ItemListContainer greeting="Productos"/>} />
<Route path="/productos/:catId" element={ <ItemListContainer greeting="Productos"/>} />
<Route path="/detail/:ItemId" element={ <ItemDetailContainer />} />
<Route path="/cart" element={ <Cart greeting="Carrito de Compras" />}/>
<Route path="*" element={ <Navigate to="/" />} />
</Routes> */