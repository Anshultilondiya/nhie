import React, { Component } from 'react';
import { FaGlassCheers } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';
import { Button, FormControl } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class Home extends Component {
    state = {
        username: '',
        gameCode: '',
        showJoin: false,
        showCreate: false,
        invalid: true,
        copied: false,
        error: {
            username: false,
            code: false,
        },
    };

    uniqueGameId = () => {
        let n = Math.floor(100000 + Math.random() * 900000);
        this.setState({
            gameCode: n,
            showJoin: false,
            copied: false,
            showCreate: true,
        });
    };
    joinGame = () => {
        this.setState({ gameCode: '', showJoin: true, showCreate: false });
    };

    addUserName = (event) => {
        this.setState({ username: event.target.value });
    };
    addGameCode = (event) => {
        if (event.target.value.length === 6) {
            this.setState({ gameCode: event.target.value, invalid: false });
        }
    };

    letsPlay = (user = this.state.username, code = this.state.gameCode) => {
        if (user === '') {
            this.setState({ error: { username: true } });
        }
        if (code === '') {
            this.setState({ error: { code: true }, showJoin: true });
        }
    };

    render() {
        let genCard = (
            <div
                style={{
                    marginTop: '25px',
                }}
            >
                <p
                    style={{
                        fontSize: '90%',
                        color: '#777',
                    }}
                >
                    A game is created with game code : {this.state.gameCode}{' '}
                    <br />
                    You can share with code with your friends
                </p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginBottom: '25px',
                    }}
                >
                    <h3 id="game-id" style={{ marginRight: '10px' }}>
                        {this.state.gameCode} {'  '}
                    </h3>
                    <CopyToClipboard
                        text={this.state.gameCode}
                        onCopy={() => this.setState({ copied: true })}
                    >
                        <Button variant="outline-success">
                            Copy to Clipboard
                        </Button>
                    </CopyToClipboard>
                </div>
                <Button className="btn" variant="outline-success">
                    Let's Play
                </Button>{' '}
            </div>
        );

        let joinCard = (
            <div
                style={{
                    marginTop: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <p
                    style={{
                        color: '#777',
                        marginBottom: '10px',
                    }}
                >
                    Please Enter the Joining Code:{' '}
                </p>

                <FormControl
                    className="input-field"
                    placeholder="Enter 6 Digit Game Code"
                    aria-label="gameCode"
                    onChange={this.addGameCode}
                />
                {this.state.error.code ? <BiError /> : null}
                <div>
                    <Button
                        style={{ marginTop: '20px' }}
                        className="btn"
                        variant="outline-success"
                        onClick={this.letsPlay}
                    >
                        Let's Play
                    </Button>{' '}
                </div>
            </div>
        );

        return (
            <div className="Wrapper">
                <div className="welcome-screen">
                    <div className="heading">
                        <h1>
                            Never I Have Ever
                            <span style={{ paddingLeft: '20px' }}>
                                <FaGlassCheers />
                            </span>
                        </h1>
                    </div>

                    <div className="content">
                        <FormControl
                            className="input-field"
                            placeholder="Enter Username"
                            aria-label="username"
                            onChange={this.addUserName}
                        />
                        {this.state.error.username ? <BiError /> : null}
                        <div className="homeButtons">
                            <Button
                                className="btn"
                                variant="outline-success"
                                onClick={this.uniqueGameId}
                            >
                                Create
                            </Button>
                            <Button
                                className="btn"
                                variant="outline-success"
                                onClick={this.joinGame}
                            >
                                Join
                            </Button>{' '}
                        </div>
                        {this.state.showCreate ? genCard : null}
                        {this.state.showJoin ? joinCard : null}
                    </div>
                </div>
            </div>
        );
    }
}
