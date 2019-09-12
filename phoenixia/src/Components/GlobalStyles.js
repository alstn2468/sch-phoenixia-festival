import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { TINT_COLOR, BACKGROUND_COLOR } from "../Constants/Colors";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        text-decoration: none;
        padding: 0px;
        margin: 0px;
        font-family: "soonchunhyang";
        background-color: ${BACKGROUND_COLOR};
        font-weight: 500;
        color: ${TINT_COLOR};
        -ms-overflow-style: none;
        &::-webkit-scrollbar { 
            display: none !important;
        }
    }
`;

export default globalStyles;
