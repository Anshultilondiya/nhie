import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Home extends Component {
    state = {
        you: '',
        players: [
            { id: 0, name: 'Bhushan', drinks: '5' },
            { id: 0, name: 'Anshul', drinks: '5' },
            { id: 0, name: 'Manan', drinks: '5' },
            { id: 0, name: 'Tanisha', drinks: '5' },
            { id: 0, name: 'Divya', drinks: '5' },
        ],
    };

    render() {
        return (
            <div style={{ margin: '0' }}>
                <nav className="navbar">Never I Have Ever</nav>
                <input type="text" name="Your Name"></input>
                <input type="submit" value="Submit"></input>
                <div className="game-container">
                    <Container>
                        <Row>
                            <Col sm={4}>
                                <div>
                                    <h1>Player List</h1>
                                </div>
                            </Col>
                            <Col sm={8}>
                                <div>
                                    <h1>THe game</h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
