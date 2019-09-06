import React from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Header from "../Components/Header";
import Main from "../Screens/Main";

export default () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Main} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
};
