import { PokemonContext } from "./PokemonContext"
import axios from "axios"
import { useEffect, useState } from "react"

export const PokemonProvider = ({ children }) => {
    const [offset, setOffset] = useState(25);
    const [fewPokemons, setFewPokemons] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);

    //peticion para la pantalla principal, para poder cargar de manera rapida.
    const getFewPokemons = async (limit = 0) => {
        const URL_BASE = 'https://pokeapi.co/api/v2/';
        const response = await axios.get(`${URL_BASE}pokemon?limit=${offset}&offset=${limit}`);
        const promise = response.data.results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return res.data;
        })
        const results = await Promise.all(promise)
        setFewPokemons([
            ...allPokemons,
            ...results
        ]);
        setLoading(false);
    }

    //petion para la pantalla de busqueda o filtrado, para poder realizar busquedas.
    const getAllPokemons = async () => {
        const URL_BASE = 'https://pokeapi.co/api/v2/';
        const response = await axios.get(`${URL_BASE}pokemon?limit=10000&offset=0`);
        const promise = response.data.results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return res.data;
        })
        const results = await Promise.all(promise)
        setAllPokemons(results);
        setLoading(false);
        // console.log(results);
        return results;
    }

    //Petición para obtener toda la data de solo un pokemon.
    const getPokemonByID = async (id) => {
        const URL_BASE = 'https://pokeapi.co/api/v2/';
        const response = await axios.get(`${URL_BASE}pokemon/${id}`);
        const singlePokemonData = {
            idPokemon: response.data.id,
            namePokemon: response.data.species.name,
            typesPokemon: response.data.types.map(type => type.type.name),
            weightPokemon: response.data.weight,
            heightPokemon: response.data.height,
            imgPokemon: {
                imgHD: response.data.sprites.other.dream_world.front_default,
                img8Bit: response.data.sprites.front_default
            },
            //Viene HP, ATQ, DEFENSE, ESP.ATQ, ESP.DEF, SPEED.
            statsPokemon: response.data.stats.map(stat => stat.base_stat)
        }
        //console.log(singlePokemonData);
        return singlePokemonData;
    }

    useEffect(() => {
        getFewPokemons();
    }, [offset])

    // Acá ver como hacer que se actualice respecto al navbar
    // useEffect(() => {
    //     getAllPokemons();
    // }, [])

    const onClickLoadMore = () => {
        setOffset(offset + 25);
        getFewPokemons();
    }

    return (
        <PokemonContext.Provider value={{
            fewPokemons,
            allPokemons,
            getPokemonByID,
            getAllPokemons,
            onClickLoadMore
        }}>
            {children}
        </PokemonContext.Provider>
    )
}