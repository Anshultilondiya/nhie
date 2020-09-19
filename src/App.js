import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Game from './pages/Game';
import appStore from './store/appStore';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/game">
                        <Game />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
