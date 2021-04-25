import './App.css';
import React, { Component } from 'react'
import { Pokedex } from 'pokeapi-js-wrapper'

const customOptions = {
  protocol: "https",
  hostName: "pokeapi.co/",
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000, // 5s
  cacheImages: true
}
const P = new Pokedex(customOptions)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
  }

  async componentDidMount() {
    const kantoPokedex = await P.getPokedexByName("kanto")
    this.setState({
      pokemon: [kantoPokedex.pokemon_entries]
    })
  }

  async fetchPokemonByName(name) {
    const fetchedPokemon = await P.getPokemonByName(name)
    console.log(fetchedPokemon)
  }

  titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

    return sentence.join(" ");
  }
  

  render() {
      const allImages = this.state.pokemon.map((pokemon) => {
        const pokes = pokemon.map((poke) => {
          console.log(poke)
          const id = poke.entry_number
          const name = this.titleCase(poke.pokemon_species.name)
          const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
          // return <img src={src} alt="poke"/>
          return <p>{id}. {name}</p>
        })
        return pokes
      })
    return(
      <div>
        <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        alt="Pikachu"
      />
      {allImages}
      </div>
    )
  }
}

export default App;
