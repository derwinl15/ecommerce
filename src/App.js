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
