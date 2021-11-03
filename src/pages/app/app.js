import React, { Component } from 'react';

import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"

import './app.css';

import Home from '../home/home'
import Coffee from '../coffee/coffee'

class App extends Component {
    render() {
        const { history } = this.props

        return (
            <div className="App">
                <Switch>
                    <Route history={history} path='/home' component={Home} />
                    <Route history={history} path='/coffee' component={Coffee} />
                    <Redirect from='*' to='/home' />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App)