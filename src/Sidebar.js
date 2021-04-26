import React, { Component } from 'react'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // passes data attribute of sidebar Pokemon to App's fetchPokemonByName()
    // this data is used to setState of app.state.focus
    handleClick(e) {
        this.props.fetchPokemonByName(e.target.dataset.name)
    }

    // for capitalizing Pokedex data in sidebar 
    titleCase(string) {
        var sentence = string.toLowerCase().split(" ");
        for(var i = 0; i< sentence.length; i++){
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
      
          return sentence.join(" ");
        }

    render() {
        // parse array of arrays
        const kantoPokedex = this.props.pokemon.map((pokemon) => {
            // parse individual arrays of Pokemon data
            const pokes = pokemon.map((poke) => {
              const id = poke.entry_number
              const oName = poke.pokemon_species.name
              const name = this.titleCase(poke.pokemon_species.name)
            
            // return HTML button with Id and Name as well as needed
            // data attributes for app functions
              return <button 
                        aria-disabled="false" 
                        className="btn bord text-start  m-2"
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
            // returns Kanto Pokedex or another Region's Pokedex if 
            // app.state.pokemon is changed by region's dropdown
            <div className="Sidebar overflow-auto">
                <div className="d-flex flex-column">
                    {kantoPokedex}
                </div>
            </div>
        )
    }
}

export default Sidebar;