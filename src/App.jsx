import React from 'react'
import AppRouter from './AppRouter'
import { PokemonProvider } from './context/PokemonProvider'
import './index.css'

const App = () => {
    return (
        <PokemonProvider>
            <AppRouter />
        </PokemonProvider>
    )
}

export default App