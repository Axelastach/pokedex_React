import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard';
import { func } from 'prop-types';

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

function NavBar({ count, setCount }) {



  const handleClickPre = () => {
    setCount(count - 1)
  }
  const handleClickNex = () => {
    setCount(count + 1)
  }

  return (<><button onClick={handleClickPre}>Previous</button>
    <button onClick={handleClickNex}>Next</button>
  </>)

}

function App() {

  const [count, setCount] = useState(0)

  return (


    <div>

      <PokemonCard name={pokemonList[count].name} imgSrc={pokemonList[count].imgSrc} />

      <NavBar count={count} setCount={setCount} />

    </div>
  );
}






export default App
