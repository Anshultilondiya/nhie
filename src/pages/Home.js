import React, { Component } from 'react';
// import Button from 'antd';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-image: linear-gradient(
        137.45deg,
        #54b454 0%,
        #2f8f83 58.17%,
        #00525f 100%
    );
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default class Home extends Component {
    render() {
        return (
            <Wrapper>
                <div
                    style={{
                        backgroundColor: 'rgb(236, 244, 243,0.4)',
                        width: '60%',
                        margin: 'auto',
                        padding: '50px',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '500%',
                            color: 'white',
                            margin: '30px',
                        }}
                    >
                        Never I have Ever
                    </h1>
                    <div>
                        <Button variant="outlined" color="primary">
                            Create a game
                        </Button>
                        <p>Link</p>
                        <Button variant="outlined" color="primary">
                            Let's Play
                        </Button>
                    </div>
                </div>
            </Wrapper>
        );
    }
}
