import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Sesion } from "../model";
import { Outlet } from "react-router-dom";

export const PublicLayaout = ({
  usuario,
  cerrarSesion,
  iniciarSesion,
}: Sesion) => {
  return (
    <div className="public-layout">
      <Navbar usuario={usuario} cerrarSesion={cerrarSesion} />
      <main id="contenido" className="contenido">
        <p>
          {usuario
            ? `Sesion iniciada: ${usuario.nombre}`
            : "No hay sesion iniciada"}
        </p>
        <Outlet
          context={
            {
              usuario,
              cerrarSesion,
              iniciarSesion,
            } satisfies Sesion
          }
        />
      </main>
    </div>
  );
};
