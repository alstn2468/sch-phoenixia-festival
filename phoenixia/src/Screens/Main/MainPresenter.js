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
    padding: 20px 30px;
    border-radius: 20px;
`;

const TimerText = styled.text`
    font-size: 100px;
    font-family: "Aldrich", sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

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

    @media screen and (max-width: 768px) {
        flex: 1;
        height: 60px;
    }
`;

const FooterText = styled.text`
    color: "white";
`;

const MainPresenter = ({ time, error }) => (
    <Container>
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
        <FooterContainer>
            <FooterText>Copyright</FooterText>
        </FooterContainer>
    </Container>
);

MainPresenter.propTypes = {
    time: PropTypes.number.isRequired,
    error: PropTypes.string
};

export default MainPresenter;
