import React from 'react';
import PropTypes from "prop-types";

function PokemonCard({imgSrc,name}) {
  // const pokemon = props.pokemonList[0];
  if (imgSrc) {
    return <figure>
      <img src={imgSrc} alt={name}
        className='card-img' />
      <figcaption >{name}</figcaption>
    </figure>
  } else {
    return <div>
      <p>???</p>
      <figcaption >{name}</figcaption>

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
