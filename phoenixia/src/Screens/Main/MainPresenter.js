import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FestivalTimer from "../../Components/FestivalTimer";
import LineUp from "../../Components/LineUp";
import Delivery from "../../Components/Delivery";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const FireWorksContainer = styled.canvas`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 0;
`;

const LocationContainer = styled.div`
    z-index: 1;
`;

const MainPresenter = ({ time, error }) => (
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
        <Container id="location">
            <LocationContainer>Location</LocationContainer>
        </Container>
    </>
);

MainPresenter.propTypes = {
    time: PropTypes.number.isRequired,
    error: PropTypes.string
};

export default MainPresenter;
