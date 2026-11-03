//import "./Navbar.css";
import type { Sesion } from "../../model";
import { NavLink } from "react-router-dom";

export default function Navbar({
  usuario,
  cerrarSesion,
}: Pick<Sesion, "usuario" | "cerrarSesion">) {
  return (
    <header className="cabecera">
      <nav aria-label="Navegacion Principal">
        <strong>Taquilla</strong>
        <NavLink to="/">Inicio</NavLink>
      </nav>
    </header>
  );
}
