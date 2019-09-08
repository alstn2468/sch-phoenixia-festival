import React from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { BACKGROUND_COLOR } from "../Constants/Colors";

export default () => (
    <ScrollUpButton
        style={{
            fill: "white",
            backgroundColor: BACKGROUND_COLOR,
            bottom: 120
        }}
    ></ScrollUpButton>
);
