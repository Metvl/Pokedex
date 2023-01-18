import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import '../index.css'
import { useForm } from '../hook/useForm'

const Navigation = () => {
  const [allPokemonData, setAllPokemonData] = useState([])
  const location = useLocation();
  const navigate = useNavigate();
  const {getAllPokemons} = useContext(PokemonContext);
  const { form, changed } = useForm({});

  async function receivingDataPokemon() {
    const data = await getAllPokemons();
    // console.log(typeof(data));
    setAllPokemonData(data);
  }

  // console.log(typeof(Object.values(allPokemonData)));

  useEffect(() => {
    receivingDataPokemon();
  }, [])

  // const filterPokemon = (e) => {
  //   e.preventDefault();
  //   const filteredPokemon = allPokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
  //   console.log(filteredPokemon);
  //   console.log(form.inputSearch);
  //   return filteredPokemon;
  // }
  // console.log(filterPokemon)
  // Ver si puedo poner esta wea en el context, para dsp redireccionar directamente a /pokemon/form
  // Agregar un .filter en el buscador para que solo busque por nombre, en caso que no haga match el nombre
  // const SearcherValue = (e) => {
    // e.preventDefault();
    // filterPokemon(e.target.value);
    // console.log(form.inputSearch);
    // let searchPokemon = form.inputSearch;
    // let lowerCaseSearchPokemon = searchPokemon.toLowerCase();
    // console.log(lowerCaseSearchPokemon);
    // navigate(`/pokemon/${lowerCaseSearchPokemon}`);
    // location.reload();
  // }

  const SearcherValue = (e) => {
    e.preventDefault();
    // form.inputSearch.toLowerCase()
    const filteredPokemon = allPokemonData.filter(pokemon => pokemon.name);
  }
  // aca debo buscar la forma de recorrer el objeto y buscar por includes el valor del input
  
  console.log(allPokemonData)

  return (
    <div>
      <header className='container-navbar'>
        <div className="container-logo-pokedex">
          <Link to='/' className='logoPokedex'>
            <img src="../../public/Img-pokedex.png" alt="Logo pokedex" />
          </Link>
        </div>
        <div className="container-search-navbar">
          {/* onSubmit={SearcherValue} */}
          <form >
            <input type="search" onChange={changed} name="inputSearch" />
            <button type="submit">Buscar</button>
          </form>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default Navigation