import React from "react";
import Router from "./Router";
import GlobalStyles from "Components/GlobalStyles";
import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";
import "../../index.css";

function App() {
    return (
        <>
            <Router />
            <GlobalStyles />
        </>
    );
}
export default App;
