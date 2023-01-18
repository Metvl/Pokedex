import React, { useContext } from 'react'
import { CardPokemon } from '../components/CardPokemon';
import { GoToTop } from '../components/GoToTop';
import { PokemonContext } from '../context/PokemonContext';
import '../index.css'

const PokedexPage = () => {

    const {fewPokemons, onClickLoadMore} = useContext(PokemonContext);

    return (
        <div className='container-general'>
            <div className="container">
                {fewPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)}
            </div>
            <div className="container-actions">
                <div className="container-go-to-top">
                    <GoToTop />
                </div>
                <div className="container-load-more">
                    <button onClick={onClickLoadMore} className="btn-load-more">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
                        Cargar más
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PokedexPage