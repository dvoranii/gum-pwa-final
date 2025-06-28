import { styled } from "styled-components";
import { colors } from "../../../../constants/colors";

export const Slide = styled.div`
  width: 100%;
  padding: 0px 10px;
  text-align: center;
  height: 68vh;
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: auto;
  height: auto;
  max-width: 90%;
  max-height: 80vh; 
  object-fit: contain;
  margin: 0 auto;
  
  @media (max-width: 1080px) {
    max-width: 95%;
    max-height: 70vh;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative; 

  .carousel {
    width: 100%;
    height: 100%;

    .flickity-page-dots {
      position: absolute;
      bottom: 24px;
      right: 24px;
      left: auto; 
      width: auto;
      text-align: right;
      z-index: 10;
      transform: none !important; 
      margin: 0;
      padding: 0;

      .dot {
        width: 16px;
        height: 16px;
        margin: 0 6px;
        background: ${colors.dotBG2} !important;
        opacity: 1 !important;
        border-radius: 50%;
        
        &.is-selected {
          background: ${colors.dotBGActive2} !important; 
        }
      }
    }

    .flickity-button {
      display: none;
    }
  }
`;