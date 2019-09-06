import React from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Header from "../Components/Header";
import Main from "../Screens/Main";
import Footer from "../Components/Footer";
import TopButton from "../Components/TopButton";

export default () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Main} />
                <Redirect from="*" to="/" />
            </Switch>
            <TopButton />
            <Footer />
        </Router>
    );
};
