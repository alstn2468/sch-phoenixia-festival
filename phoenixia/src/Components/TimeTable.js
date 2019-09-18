import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
    DAY_ONE_TIMETABLE,
    DAY_TWO_TIMETABLE,
    DAY_THR_TIMETABLE,
    STD_UNION_TIMETABLE,
    PHOENIX_SQUARE_TIMETABLE,
    COMMON_TIMETABLE
} from "../Constants/TimeTableData";
import { SCH_LOGO_COLOR_TWO } from "../Constants/Colors";

const Container = styled.div`
    z-index: 1;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.div`
    flex: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex: 1;
    }

    @media (min-width: 1300px) {
        flex: 2.5;
    }
`;

const ButtonContent = styled.button`
    border: none;
    font-size: 40px;
    font-weight: 800;
    :hover {
        color: ${SCH_LOGO_COLOR_TWO};
    }

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

const TimeTableContainer = styled.div`
    border: 1px solid white;
    flex: 7;
    padding: 10px;

    @media screen and (max-width: 768px) {
        flex: 8;
    }

    @media (min-width: 1300px) {
        flex: 5;
        padding: 5px;
    }
`;

const TimeTableTitle = styled.div`
    width: 20%;
    font-size: 26px;
    font-weight: 600;
    padding: 10px 0px;
    border-bottom: 2px solid white;
    margin-left: 10px;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        padding: 5px 0px;
        width: 30%;
        font-size: 16px;
        margin-bottom: 5px;
        margin-left: 0px;
    }

    @media (min-width: 1300px) {
        margin-left: 10px;
        margin-bottom: 5px;
        font-size: 20px;
        padding: 5px 0px;
    }
`;

const LocationTitle = styled.div`
    font-size: 18px;
    padding: 10px 0px;
    margin-left: 20px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin-left: 5px;
    }

    @media (min-width: 1300px) {
        margin-left: 10px;
        padding: 5px 0px;
        font-size: 16px;
    }
`;

const TimeTableContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const TimeTableTimeText = styled.div`
    flex: 1;
    padding: 10px 0px;
    border: 1px solid white;
    border-radius: 5px;
    margin: 5px 10px;

    @media screen and (max-width: 768px) {
        font-size: 10px;
        padding: 5px 5px;
        margin: 5px 0px;
    }

    @media (min-width: 1300px) {
        font-size: 12px;
    }
`;

const TimeTableContentText = styled.div`
    flex: 1;
    padding: 10px 0px;
    border: 1px solid white;
    border-radius: 5px;
    margin: 5px 10px;

    @media screen and (max-width: 768px) {
        font-size: 10px;
        padding: 5px 0px;
        margin: 5px 0x;
        flex: 2;
    }

    @media (min-width: 1300px) {
        font-size: 12px;
    }
`;

const TimeTable = ({ timetable, leftButtonClick, rightButtonClick }) => (
    <Container>
        <ButtonContainer>
            <ButtonContent onClick={leftButtonClick}>{"<"}</ButtonContent>
        </ButtonContainer>
        <TimeTableContainer>
            <TimeTableTitle>Day {timetable + 1}</TimeTableTitle>
            <LocationTitle>소운동장</LocationTitle>
            {timetable === 0 ? (
                <>
                    {DAY_ONE_TIMETABLE.map(data => (
                        <TimeTableContent>
                            <TimeTableTimeText>{data.time}</TimeTableTimeText>
                            <TimeTableContentText>
                                {data.content}
                            </TimeTableContentText>
                        </TimeTableContent>
                    ))}
                </>
            ) : timetable === 1 ? (
                <>
                    {DAY_TWO_TIMETABLE.map(data => (
                        <TimeTableContent>
                            <TimeTableTimeText>{data.time}</TimeTableTimeText>
                            <TimeTableContentText>
                                {data.content}
                            </TimeTableContentText>
                        </TimeTableContent>
                    ))}
                </>
            ) : (
                <>
                    {DAY_THR_TIMETABLE.map(data => (
                        <TimeTableContent>
                            <TimeTableTimeText>{data.time}</TimeTableTimeText>
                            <TimeTableContentText>
                                {data.content}
                            </TimeTableContentText>
                        </TimeTableContent>
                    ))}
                </>
            )}
            <LocationTitle>학생회관</LocationTitle>
            {STD_UNION_TIMETABLE.map(data => (
                <TimeTableContent>
                    <TimeTableTimeText>{data.time}</TimeTableTimeText>
                    <TimeTableContentText>{data.content}</TimeTableContentText>
                </TimeTableContent>
            ))}
            <LocationTitle>피닉스 광장</LocationTitle>
            {PHOENIX_SQUARE_TIMETABLE.map(data => (
                <TimeTableContent>
                    <TimeTableTimeText>{data.time}</TimeTableTimeText>
                    <TimeTableContentText>{data.content}</TimeTableContentText>
                </TimeTableContent>
            ))}
            <LocationTitle>공통</LocationTitle>
            {COMMON_TIMETABLE.map(data => (
                <TimeTableContent>
                    <TimeTableTimeText>{data.time}</TimeTableTimeText>
                    <TimeTableContentText>{data.content}</TimeTableContentText>
                </TimeTableContent>
            ))}
        </TimeTableContainer>
        <ButtonContainer>
            <ButtonContent onClick={rightButtonClick}>{">"}</ButtonContent>
        </ButtonContainer>
    </Container>
);

TimeTable.propTypes = {
    timetable: PropTypes.number.isRequired,
    leftButtonClick: PropTypes.func.isRequired,
    rightButtonClick: PropTypes.func.isRequired
};

export default TimeTable;
