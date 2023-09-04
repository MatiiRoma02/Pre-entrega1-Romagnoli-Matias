import React from "react";
import "./styles.css";
import CartWidget from "./CartWidget";

function Navbar() {
  const mostrarMensajeBienvenida = () => {
    alert("¡Bienvenido al inicio!");
  };

  return (
    <nav className="navbar">
      <div>
        <button onClick={mostrarMensajeBienvenida}>Inicio</button>
        <button>Sobre mi</button>
        <button>Local</button>
        <button>Tienda</button>
        <button>Contacto</button>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
