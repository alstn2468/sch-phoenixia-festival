import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    display: flex;
    width: 90%;
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 100%;
    }
`;

const DetailImage = styled.img`
    border-radius: 10px;
    width: 200px;
    height: 140px;

    @media screen and (max-width: 768px) {
        width: 70px;
        height: 50px;
    }
`;

const DetailContent = styled.div`
    width: 100%;
    margin: 10px 0px 0px 0px;
    text-align: center;
    font-size: 26px;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        margin: 7px 0px 0px 0px;
        font-size: 12px;
    }
`;

const LineUpDetail = ({ path, name }) => (
    <Container>
        <DetailImage src={path} alt="Not Found"></DetailImage>
        <DetailContent>{name}</DetailContent>
    </Container>
);

LineUpDetail.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default LineUpDetail;
