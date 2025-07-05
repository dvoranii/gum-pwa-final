import { css, styled } from "styled-components";

export const Content = styled.div`
    padding-top: 0.7rem;
`;


export const OralSystemicImgWrapperOuter = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1rem;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  width: 100%;
  background: white;
  box-shadow: 0px 0px 12px rgba(54, 54, 54, 0.12);
  height: 60vh;

  & > * {
    flex: 0 0 auto;
  }
`;

export const ImagesWrapperInner = styled.div<{ showResults?: boolean }>`
  position: relative;
  z-index: 99;
  width: ${props => props.showResults ? '61%' : '44%'};

  @media screen and (max-width: 1080px) {
    width: ${props => props.showResults ? '62%' : '50%'};
  }

`;

export const CarouselWrapper = styled.div`
  background-color: #00a16b;
  width: 56%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 1080px) {
    width: 50%;
  }


  .carousel {
    width: 100%;
    height: 100%;
    
    .flickity-viewport {
      height: 100% !important;
    }
    
    .flickity-page-dots {
      bottom: unset;
      top: 45px;
      right: 35px;
      left: unset;
      width: auto;
      text-align: right;
      z-index: 10;

      
      .dot {
        width: 18px;
        height: 18px;
        opacity: 1 !important;
        background: #ffffff;
        
        &.is-selected {
          background: #4fcccd;
        }

        @media screen and (min-width: 2300px) {
            width: 36px;
            height: 36px;
            margin: 0 16px;
        }
      }
    }
    
    .flickity-button {
      display: none;
    }
  }
`;

export const CarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.2rem 2rem;

  @media screen and (max-width: 1080px) {
    padding: 1rem;
  }
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

interface SlideNumberProps {
  $letterSpacing?: string;
  $fontSize?: string;
}

export const SlideNumber = styled.div<SlideNumberProps>`
  color: #ffffff;
  font-family: "Gotham", sans-serif;
  font-weight: 600;
  font-size: 12.2rem;
  vertical-align: bottom;
  line-height: 1;
  letter-spacing: ${(props) => props.$letterSpacing ? props.$letterSpacing : ""};
`;

interface SlideOrdinalProps {
  $fontSize?: string;
  $marginLeft?: string;
  $vertAlignBottom?: boolean;
  $topOffset?: string;

}

export const SlideOrdinal = styled.span<SlideOrdinalProps>`
  font-size: ${(props) => props.$fontSize ? props.$fontSize : "6.8rem"};
  letter-spacing: -5px;
  vertical-align: ${(props) => props.$vertAlignBottom ? "bottom" : "baseline"};
  margin-left: ${(props) => props.$marginLeft || '0'};
  position: relative;
  top: ${(props) => props.$topOffset || '0'};
`;

export const SlideNumberWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
`;

export const SlideNumberText = styled.span`
  font-size: 10.6rem;
`;

export const SlideOrdinalStacked = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SlideOrdinalPlus = styled.span`
  font-size: 7rem; 
  font-weight: 600;
  line-height: 1;
  letter-spacing: -2px;
`;

export const SlideOrdinalText = styled.span`
  font-size: 3.8rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -1px;
  margin-top: -1.4rem;
  margin-left: 0.8rem;
`;

interface SlideTextContentProps {
  $paddingTop?: string;
}

export const SlideTextContent = styled.div<SlideTextContentProps>`
  display: flex;
  flex-direction: column;
  padding-top: ${(props) => props.$paddingTop ? props.$paddingTop : "0"};
`;

interface SlideTitleProps {
  $fontSize?: string;
  $paddingLeft?: string;
  $paddingRight?: string;
}

export const SlideTitle = styled.h2<SlideTitleProps>`
  color: #ffffff;
  font-family: "Gotham", sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.$fontSize ? props.$fontSize : "2.8rem"};
  margin-bottom: 1rem; 
  letter-spacing: -1.25px;
  line-height: 1;
  padding-left: ${(props) => props.$paddingLeft ? props.$paddingLeft : "1.2rem"};
  padding-right: ${(props) => props.$paddingRight ? props.$paddingRight : "1.2rem"};
  margin-top: -8px;
`;

interface CitationProps {
  $paddingTop?: string;
  $paddingLeft?: string;
}


export const SlideCitation = styled.cite<CitationProps>`
  color: #ffffff;
  font-family: "Gotham", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  font-style:normal;
  padding-top: ${(props) => props.$paddingTop ? props.$paddingTop : "0.8rem"};
  padding-left: ${(props) => props.$paddingLeft ? props.$paddingLeft : "0"};
`;

export const SlideImage = styled.img`
  height: 100%;
  width: auto;

  @media screen and (max-width: 1080px) {
      height: 90%;
  }
`;

export const BaseImgWrapper = styled.div`
width: 100%;

`;
export const BaseImg = styled.img`
  height: 57vh;
  display: block;
  padding: 1rem 0;
  margin-left: 0px;
  margin-top: 1px;
  border-top-left-radius: 24px;

`;

