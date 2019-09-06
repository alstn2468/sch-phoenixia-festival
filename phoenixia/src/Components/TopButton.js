import React from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

export default () => (
    <ScrollUpButton
        EasingType="easeInCubic"
        style={{
            fill: "white",
            backgroundColor: "rgba(0,0,0,0)",
            bottom: 120
        }}
    ></ScrollUpButton>
);
