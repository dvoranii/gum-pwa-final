import styled, { css } from "styled-components";

interface ModuleContainerProps {
  $padding: string;
  $backgroundImage?: string;
}

export const ModuleContainerStyles = styled.div<ModuleContainerProps>`
  padding: ${(props) => props.$padding};
  height: 100%;
  min-height: 100vh;
  ${props => props.$backgroundImage && css`
    background-image: url(${props.$backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}
`;