import { styled } from "styled-components";
import { BaseCarouselSlide } from "../../../styles/shared-styles";

export const AdultWrapperOuter = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
`;

export const CarouselSlide = styled(BaseCarouselSlide)`
  padding: 1rem;
  justify-content: flex-start;

  img {
    width: 90%;
  }

`;