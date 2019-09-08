import React from "react";
import styled from "styled-components";
import Timer from "react-compound-timer";
import PropTypes from "prop-types";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TimerContainer = styled.div`
    border: 1px solid white;
    padding: 25px 30px 10px 30px;
    border-radius: 20px;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0);

    @media screen and (max-width: 768px) {
        padding: 15px 30px 10px 30px;
    }
`;

const TimerText = styled.div`
    font-size: 100px;
    font-family: "Aldrich", sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

const FireWorksContainer = styled.canvas`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 0;

    background-color: rgba(0, 0, 0, 0);
`;

const LineUpContainer = styled.div`
    flex-direction: row;
    z-index: 1;
`;

const TransportationContainer = styled.div`
    z-index: 1;
`;

const LocationContainer = styled.div`
    z-index: 1;
`;

const MainPresenter = ({ time, error }) => (
    <>
        <FireWorksContainer id="canvas" />
        <Container id="timer">
            <TimerContainer>
                <TimerText>
                    {time !== 0 ? (
                        <Timer
                            initialTime={time}
                            direction="backward"
                            formatValue={value =>
                                `${value < 10 ? `0${value}` : value}:`
                            }
                        >
                            {() => (
                                <>
                                    <Timer.Days />
                                    <Timer.Hours />
                                    <Timer.Minutes />
                                    <Timer.Seconds
                                        formatValue={value =>
                                            `${
                                                value < 10 ? `0${value}` : value
                                            }`
                                        }
                                    />
                                </>
                            )}
                        </Timer>
                    ) : null}
                </TimerText>
            </TimerContainer>
        </Container>
        <Container id="line-up">
            <LineUpContainer>Line Up</LineUpContainer>
        </Container>
        <Container id="transportation">
            <TransportationContainer>Transportation</TransportationContainer>
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
