import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FestivalTimer from "../../Components/FestivalTimer";
import LineUp from "../../Components/LineUp";
import Delivery from "../../Components/Delivery";
import TimeTable from "../../Components/TimeTable";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FireWorksContainer = styled.canvas`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 0;
`;

const MainPresenter = ({
    time,
    error,
    timetable,
    leftButtonClick,
    rightButtonClick
}) => (
    <>
        <FireWorksContainer id="canvas" />
        <Container id="timer">
            <FestivalTimer time={time} />
        </Container>
        <Container id="line-up">
            <LineUp />
        </Container>
        <Container id="Delivery">
            <Delivery />
        </Container>
        <Container id="timetable">
            <TimeTable
                timetable={timetable}
                leftButtonClick={leftButtonClick}
                rightButtonClick={rightButtonClick}
            />
        </Container>
    </>
);

MainPresenter.propTypes = {
    time: PropTypes.number.isRequired,
    error: PropTypes.string,
    timetable: PropTypes.number.isRequired,
    leftButtonClick: PropTypes.func.isRequired,
    rightButtonClick: PropTypes.func.isRequired
};

export default MainPresenter;
