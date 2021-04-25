import React, { Component } from 'react'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.fetchPokemonByName(e.target.dataset.name)
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
              const oName = poke.pokemon_species.name
              const name = this.titleCase(poke.pokemon_species.name)

              return <button aria-disabled="false" className="btn bord text-start  m-2"
                        data-name={oName}
                        data-pokemonid={id}
                        onClick={this.handleClick}
              >
                            {id}. {name}
                        </button>
            })
            return pokes
          })
        return (
            <div className="Sidebar overflow-auto">
                <div className="d-flex flex-column">
                    {kantoPokedex}
                </div>
            </div>
        )
    }
}

export default Sidebar;