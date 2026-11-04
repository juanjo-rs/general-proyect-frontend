import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PublicLayaout } from "./layaouts/PublicLayaout";
import { Acerca } from "./pages/Acerca";
import { inicio as Inicio } from "./pages/inicio";

function App() {
  const [usuario, setUsuario] = useState(null);

  function iniciarSesion() {
    setUsuario({ nombre: "Yaneth" });
  }

  function cerrarSesion() {
    setUsuario(null);
  }

  function cambiarContraseña() {}

  return (
    <Routes>
      <Route
        element={
          <PublicLayaout
            usuario={usuario}
            iniciarSesion={iniciarSesion}
            cerrarSesion={cerrarSesion}
            cambiarContraseña={cambiarContraseña}
          />
        }
      >
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<Acerca />} />
      </Route>
    </Routes>
  );
}

export default App;
