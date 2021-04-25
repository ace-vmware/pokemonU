import './App.css';
import React, { Component } from 'react'
import {Modal, Button, Col, Row} from 'react-bootstrap-v5'
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
const P = new Pokedex(customOptions)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      focus: undefined
    }
    this.fetchPokemonByName = this.fetchPokemonByName.bind(this);
  }

  async componentDidMount() {
    this.getPokedex();
  }

  async getPokedex() {
    const kantoPokedex = await P.getPokedexByName("kanto")
    this.setState({
      pokemon: [kantoPokedex.pokemon_entries]
    })
  }

  async fetchPokemonByName(name) {
    const fetchedPokemon = await P.getPokemonByName(name)
    this.setState({
      focus: fetchedPokemon
    })
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${name}.svg`
    this.state.focus["src"] =  src
  }
  

  render() {

    return(
      <div className="App">
        <Menu />
        <Row>
          <Col xs={4}>
            <Sidebar pokemon={this.state.pokemon} fetchPokemonByName={this.fetchPokemonByName}/>
          </Col>
          <Col xs={8}>
            <Container focus={this.state.focus} />
          </Col>
        </Row>
        
      </div>
    )
  }
}

export default App;
