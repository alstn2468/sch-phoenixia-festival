import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BACKGROUND_COLOR, TINT_COLOR } from "../Constants/Colors";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        text-decoration: none;
        padding: 0px;
        margin: 0px;
        font-family: 'Nanum Gothic', sans-serif;
        background-color: ${BACKGROUND_COLOR};
        color: ${TINT_COLOR};
    }
`;

export default globalStyles;
