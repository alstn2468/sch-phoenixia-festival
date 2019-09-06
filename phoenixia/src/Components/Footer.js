import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    border-top: 1px solid;
    border-top-color: white;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;

    @media screen and (max-width: 768px) {
        flex: 1;
        height: 60px;
    }
`;

const FooterText = styled.text`
    color: #9e9e9e;
    font-size: 12px;
`;

export default () => (
    <FooterContainer>
        <FooterText>Copyright 2019. Kim Min Su All rights reserved.</FooterText>
    </FooterContainer>
);
