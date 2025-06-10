import styled, { css } from "styled-components";
export const ModuleContainerStyles = styled.div `
  padding: ${(props) => props.$padding};
  height: 100%;
  min-height: 100vh;
  ${props => props.$backgroundImage && css `
    background-image: url(${props.$backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}

  @media screen and (min-width: 2300px) {
    padding-top: 4rem;
  }
`;
