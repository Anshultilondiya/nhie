import React, { Component } from 'react';
// import Button from 'antd';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class Home extends Component {
    render() {
        return (
            <div>
                <nav style={{
                    display:"block"
                }}>
                    <h1>Never I Have Ever</h1>
                </nav>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <div>
                                <h1>Players List</h1>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <h1>Players Game</h1>
                            </div>
                        </Grid>
                        <Grid item xs>
                            <div>
                                <h1>Players Chat Box</h1>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
