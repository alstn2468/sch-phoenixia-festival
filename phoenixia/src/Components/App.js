import React from "react";
import Router from "./Router";
import GlobalStyles from "Components/GlobalStyles";
import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";

function App() {
    return (
        <>
            <Router />
            <GlobalStyles />
        </>
    );
}
export default App;
