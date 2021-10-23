import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.background};
`;

export const Container = styled.aside`
  width: 360px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
  background-color: white;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: white;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    padding-bottom: 1rem;
    margin-right: 1rem;
  }
`;

export const CarouselTitle = styled.h2`
  margin: 1rem 0;

  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.color.text};
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;
  background-color: white;
`;
