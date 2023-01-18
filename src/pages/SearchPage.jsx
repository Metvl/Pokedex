import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components/CardPokemon';
import { PokemonContext } from '../context/PokemonContext'

const SearchPage = () => {

  const location = useLocation();

	const { getAllPokemons } = useContext(PokemonContext);
console.log(getAllPokemons);
	const filteredPokemons = getAllPokemons.filter(pokemon =>
		pokemon.name.includes(location.state.toLowerCase())
	);

	return (
		<div className='container'>
      		<h1>a</h1>
		</div>
	)
}

export default SearchPage