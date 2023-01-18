import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import GraphicStat from '../components/GraphicStat';
import Loader from '../components/Loader';
import { PokemonContext } from '../context/PokemonContext'

const PokemonPage = () => {

  const {getPokemonByID} = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const {id} = useParams();

  async function receivingDataPokemon(id) {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  }

  useEffect(() => {
    receivingDataPokemon(id)
  }, [])

  const TypePokemon = (typePokemon) => {
    return typePokemon.map((type, id) => {
      return <img className='img-icon-type' key={id} src={`../../public/types/${type}.png`} alt={type.typesPokemon} />
    })
  }

  const GenerationPokemon = (idPokemon) => {
    if(idPokemon >= 1 && idPokemon <= 151){
      return 'I';
    }else if(idPokemon >= 152 && idPokemon <= 251){
      return 'II';
    }else if(idPokemon >= 252 && idPokemon <= 386){
      return 'III';
    }else if(idPokemon >= 387 && idPokemon <= 493){
      return 'IV';
    }else if(idPokemon >= 494 && idPokemon <= 649){
      return 'V';
    }else if(idPokemon >= 650 && idPokemon <= 721){
      return 'VI';
    }else if(idPokemon >= 722 && idPokemon <= 809){
      return 'VII';
    }else if(idPokemon >= 810 && idPokemon <= 905){
      return 'VIII';
    } else {
      return 'Cargando región...';
    }
  }

  const FormatInfo = (valueWeightPokemon) => {
    return valueWeightPokemon / 10;
  }

  return (
    <main className='container-pokemon'>
      {
        loading ? (
          <Loader/>
        ) : (
          <div className="container-page-pokemon">
              <div className="container-only-one-pokemon" id={pokemon.typesPokemon[0]}>
                <div className="container-data-pokemon">
                  <p className='id-pokemon'># {pokemon.idPokemon}</p>
                  <p className="name-pokemon">{pokemon.namePokemon}</p>
                  <div className="container-type-pokemon">
                    <p className='text-type'>Tipo:</p>
                    {TypePokemon(pokemon.typesPokemon)}
                  </div>
                  <p className="generation-pokemon">Generación: {GenerationPokemon(pokemon.idPokemon)}</p>
                  <p className="weight-pokemon">Peso: {FormatInfo(pokemon.weightPokemon)} kg</p>
                  <p className="height-pokemon">Altura: {FormatInfo(pokemon.heightPokemon)} m</p>
                </div>
                <div className="container-img-pokemon">
                  {
                    pokemon.imgPokemon.imgHD ? <img src={pokemon.imgPokemon.imgHD} className="img-Pokemon" alt={pokemon.namePokemon}/> : <img src={pokemon.imgPokemon.img8Bit} className="img-Pokemon" alt={pokemon.namePokemon}/>
                  }
                </div>
                <div className="container-graphic">
                  {/* //Viene HP, ATQ, DEFENSE, ESP.ATQ, ESP.DEF, SPEED */}
                  <GraphicStat name={pokemon.namePokemon} hp={pokemon.statsPokemon[0]} att={pokemon.statsPokemon[1]} def={pokemon.statsPokemon[2]} spAtt={pokemon.statsPokemon[3]} spDef={pokemon.statsPokemon[4]} spd={pokemon.statsPokemon[5]}/>
                </div>
            </div>
            <div className="container-btn-go-back">
              <Link to='/' className='btn-go-back'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
                <p className='text-btn-go-back'>Volver</p>
              </Link>
            </div>
          </div>
        )
      }
    </main>
  )
}

export default PokemonPage