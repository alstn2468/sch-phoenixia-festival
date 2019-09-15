import React from "react";
import styled from "styled-components";

const SwiperContainer = styled.div`
    z-index: 1;
    display: flex;
    width: 60%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;

const SwiperItemContainer = styled.div`
    border: 1px solid white;
    display: inline-block;
    width: 100%;
    height: 500px;
    padding: 10px;
    margin: 5px;

    @media screen and (max-width: 768px) {
        height: 300px;
    }
`;

export default () => (
    <SwiperContainer>
        <SwiperItemContainer>1일차</SwiperItemContainer>
        <SwiperItemContainer>2일차</SwiperItemContainer>
        <SwiperItemContainer>3일차</SwiperItemContainer>
    </SwiperContainer>
);
