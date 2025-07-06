import styled from "styled-components";
import { colors } from "../../../../constants/colors";

export const Slide = styled.div`
  text-align: center;
  height: 78vh;
  display: flex;
  align-items: center;

`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .carousel {
        width: 100%;
        height: 100%;
        
        .flickity-page-dots {
            top: unset;
            bottom: 24px;
            right: 24px;
            left: unset;
            width: auto;
            text-align: right;
            z-index: 10; 
            
            .dot {
                width: 16px;
                height: 16px;
                opacity: 1 !important;
                background: ${colors.dotBG2};
                margin: 0 6px;
                
                &.is-selected {
                    background: ${colors.dotBGActive2};
                }

            }
        }

        .flickity-button {
            display: none;
        }
        
    }

`;

export const FallbackText = styled.div`
  padding: 2rem;
  font-family: 'Gotham', sans-serif;
  font-size: 1.6rem;
  color: ${colors.primary};
  text-align: center;
`;