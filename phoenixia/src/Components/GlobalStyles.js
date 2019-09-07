import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { TINT_COLOR } from "../Constants/Colors";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        text-decoration: none;
        padding: 0px;
        margin: 0px;
        font-family: "soonchunhyang";
        background-color: rgba(0,0,0,0);
        font-weight: 500;
        color: ${TINT_COLOR};
    }
`;

export default globalStyles;
