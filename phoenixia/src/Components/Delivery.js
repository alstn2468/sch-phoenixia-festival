import React from "react";
import styled from "styled-components";
import { NearDeliveryData, FarDeliveryData } from "../Constants/DeliveryData";

const DeliveryContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    z-index: 1;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 76%;
    }
`;

const DeliveryDetailContainer = styled.div`
    flex: 1;
    margin: 5px 30px;

    @media screen and (max-width: 768px) {
        width: 70%;
        height: 100px;
        margin: 5px 0px;
    }
`;

const TextContainer = styled.div`
    margin: 15px 0px;
    padding-bottom: 10px;

    @media screen and (max-width: 768px) {
        margin: 5px 0px;
        padding-bottom: 5px;
    }
`;

const Text = styled.h2`
    text-align: center;
    font-size: 24px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`;

const DetailContainer = styled.div`
    display: flex;
    border-radius: 10px;
    height: 600px;
    flex-direction: column;
    overflow: auto;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none !important;
    }

    @media screen and (max-width: 768px) {
        height: 180px;
    }
`;

const DataContainer = styled.div`
    width: 100%;
    height: 30px;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin: 7px 0px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        margin: 4px 0x;
    }
`;

const NameContainer = styled.div`
    padding: 5px;
    border: 1px solid white;
    width: 30%;
    border-radius: 5px;
    margin-right: 5px;

    @media screen and (max-width: 768px) {
        width: 50%;
        margin-right: 2px;
    }
`;

const NumberContainer = styled.div`
    border: 1px solid white;
    padding: 5px;
    border-radius: 5px;
    width: 60%;

    @media screen and (max-width: 768px) {
        width: 50%;
    }
`;

const WarningTitleContainer = styled.div`
    padding-top: 40px;
    text-align: center;
    font-weight: 600;
    font-size: 18px;

    @media screen and (max-width: 768px) {
        padding-top: 20px;
        font-size: 14px;
    }
`;

const WarningContainer = styled.div`
    text-align: center;
    font-size: 14px;
    padding-top: 10px;

    @media screen and (max-width: 768px) {
        font-size: 10px;
        padding-top: 5px;
    }
`;

const Delivery = () => (
    <DeliveryContainer>
        <DeliveryDetailContainer>
            <TextContainer>
                <Text>학교 근처 배달되는 치킨 피자</Text>
            </TextContainer>
            <DetailContainer>
                {NearDeliveryData.map(data => (
                    <DataContainer>
                        <NameContainer>{data.name}</NameContainer>
                        <NumberContainer>{data.number}</NumberContainer>
                    </DataContainer>
                ))}
            </DetailContainer>
        </DeliveryDetailContainer>
        <DeliveryDetailContainer>
            <TextContainer>
                <Text>멀지만 배달 오는 곳</Text>
            </TextContainer>
            <DetailContainer>
                {FarDeliveryData.map(data => (
                    <DataContainer>
                        <NameContainer>{data.name}</NameContainer>
                        <NumberContainer>{data.number}</NumberContainer>
                    </DataContainer>
                ))}
                <WarningTitleContainer>주의사항</WarningTitleContainer>
                <WarningContainer>
                    2018년 12월 13일 기준이며 배달비가 있을 수 있습니다.
                </WarningContainer>
            </DetailContainer>
        </DeliveryDetailContainer>
    </DeliveryContainer>
);

export default Delivery;
