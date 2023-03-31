import React from 'react';
import PokemonCard from './components/PokemonCard';



const pokemonList = [
  {
    index: "1",
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    index: "2",
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    index: "3",
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    index: "4",
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    index: "5",
    name: "mew",
  },
];


function NavBar({ count, setCount,pokemonList }) {



  
  const handleClickPre = () => {
    setCount(count - 1)
   
  }
  const handleClickNex = () => {
    setCount(count + 1)
  
  }

  return (<>
  

    {count > 0 ?<button onClick={handleClickPre}>Previous</button>:<button>premier Pokemon</button>}
    {count < pokemonList.length -1? ( <button onClick={handleClickNex}>Next</button>) :<button>dernier Pokemon</button>} 
  </>)

}

export default NavBar;