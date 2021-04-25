import React, { Component } from 'react'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.fetchPokemonByName(e.target.dataset.pokemonid)
    }

    titleCase(string) {
        var sentence = string.toLowerCase().split(" ");
        for(var i = 0; i< sentence.length; i++){
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
      
          return sentence.join(" ");
        }

    render() {
        const kantoPokedex = this.props.pokemon.map((pokemon) => {
            const pokes = pokemon.map((poke) => {
              const id = poke.entry_number
              const name = this.titleCase(poke.pokemon_species.name)

              return <p className="border border-dark"
                        data-pokemonid={id}
                        onClick={this.handleClick}
              >
                            {id}. {name}
                        </p>
            })
            return pokes
          })
        return (
            <div className="Sidebar">
                <div className="d-flex flex-column">
                {kantoPokedex}
                </div>
            </div>
        )
    }
}

export default Sidebar;