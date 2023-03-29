import React from 'react';

function PokemonCard(props) {
  // const pokemon = props.pokemonList[0];
  if (props.imgSrc) {
    return <figure>
      <img src={props.imgSrc} alt={props.name}
        className='card-img' />
      <figcaption >{props.name}</figcaption>
    </figure>
  } else {
    return <div>
      <p>???</p>
      <figcaption >{props.name}</figcaption>

    </div>

  }




};



export default PokemonCard;
