import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from './pages/App'
import Game from './pages/Game'

export default function Routing() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/ninja">
                        <Game />
                    </Route>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}