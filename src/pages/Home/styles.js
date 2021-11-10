import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.background};
  &::-webkit-scrollbar-thumb {
    background-color: blue; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid orange; /* creates padding around scroll thumb */
  }
`;

export const Container = styled.aside`
  width: 350px;
  max-height: calc(100vh - 2rem);
  flex-shrink: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
  background-color: white;

  ::-webkit-scrollbar-thumb {
    background: #6200ee;
    border-radius: 8px;
    border: 2px solid #fff;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }
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

export const ModalTitle = styled.p`
  margin-bottom: 1rem;
  letter-spacing: 0.1px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.color.text};
  line-height: 1.1;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ModalContent = styled(ModalTitle)`
  margin-bottom: 0.25rem;
  font-weight: normal;
  line-height: 1.4;
  font-size: 1rem;
`;
