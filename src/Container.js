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
                    
                    <div className="d-flex justify-content-center">
                        <div className="card shadow w-50 h-50 p-2">
                            <Row className="my-1" xs={12}>
                                <Col xs={12}>
                                    <Image className="w-50 mb-3" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.props.focus.id}.svg`} alt={this.props.focus.name}></Image>
                                </Col>
                            </Row>
                            <Row className="my-1" xs={12}>
                                <Col className="d-flex yellow justify-content-end" xs={6}>
                                    <b>Id:</b>
                                </Col>
                                <Col className="d-flex justify-content-start" xs={6}>
                                    {this.props.focus.id}
                                </Col>
                            </Row>
                            <Row className="my-1" xs={12}>
                                <Col className="yellow d-flex justify-content-end" xs={6}>
                                    <b>Name</b>:
                                </Col>
                                <Col className="d-flex justify-content-start" xs={6}>
                                    {this.props.focus.name}
                                </Col>
                                
                            </Row>
                            <Row className="my-1" xs={12}>
                                <Col className="d-flex yellow justify-content-end" xs={6}>
                                    <b>Height</b>:
                                </Col>
                                <Col className="d-flex justify-content-start" xs={6}>
                                    {this.props.focus.height}
                                </Col>
                            </Row>
                            <Row className="my-1" xs={12}>
                                <Col className="d-flex yellow justify-content-end" xs={6}>
                                    <b>Weight</b>:
                                </Col>
                                <Col className="d-flex justify-content-start" xs={6}>
                                    {this.props.focus.weight}
                                </Col>
                            </Row>
                            <Row className="my-1" xs={12}>
                                <Col className="d-flex yellow justify-content-end" xs={6}>
                                    <b>Types</b>:
                                </Col>
                                <Col xs={6}>
                                    {this.props.focus.types.map((type) => {
                                        return (
                                                <Col className="d-flex justify-content-start" xs={6}>
                                                    {type.type.name}
                                                </Col>
                                        )
                            
                                        })}
                            
                                </Col>
                            </Row>
                            <Row className="my-1" xs={12}>
                                <Col className="d-flex yellow justify-content-end" xs={6}>
                                    <b>Base Stats</b>:
                                </Col>
                                <Col xs={6}>
                                    {this.props.focus.stats.map((stat) => {
                                        return (
                                            <Col className="d-flex justify-content-start">
                                                {stat.stat.name}: {stat.base_stat}
                                            </Col>


                                            

                                        )
                                    })}
                                </Col>
                            </Row>
                        </div>
                    </div>  
                )
            }

                
            </div>
        )
    }
}

export default Container;