import React from "react";
import styled from "styled-components";
import {
    SCH_LOGO_COLOR_ONE,
    SCH_LOGO_COLOR_TWO,
    SCH_LOGO_COLOR_THR
} from "../Constants/Colors";

const LineUpContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    z-index: 1;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 76%;
    }
`;

const DayLineUpContainer = styled.div`
    flex: 1;
    margin: 5px 20px;
    padding: 10px;

    @media screen and (max-width: 768px) {
        width: 70%;
        height: 100px;
        margin: 5px 0px;
    }
`;

const DayTextContainer = styled.div`
    margin: 15px 0px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${props => props.color};

    @media screen and (max-width: 768px) {
        margin: 5px 0px;
        padding: 5px;
    }
`;

const DayText = styled.h2`
    text-align: center;
    font-size: 24px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`;

const DetailContainer = styled.div`
    border: 2px solid ${props => props.color};
    border-radius: 10px;
    height: 350px;

    @media screen and (max-width: 768px) {
        height: 100px;
    }
`;

const LineUp = () => (
    <LineUpContainer>
        <DayLineUpContainer>
            <DayTextContainer color={SCH_LOGO_COLOR_ONE}>
                <DayText>Day 1</DayText>
            </DayTextContainer>
            <DetailContainer color={SCH_LOGO_COLOR_ONE}></DetailContainer>
        </DayLineUpContainer>
        <DayLineUpContainer>
            <DayTextContainer color={SCH_LOGO_COLOR_TWO}>
                <DayText>Day 2</DayText>
            </DayTextContainer>
            <DetailContainer color={SCH_LOGO_COLOR_TWO}></DetailContainer>
        </DayLineUpContainer>
        <DayLineUpContainer>
            <DayTextContainer color={SCH_LOGO_COLOR_THR}>
                <DayText>Day 3</DayText>
            </DayTextContainer>
            <DetailContainer color={SCH_LOGO_COLOR_THR}></DetailContainer>
        </DayLineUpContainer>
    </LineUpContainer>
);

export default LineUp;
