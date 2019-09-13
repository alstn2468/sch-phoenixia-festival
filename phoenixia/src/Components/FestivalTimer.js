import React from "react";
import styled from "styled-components";
import Timer from "react-compound-timer";
import PropTypes from "prop-types";
import { BACKGROUND_COLOR } from "../Constants/Colors";

const TimerContainer = styled.div`
    z-index: 1;
    border: 1px solid white;
    padding: 25px 30px 10px 30px;
    border-radius: 20px;
    background-color: ${BACKGROUND_COLOR};

    @media screen and (max-width: 768px) {
        padding: 15px 30px 10px 30px;
    }
`;

const TimerText = styled.div`
    font-size: 100px;
    font-family: "Aldrich", sans-serif !important;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
`;

const FestivalTimer = ({ time }) => (
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
                                    `${value < 10 ? `0${value}` : value}`
                                }
                            />
                        </>
                    )}
                </Timer>
            ) : null}
        </TimerText>
    </TimerContainer>
);

FestivalTimer.propTypes = {
    time: PropTypes.number.isRequired
};

export default FestivalTimer;
