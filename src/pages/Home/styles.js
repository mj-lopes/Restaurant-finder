import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${(props) => props.theme.color.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem;

  background-color: white;
`;
