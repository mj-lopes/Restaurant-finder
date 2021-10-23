import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 90px;
  height: 90px;
  overflow: hidden;

  &::before {
    border-radius: 4px;
    z-index: -1;
    content: "";
    width: 90px;
    height: 90px;
    display: block;
    position: absolute;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    transform: scale(0.9);
    filter: opacity(1);
    transition: 0.3s;
  }

  &:hover::before {
    filter: opacity(0.4);
    transform: scale(1);
    box-shadow: 5px 5px 10px 0 black;
  }
`;

const Title = styled.p`
  display: block;
  padding-top: 10px;
  text-align: center;

  color: black;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1rem;

  filter: opacity(0);
  transform: scale(0.4);
  transition: 0.3s;

  ${Card}:hover & {
    filter: opacity(1);
    transform: scale(1);
  }
`;

export const ImageCard = ({ photo }) => (
  <Card photo={photo}>
    <Title>Nome do Restaurante</Title>
  </Card>
);
