import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DAY_ONE_TIMETABLE } from "../Constants/TimeTableData";

const SwiperContainer = styled.div`
    z-index: 1;
    width: 80%;
    overflow: auto;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TimeTableContainer = styled.div`
    border: 1px solid white;
    width: 80%;
    padding: 10px;

    @media screen and (max-width: 768px) {
        width: 100%;
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
        margin-left: 5px;
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

const TimeTable = ({ timetable }) => (
    <SwiperContainer>
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
                {DAY_ONE_TIMETABLE.map(data => (
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
                {DAY_ONE_TIMETABLE.map(data => (
                    <TimeTableContent>
                        <TimeTableTimeText>{data.time}</TimeTableTimeText>
                        <TimeTableContentText>
                            {data.content}
                        </TimeTableContentText>
                    </TimeTableContent>
                ))}
            </TimeTableContainer>
        )}
    </SwiperContainer>
);

TimeTable.propTypes = {
    timetable: PropTypes.number.isRequired
};

export default TimeTable;
