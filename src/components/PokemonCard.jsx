import React from 'react';

function PokemonCard() {
  const pokemon = pokemonList[1];
  if (pokemon.imgSrc) {
    return <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name}
        className='card-img' />
      <figcaption >{pokemon.name}</figcaption>
    </figure>
  } else {
    return <div>
      <p>???</p>
      <figcaption >{pokemon.name}</figcaption>

    </div>

  }




};

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default PokemonCard;
