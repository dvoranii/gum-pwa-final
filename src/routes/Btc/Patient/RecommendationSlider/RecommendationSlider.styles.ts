import styled from "styled-components";
import { colors } from "../../../../constants/colors";

export const Slide = styled.div`
  width: 90%;
  padding: 12px 32px;
  text-align: center;
  height: 85vh;

  @media screen and (min-width: 2300px) {
    height: 80vh;
    padding: 60px;
    width: 100%;
  }
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
    height: auto;

    .carousel {
        width: 100%;
        width: 100%;
        
        .flickity-page-dots {
            top: unset;
            bottom: 40px;
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
        
        @media screen and (min-width: 2300px) {
            .flickity-page-dots {
                bottom: 72px;
                right: 32px;

                .dot {
                    width: 25px;
                    height: 25px;
                    margin: 0 10px;
                }
            }
        }
    }
`;

