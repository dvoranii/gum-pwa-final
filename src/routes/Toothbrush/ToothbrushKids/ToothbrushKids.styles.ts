import { styled } from "styled-components";
import { BaseCarouselSlide } from "../../../styles/shared-styles";

export const KidsWrapperOuter = styled.div`
  position: relative;
`;

export const CarouselSlide = styled(BaseCarouselSlide)`
  padding: 1rem;

  img {
    width: 100%;
  }
`;