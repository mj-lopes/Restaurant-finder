import React from "react";
import styled, { keyframes } from "styled-components";

const keyframesLoading = keyframes`
  0% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
`;

const LoadingSkeleton = styled.div`
  background-color: #666;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  animation: ${keyframesLoading} 0.5s infinite alternate;
`;

const Skeleton = ({ width, height }) => (
  <LoadingSkeleton width={width} height={height} />
);

export default Skeleton;
