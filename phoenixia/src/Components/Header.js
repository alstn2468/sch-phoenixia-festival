import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TINT_COLOR, SCH_LOGO_COLOR_THR } from "../Constants/Colors";

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

    @media screen and (max-width: 768px) {
        flex: 1;
        height: 60px;
    }
`;

const HeaderTitleContainer = styled.div`
    display: flexbox;
    flex: 3;

    @media screen and (max-width: 768px) {
        flex: 1;
    }
`;

const HeaderTitleText = styled.text`
    font-size: 24px;
    padding-left: 40px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        padding-left: 10px;
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
    :visited {
        color: ${TINT_COLOR};
    }
    :hover {
        color: ${SCH_LOGO_COLOR_THR};
    }

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

export default () => (
    <HeaderContainer>
        <HeaderTitleContainer>
            <HeaderTitleText>2019 피닉시아 축제</HeaderTitleText>
        </HeaderTitleContainer>
        <NavContainer>
            <NavItem to="#">
                <NavItemText>Menu 1</NavItemText>
            </NavItem>
            <NavItem to="#">
                <NavItemText>Menu 2</NavItemText>
            </NavItem>
            <NavItem to="#">
                <NavItemText>Menu 3</NavItemText>
            </NavItem>
        </NavContainer>
    </HeaderContainer>
);
