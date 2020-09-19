import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Player from '../components/PlayerAvatar';
import { observer } from 'mobx-react';

@observer
class Game extends Component {
    state = {
        you: 'Anshul',
        players: [
            { id: 0, name: 'Bhushan Mali', drinks: '5' },
            { id: 0, name: 'Anshul Tilondiya', drinks: '5' },
            { id: 0, name: 'Manan', drinks: '5' },
            { id: 0, name: 'Tanisha', drinks: '5' },
            { id: 0, name: 'Divya', drinks: '5' },
        ],
    };

    render() {
        return (
            <div className="gamePage">
                <nav>
                    <div>
                        <h3>Never I Have Ever</h3>
                    </div>
                    <Button className="btn" variant="outline-success">
                        Exit
                    </Button>
                </nav>
                <section className="game-section">
                    <Container>
                        <Row>
                            <Col sm={4}>
                                <div>
                                    <h1>Player</h1>
                                </div>
                                <div>
                                    {this.state.players.map((el, index) => {
                                        return (
                                            <Player
                                                key={el.id}
                                                name={el.name}
                                                sips="3"
                                                total="10"
                                            />
                                        );
                                    })}
                                </div>
                            </Col>
                            <Col sm={8}>
                                <h1>game</h1>
                                <h3>{this.state.you}</h3>
                                <h3>You have taken 4 sips</h3>
                                <div className="Card">
                                    <h3>Never I have Ever</h3>
                                    <h3>Some Ques</h3>

                                    <div>
                                        <Button
                                            className="btn"
                                            variant="outline-success"
                                        >
                                            Drink
                                        </Button>
                                        <Button
                                            className="btn"
                                            variant="outline-success"
                                        >
                                            nope
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Game;
