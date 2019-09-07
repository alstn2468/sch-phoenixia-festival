import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    TINT_COLOR,
    SCH_LOGO_COLOR_THR,
    SCH_LOGO_COLOR_ONE,
    SCH_LOGO_COLOR_TWO
} from "../Constants/Colors";

const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    flex-direction: row;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    border-bottom-color: white;
    margin-bottom: 10px;
    position: fixed;
    top: 0;
    z-index: 1;

    @media screen and (max-width: 768px) {
        flex: 1;
        height: 60px;
    }
`;

const HeaderTitleContainer = styled.div`
    display: flexbox;
    flex: 3;
    padding-left: 40px;

    @media screen and (max-width: 768px) {
        flex: 1;
        padding-left: 10px;
    }
`;

const HeaderTitleText = styled.text`
    font-size: 24px;
    font-weight: 800;
    background-color: ${props => props.color};
    padding: 10px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        padding: 5px;
    }
`;

const NavContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: flexbox;
    flex: 1;
`;

const NavItem = styled(Link)`
    padding: 0px 10px;
`;

const NavItemText = styled.text`
    font-size: 18px;
    :visited {
        color: ${TINT_COLOR};
    }
    :hover {
        color: ${SCH_LOGO_COLOR_THR};
    }

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export default () => (
    <HeaderContainer>
        <HeaderTitleContainer>
            <HeaderTitleText color={SCH_LOGO_COLOR_ONE}>2019</HeaderTitleText>
            <HeaderTitleText color={SCH_LOGO_COLOR_TWO}>
                피닉시아
            </HeaderTitleText>
            <HeaderTitleText color={SCH_LOGO_COLOR_THR}>축제</HeaderTitleText>
        </HeaderTitleContainer>
        <NavContainer>
            <NavItem to="#">
                <NavItemText>라인업</NavItemText>
            </NavItem>
            <NavItem to="#">
                <NavItemText>교통수단</NavItemText>
            </NavItem>
            <NavItem to="#">
                <NavItemText>위치</NavItemText>
            </NavItem>
        </NavContainer>
    </HeaderContainer>
);
