import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createBrowserHistory} from "history";
import * as serviceWorker from './serviceWorker';
import {CssBaseline} from "@material-ui/core";
import {Router} from "react-router";
import {Redirect, Route, Switch} from "react-router-dom";
import App from "./App";
import UsersList from "./users/pages/users.list";

const history = createBrowserHistory();

ReactDOM.render(
    <>
        {/*Sets the baseline css  from MaterialUI */}
        <CssBaseline/>
        <Router history={history}>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/users" component={UsersList}/>
                <Redirect to={'/'}/>
            </Switch>
        </Router>
    </>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
