
import { styled } from "styled-components";
import { colors } from "../../constants/colors";

interface RecommendBGProps {
    $isFullWidthImage?: boolean;
    $bgImage: string;
}

export const Content = styled.div`
    padding-top: 0.7rem;
`;

export const RecommendBG = styled.div<RecommendBGProps>`
  display: flex;
  justify-content: space-between;
  gap: 2.4rem;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 60vh;
  box-sizing: border-box;
  align-items: ${props => props.$isFullWidthImage ? 'center' : 'normal'};

`;

export const FullWidthImage = styled.img`
  max-width: 76.8%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 24px 0 0 24px;
  margin: 0 auto;
`;


export const CircleWrapper = styled.div`
    height: 100%;
    width: 42%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 50%;
    }
`;

export const ThreeCirclesWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 50%;

    img {
        height: 90%;
    }
`;

export const CarouselWrapper = styled.div`
    .carousel {

    .flickity-viewport {
        border-top-left-radius: 24px;
        border-bottom-left-radius: 24px;
        filter: drop-shadow(0px 0px 12px rgba(54, 54, 54, 0.05));
    }
    
    .flickity-page-dots {
        bottom: -40px;
        right: 35px;
        left: unset;
        width: auto;
        text-align: right;
        z-index: 10;

        .dot {
            width: 20px;
            height: 20px;
            opacity: 1 !important;
            background: ${colors.dotBG2};

            
            &.is-selected {
                background: ${colors.dotBGActive2};
            }

            @media screen and (min-width: 2300px) {
                width: 34px;
                height: 34px;
                margin: 0 16px;
            }
        }
        }
        
        .flickity-button {
        display: none;
        }
    }
`;