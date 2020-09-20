import React, { Component } from 'react';

export default class Timer extends Component {
    state = {
        minutes: 0,
        seconds: 30,
    };

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds } = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1,
                }));
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render() {
        const { minutes, seconds } = this.state;
        return (
            <div>
                {minutes === 0 && seconds === 0 ? (
                    <h1>Busted!</h1>
                ) : (
                    <h1>
                        Next Question in: {minutes}:
                        {seconds < 10 ? `0${seconds}` : seconds}
                    </h1>
                )}
            </div>
        );
    }
}
