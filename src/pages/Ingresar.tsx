import React from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { Sesion } from '../model'

export const Ingresar = () => {
//ppubliclayout es padre de esta pagina
    const {usuario, iniciarSesion} =useOutletContext<Sesion>();
    const navegar = useNavigate();
    function ingresar(){
        iniciarSesion();
        navegar("/");
    }
  return (
    <section>
        <h1>Iniciar Sesion</h1>
        <p>Demostracion local</p>
        {usuario ? (<Link to="/"> Volver al inicio</Link>): ( <button type="button" onClick={ingresar}>Entrar como jhon do</button>)}
    </section>
  )
}
