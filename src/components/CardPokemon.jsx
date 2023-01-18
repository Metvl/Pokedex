import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import bug from '../../public/types/bug.png'
import dark from '../../public/types/dark.png'
import dragon from '../../public/types/dragon.png'
import electric from '../../public/types/electric.png'
import fairy from '../../public/types/fairy.png'
import fighting from '../../public/types/fighting.png'
import fire from '../../public/types/fire.png'
import flying from '../../public/types/flying.png'
import ghost from '../../public/types/ghost.png'
import grass from '../../public/types/grass.png'
import ground from '../../public/types/ground.png'
import ice from '../../public/types/ice.png'
import normal from '../../public/types/normal.png'
import poison from '../../public/types/poison.png'
import psychic from '../../public/types/psychic.png'
import rock from '../../public/types/rock.png'
import steel from '../../public/types/steel.png'
import water from '../../public/types/water.png'

import '../index.css'

export const CardPokemon = ({ pokemon }) => {

    const TypePokemon = (typePokemon) => {
        return typePokemon.map((type, id) => {
            // return <img className='img-type' key={id} src={type.type.name} alt={type.type.name} />
            return <img className='img-type' key={id} src={`../../public/types/${type.type.name}.png`} alt={type.type.name} />
        })
    }

    const circleID = () => {
        const elements = document.querySelectorAll("p.general-id");
        elements.forEach(element => {
            let width = getComputedStyle(element).width;
            element.style.height = width;
        });
    }

    useEffect(() => {
        circleID();
    }, [])

    return (
        <Link to={`/pokemon/${pokemon.id}`} className='general-card-pokemon'>
            <div className="container-general_id">
                <p className="general-id">{pokemon.id}</p>
            </div>
            <div className="container-img">
                {
                    pokemon.sprites.other.dream_world.front_default ? <img src={pokemon.sprites.other.dream_world.front_default} alt={`Pokemon ${pokemon.name}`} />
                        :
                        <img src={pokemon.sprites.front_default} alt={`Pokemon ${pokemon.name}`} />
                }
            </div>
            <div className="container-general-info">
                <p className="general-name">{pokemon.name}</p>
                <div className="container_general_types">
                    {TypePokemon(pokemon.types)}
                </div>
            </div>
        </Link>
    )
}
