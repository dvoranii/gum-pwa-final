import styled from "styled-components";

export const SecondColumnWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: -22%;
  bottom: 4%;
  height: 100%;
  z-index: 0;

  img {
    width: 90%;
    height: 100%;
    object-fit: contain;
    object-position: bottom center;
  }
`;
