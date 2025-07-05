
import { styled } from "styled-components";
import { colors } from "../../constants/colors";

interface PartnersBGProps {
    $isFullWidthImage?: boolean;
}

export const Content = styled.div`
    display: flex;
    height: 93%;
    flex-direction: column;
    justify-content: center;
`;

export const Slide1 = styled.div`
  width: 100%;
  height: 100%;
`;

export const PartnersBG = styled.div<PartnersBGProps>`
  display: flex;
  gap: 2.4rem;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  background-color: #ffffff;
  padding: 2rem;
  width: 100%;
  height: 60vh;
  box-sizing: border-box;
  justify-content: ${props => props.$isFullWidthImage ? 'center' : 'normal'};
  align-items: ${props => props.$isFullWidthImage ? 'center' : 'normal'};

`;

export const CarouselWrapper = styled.div`
  box-shadow: 0px 0px 12px rgba(54, 54, 54, 0);
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

        @media screen and (min-width: 2300px) {
            right: 120px;
            bottom: -80px;
        }
        
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

export const FullWidthImage = styled.img`
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 24px 0 0 24px;
  margin: 0 auto;

  @media screen and (min-width: 1504px) {
    width: 90%;
  }
`;

export const GumLogoCol = styled.div`
  width: 30%;
  min-width: 0;
  flex-shrink: 0;
`;

export const GumLogo = styled.img`
  width: 100%;
  padding-top: 11.6vh;
`;

export const GumTextWrapper = styled.div`
  padding-top: 0.8rem;
  text-align: right;
  width: 100%;
  color: #00a16b;
  font-family: 'Gotham', sans-serif;

  h2 {
    font-size: clamp(1.8rem, 3vw, 4.4rem);
    letter-spacing: -1px;
  }

  h3 {
    font-size:clamp(1.2rem, 1.8vw, 2rem);
    letter-spacing: -1px;
  }
 
`;

export const GraphicsCol = styled.div`
  width: 70%;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media screen and (min-width: 2300px) {
    width: 64%;
  }
`;

export const ImgTextWrapper = styled.div`
  color: #00a16b;
  font-family: 'Gotham', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 0;
  max-width: 33.33%;
  min-height: 361px;

  h4 {
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
    font-size: clamp(1.8rem, 2.4vw, 3.6rem);
    padding-top: 1rem;
  }


  & > img {
      width: 100%;
      height: auto;
      max-width: 100%;
      object-fit: contain;
      aspect-ratio:761/770;
  }

  @media screen and (min-width: 1504px) {
    min-height: 465px;
  }

`;

export const ColTextWrapper = styled.div`
    width: 100%;
    padding-left: 1.1rem;

    & > p {
      line-height: 1.15;
      letter-spacing: -1px;
      padding-top: 0.25rem;
      font-size: clamp(1rem, 1.5vw, 2.2rem);
      font-weight: 500;
    }
`;