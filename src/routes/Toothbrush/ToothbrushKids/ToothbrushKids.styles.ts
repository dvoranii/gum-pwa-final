import { styled } from "styled-components";
import { BaseCarouselSlide } from "../../../styles/shared-styles";

export const KidsWrapperOuter = styled.div`
  position: relative;
  width: 95%;
  margin: 0 auto;
`;

export const CarouselSlide = styled(BaseCarouselSlide)`
  padding: 1rem;
  justify-content: flex-start;

  & > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;