export const Branches = styled.img`
    position: absolute;
    width: 14.1vh;
    top: 16.3vh;
    left: 44.9vh;
    z-index: -1;

    @media screen and (max-width: 1080px) {
      width: 14.1vh;
      top: 16vh;
      left: 44.9vh;
    }
`;



export const ToothImg = styled.img`
    position: absolute;
    top: 19.1vh;
    left: 30.2vh;
    width: 21.6vh;
    height: auto;

`;


export const ToothActiveOverlay = styled.img`
  position: absolute;
  top: 19.1vh;
  left: 30.2vh;
  height: 21.6vh;
  z-index: 1;
  cursor: pointer;

`;

/* Heart Branch Styles */
export const HeartBranch = styled.img`
  position: absolute;
  top: 2.5vh;
  left: 49.5vh;
  height: 30%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 1080px) {
    height: 28%;
    top: 3.2vh;
    left: 48.5vh;
  }

`;

export const HeartActiveOverlay = styled.img`
  position: absolute;
  top: 2.5vh;
  left: 49.5vh;
  height: 30%;
  z-index: 3;
  pointer-events: none;

  @media screen and (max-width: 1080px) {
    height: 28%;
    top: 3.2vh;
    left: 48.5vh;
  }

`;


export const BrainBranch = styled.img`
  position: absolute;
  top: 20.1vh;
  left: 57.7vh;
  height: 30%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 1080px) {
    height: 28%;
    top: 20.1vh;
    left: 53.7vh;
  }

`;

export const BrainActiveOverlay = styled.img`
  position: absolute;
  top: 20.1vh;
  left: 57.7vh;
  height: 30%;
  z-index: 3;
  pointer-events: none;

  @media screen and (max-width: 1080px) {
    height: 28%;
    top: 20.1vh;
    left: 53.7vh;
  }
`;

export const BloodBranch = styled.img`
  position: absolute;
  top: 36.9vh;
  left: 48vh;
  height: 30%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 1080px) {
    top: 36.9vh;
    left: 48vh;
    height: 28%;
  }

`;

export const BloodActiveOverlay = styled.img`
  position: absolute;
  top: 36.9vh;
  left: 48vh;
  height: 30%;
  z-index: 3;
  pointer-events: none;

  @media screen and (max-width: 1080px) {
    top: 36.9vh;
    left: 48vh;
    height: 28%;
  }
`;

export const ResultImgWrapper = styled.div`
  width: 45%;
  background-image: linear-gradient(to bottom, #1a969d 50%, #5fccc4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
`;

export const ResultContent = styled.div`
    padding: 0 0 0.8rem 1.8rem;
    height: 90%;

    @media screen and (max-width: 1080px) {
          padding: 0 0 0.8rem 1.2rem;
    }
`;


interface ResultTitleProps {
  $fontSize?: string;
  $lineHeight?: string;
  $letterSpacing?: string;
  $marginBottom?: string;
  $paddingTop?: string;
}

export const ResultTitle = styled.div<ResultTitleProps>`
  font-family: 'Gotham', sans-serif;
  font-weight: 600;
  color: #ffffff;
  line-height: ${props => props.$lineHeight || '0.9'};
  font-size: ${props => props.$fontSize || 'clamp(18px, 4.2vw, 3.2rem)'};
  letter-spacing: ${props => props.$letterSpacing || '-1px'};
  margin-bottom: ${props => props.$marginBottom || '1rem'};
  padding-top: ${(props) => props.$paddingTop ? props.$paddingTop : "0"};
`;

export const ResultDescriptionInner = styled.div``;
export const ResultDescriptionOuter = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

interface ResultParagraphProps {
  $paddingRight?:string;
  $paddingTop?:string;
}
export const ResultParagraph = styled.p<ResultParagraphProps>`
  font-family: 'Gotham', sans-serif;
  font-weight: 600;
  font-size: clamp(18px, 2.2vw, 2.4rem);
  color: #ffffff;
  line-height: 1;
  margin-bottom: 1rem;
  padding-top: ${(props) => props.$paddingTop ? props.$paddingTop : "1rem"};
  letter-spacing: -0.6px;
  padding-right: ${(props) => props.$paddingRight ? props.$paddingRight : "5.4rem"};

  & + & {
    padding-top: 0.4rem;
  }

  
`;

export const BottomText = styled.div`
  & > p {
    font-family: 'Gotham', sans-serif;
    font-weight: 700;
    color: #00a16b;
    font-size: clamp(1rem, 2.25vw, 1.7rem);
    margin-top: 2rem;
    padding: 0px 12px;
    letter-spacing: -1.4px;
  }
`;

export const BottomSubText = styled.div`
  font-weight: normal;
  color: black;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  margin-top: 0.5rem;
`;