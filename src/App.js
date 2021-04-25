import './App.css';
import React, { Component } from 'react'
import {Col, Row} from 'react-bootstrap-v5'
import { Pokedex } from 'pokeapi-js-wrapper'
import Menu from "./Menu"
import Sidebar from "./Sidebar"
import Container from "./Container"

const customOptions = {
  protocol: "https",
  hostName: "pokeapi.co/",
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000, // 5s
  cacheImages: true
}

// Create Pokedex object for pokeapi-js-wrapper
const P = new Pokedex(customOptions)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      focus: undefined
    }
    this.fetchPokemonByName = this.fetchPokemonByName.bind(this);
    this.getRegion = this.getRegion.bind(this);
  }

  async componentDidMount() {
    // Load Pokedex of Region 1 onload
    this.getPokedex();
  }

  async getPokedex() {
    // fetch all Pokemon from region-1 and set this.state.pokemon
    const kantoPokedex = await P.getPokedexByName("kanto")
    this.setState({
      pokemon: [kantoPokedex.pokemon_entries]
    })
  }

  // pass this function as props to Sidebar component
  async fetchPokemonByName(name) {
    // name argument will be event.target.dataset.name
    // use this to make a new API call for Pokemon details
    // then setState this.state.focus
    const fetchedPokemon = await P.getPokemonByName(name)
    this.setState({
      focus: fetchedPokemon
    })
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${name}.svg`
    this.state.focus["src"] =  src
  }

    // pass this function as props to Menu component
  async getRegion(e) {
    // returned argument will be event.target.dataset.type
    // use to generate new Pokedex and setState
    const regionPokedex = await P.getPokedexByName(e)
    this.setState({
      pokemon: [regionPokedex.pokemon_entries]
    })
  }
  

  render() {

    return(
      <div className="App overflow-hidden">
        <Menu getRegion={this.getRegion}/>
        <Row className="d-flex justify-content-center">
          <Col xs={3}>
            <Sidebar pokemon={this.state.pokemon} fetchPokemonByName={this.fetchPokemonByName}/>
          </Col>
          <Col className="d-flex align-items-center" xs={6}>
            <Container focus={this.state.focus} />
          </Col>
        </Row>
        
      </div>
    )
  }
}

export default App;
