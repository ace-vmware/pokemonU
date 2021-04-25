import React, { Component } from 'react'
import {Image, Button, Col, Row} from 'react-bootstrap-v5'


class Container extends Component {
    constructor(props) {
        super(props);
    }

    titleCase(string) {
        var sentence = string.toLowerCase().split(" ");
        for(var i = 0; i< sentence.length; i++){
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
      
          return sentence.join(" ");
        }

    render() {

        return (
            <div className="Container">
            {
                !this.props.focus
                ? <p>Click a Pokemon from the sidebar to see stats.</p>
                :  
                (
                    
                    <div>
                        <Row xs={12}>
                            <Col xs={12}>
                                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.props.focus.id}.svg`} alt={this.props.focus.name}></Image>
                            </Col> 
                        </Row>
                        <Row xs={12}>
                            <Col xs={12}>
                                Id: {this.props.focus.id}
                            </Col>
                        </Row>
                        <Row xs={12}>
                            <Col xs={12}>
                                Name: {this.props.focus.name}
                            </Col>
                        </Row>
                        <Row xs={12}>
                            <Col xs={12}>
                                Types: {this.props.focus.types.map((type) => {
                                    return (
                                        <Row xs={12}>
                                            <Col xs={12}>
                                                {type.type.name}
                                            </Col>
                                        </Row>
                                    )
                                 
                                    })}
                                
                            </Col>
                        </Row>
                        <Row xs={12}>
                            <Col xs={12}>
                                Height: {this.props.focus.height}
                            </Col>
                        </Row>
                        <Row xs={12}>
                            <Col xs={12}>
                                Weight: {this.props.focus.weight}
                            </Col>
                        </Row>
                        <Row xs={12}>
                            <Col xs={12}>
                                Base Stats:
                            </Col>
                        </Row>
                        <Row xs={12}>
                            <Col xs={12}>
                                {this.props.focus.stats.map((stat) => {
                                    return (
                                        <Row xs={12}>
                                            <Col xs={12}>
                                                {stat.stat.name}: {stat.base_stat}
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </Col>
                        </Row>
                    </div>  
                )
            }

                
            </div>
        )
    }
}

export default Container;