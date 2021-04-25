import React, { Component } from 'react'
import {Image, Row, Col} from 'react-bootstrap-v5'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.getRegion(e.target.dataset.type)
    }

    render() {
        return (
            <div className="flex-column mb-4">
                <div className="Menu d-flex justify-content-center my- p-4">
                    <Row xs={12}>
                        <Col xs={8}>
                            <h1 className="me-3">pokemon</h1>
                        </Col>
                        <Col xs={1}>
                            <Image
                                src="https://i.imgur.com/i5d9Twq.png"
                            ></Image>
                        </Col>
                    </Row>
                </div>
                <div className="d-flex justify-content-center align-items-baseline">
                    <h6>Filter by Region:</h6>
                    <div class="dropdown mx-2">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Regions
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" onClick={this.handleClick} data-type="2">Kanto</a></li>
                            <li><a class="dropdown-item" onClick={this.handleClick} data-type="3">Johto</a></li>
                            <li><a class="dropdown-item" onClick={this.handleClick} data-type="4">Hoenn</a></li>
                            <li><a class="dropdown-item" onClick={this.handleClick} data-type="5">Sinnoh</a></li>
                            <li><a class="dropdown-item" onClick={this.handleClick} data-type="8">Unova</a></li>

                        </ul>
                        </div>
                </div>
            </div>
        )
    }
}

export default Menu;