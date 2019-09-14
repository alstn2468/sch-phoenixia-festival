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
    z-index: 1;

    @media screen and (max-width: 768px) {
        flex: 1;
        height: 60px;
    }
`;

const FooterText = styled.span`
    color: #9e9e9e;
    font-size: 14px;

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const NameLinkText = styled.a`
    font-size: 14px;
    color: #d1d1d1;

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

export default () => (
    <FooterContainer>
        <FooterText>
            Copyright 2019.{" "}
            <NameLinkText href="https://github.com/alstn2468">
                Kim Min Su
            </NameLinkText>{" "}
            All rights reserved.
        </FooterText>
    </FooterContainer>
);
