import React, { useState } from 'react'
import type { Usuario } from './model'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import { PublicLayaout } from './layaouts/PublicLayaout'
import { Acerca } from './pages/Acerca'
import { Ingresar } from './pages/Ingresar'
import { Inicio } from './pages/inicio'

export const App = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  return (
    <Routes>
      <Route element={<PublicLayaout usuario={usuario}iniciarSesion={() => setUsuario({nombre: "Jhon Do"})}cerrarSesion={() => setUsuario(null)}/>}>
        <Route index element={<Inicio/>} />
        <Route path='about' element={<Acerca/>} />
        <Route path='sign-in' element={<Ingresar/>} />
      </Route>
    </Routes>
  )
}
export default App