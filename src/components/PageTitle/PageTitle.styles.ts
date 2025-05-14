import { styled } from "styled-components";

interface StyledProps {
  $center?: boolean;
  $color?: string;
}

export const PageTitle = styled.h1<StyledProps>`
  font-size: 3rem;
  margin-bottom: 2rem;
  font-family: 'Gotham', sans-serif;
  color: ${props => props.$color || '#02a6a7'};
  text-align: ${props => props.$center ? 'center' : 'left'};
  line-height: 1.2;
`;