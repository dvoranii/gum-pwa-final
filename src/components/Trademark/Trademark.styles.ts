import styled from "styled-components";

export interface TrademarkProps {
  $size?: string;
  $verticalAlign?: string;
}

export const StyledSup = styled.sup<TrademarkProps>`
  vertical-align: ${(props) => props.$verticalAlign || "top"};
  font-size: ${(props) => props.$size || "36px"};
`;
