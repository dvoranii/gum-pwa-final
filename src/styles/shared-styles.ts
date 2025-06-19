import { styled } from "styled-components";
import { colors } from "../constants/colors";

export const BaseCarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BaseDotStyles = styled.div`
  .flickity-page-dots .dot {
    background: ${colors.dotBG};
    &.is-selected {
      background: ${colors.dotBGActive};
    }
  }
`;