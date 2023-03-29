import React from 'react';
import PropTypes from "prop-types";

function PokemonCard(pokemonList) {
  // const pokemon = props.pokemonList[0];
  if (pokemonList.imgSrc) {
    return <figure>
      <img src={pokemonList.imgSrc} alt={pokemonList.name}
        className='card-img' />
      <figcaption >{pokemonList.name}</figcaption>
    </figure>
  } else {
    return <div>
      <p>???</p>
      <figcaption >{pokemonList.name}</figcaption>

    </div>

  }

};


PokemonCard.PropTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired).isRequired,
}





export default PokemonCard;
