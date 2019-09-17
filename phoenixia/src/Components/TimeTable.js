import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
    DAY_ONE_TIMETABLE,
    DAY_TWO_TIMETABLE,
    DAY_THR_TIMETABLE
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
`;

const TimeTableTitle = styled.div`
    width: 20%;
    font-size: 26px;
    font-weight: 600;
    padding: 10px 0px;
    border-bottom: 2px solid white;
    margin-left: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        width: 30%;
        font-size: 16px;
        margin-bottom: 10px;
        margin-left: 5px;
    }

    @media (min-width: 1300px) {
        margin-left: 10px;
        margin-bottom: 10px;
    }
`;

const TimeTableContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;

    @media screen and (max-width: 768px) {
        margin: 5px;
    }

    @media (min-width: 1300px) {
        margin: 0px;
    }
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
`;

const TimeTable = ({ timetable, leftButtonClick, rightButtonClick }) => (
    <Container>
        <ButtonContainer>
            <ButtonContent onClick={leftButtonClick}>{"<"}</ButtonContent>
        </ButtonContainer>
        {timetable === 0 ? (
            <TimeTableContainer>
                <TimeTableTitle>Day 1</TimeTableTitle>
                {DAY_ONE_TIMETABLE.map(data => (
                    <TimeTableContent>
                        <TimeTableTimeText>{data.time}</TimeTableTimeText>
                        <TimeTableContentText>
                            {data.content}
                        </TimeTableContentText>
                    </TimeTableContent>
                ))}
            </TimeTableContainer>
        ) : timetable === 1 ? (
            <TimeTableContainer>
                <TimeTableTitle>Day 2</TimeTableTitle>
                {DAY_TWO_TIMETABLE.map(data => (
                    <TimeTableContent>
                        <TimeTableTimeText>{data.time}</TimeTableTimeText>
                        <TimeTableContentText>
                            {data.content}
                        </TimeTableContentText>
                    </TimeTableContent>
                ))}
            </TimeTableContainer>
        ) : (
            <TimeTableContainer>
                <TimeTableTitle>Day 3</TimeTableTitle>
                {DAY_THR_TIMETABLE.map(data => (
                    <TimeTableContent>
                        <TimeTableTimeText>{data.time}</TimeTableTimeText>
                        <TimeTableContentText>
                            {data.content}
                        </TimeTableContentText>
                    </TimeTableContent>
                ))}
            </TimeTableContainer>
        )}
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
