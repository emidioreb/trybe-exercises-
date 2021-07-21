// import './App.css';
import pokemons from './Data'
import React from 'react';
import poke from './Pokemon'

class App extends React.Component {
  render(){
    return(
      <main>
        {pokemons.map((pokemon) => < pokemon key = {pokemon.id} pokemonInfo = {pokemon}/>)}
      </main>
    )
  }
}

export default App;
