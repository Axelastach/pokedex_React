import React from 'react';

import PokemonCard from './components/PokemonCard';





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


export default NavBar;