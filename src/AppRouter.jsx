import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import Navigation from './components/Navigation'
import PokedexPage from './pages/PokedexPage'
import PokemonPage from './pages/PokemonPage'
import SearchPage from './pages/SearchPage'

const AppRouter = () => {
  return (
    <Routes>
      {/* elemento en comun de todas las páginas (navbar) */}
      <Route path='/' element={<Navigation />}>
        {/* página principal */}
        <Route index element={<PokedexPage />} />
        <Route path='pokemon/:id' element={<PokemonPage />} />
        <Route path='search' element={<SearchPage />} />
      </Route>
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}

export default AppRouter