import { styled } from "styled-components";

interface ResultTextImgProps {
  $variant?: 'brain' | 'heart' | 'blood'; 
}

export const Content = styled.div`
    padding-top: 2rem;

    @media screen and (min-width: 2300px) {
      padding-top: 3rem;
    }
`;


export const OralSystemicImgWrapperOuter = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2rem;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  width: 100%;
  background: white;
  box-shadow: 0px 0px 12px rgba(54, 54, 54, 0.12);
  margin-top: 1.8rem;
  height: 60vh;

  & > * {
    flex: 0 0 auto;
  }

  @media screen and (max-width: 1368px) {
    height: 46vh;
  }

  @media screen and (min-width: 2300px) {
    margin-top: 3rem;
    height: 56vh;
  }
`;

export const ImagesWrapperInner = styled.div<{ showResults?: boolean }>`
  position: relative;
  z-index: 99;
  width: ${props => props.showResults ? '55%' : '40%'};

  @media screen and (max-width: 1368px) {
    width: ${props => props.showResults ? '55%' : '40%'};
  }

  @media screen and (min-width: 2300px) {
   width: ${props => props.showResults ? '62%' : '46%'};
  }

`;

export const CarouselWrapper = styled.div`
  background-color: #00a16b;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 1368px) {
    width: 60%;
  }

  @media screen and (min-width: 2300px) {
    width: 54%;
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

      @media screen and (min-width: 2300px) {
        right:108px;
        top: 108px;
      }
      
      .dot {
        width: 20px;
        height: 20px;
        opacity: 1 !important;
        background: #ffffff;
        
        &.is-selected {
          background: #4fcccd;
        }

        @media screen and (min-width: 2300px) {
            width: 40px;
            height: 40px;
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
  padding: 2rem 4rem;

  @media screen and (min-width: 2300px) {
      padding: 4rem;
  }
`;

export const SlideImage = styled.img`
  height: 100%;
  width: auto;

  @media screen and (max-width: 2300px) {
    
  }
`;

export const BaseImgWrapper = styled.div`
width: 100%;

`;
export const BaseImg = styled.img`
  height: 60vh;
  display: block;
  padding: 1rem 0;
  margin-left: 0px;
  margin-top: 1px;

  @media screen and (max-width: 1368px) {
    height: 45vh;
  }

  @media screen and (min-width: 2300px) {
    height: 57vh;
  }
`;

export const Branches = styled.img`
    position: absolute;
    width: 15vh;
    top: 16.7vh;
    left: 47.8vh;
    z-index: -1;

    @media screen and (max-width: 1368px) {
        width: 10vh;
        top: 13.6vh;
        left: 35vh;
    }

    @media screen and (min-width: 2300px) {
        width: 14.5vh;
        top: 15.5vh;
        left: 46.7vh;
    }
`;



export const ToothImg = styled.img`
    position: absolute;
    top: 19.1vh;
    left: 30.2vh;
    width: 21.6vh;
    height: auto;


    @media screen and (max-width: 1368px) {
        top: 14.7vh;
        left: 22.6vh;
        width: 15.7vh;
    }

    @media screen and (min-width: 2300px) {
         top: 18.1vh;
         left:29.6vh;
         width: 21.6vh;
    }

`;


export const ToothActiveOverlay = styled.img`
  position: absolute;
  top: 19.1vh;
  left: 30.2vh;
  height: 21.6vh;
  z-index: 1;
  cursor: pointer;


  @media screen and (max-width: 1368px) {
    top: 11.8vh;
    left: 22.5vh;
    width: 15.9vh;
  }


  @media screen and (min-width: 2300px) {
    top: 18.1vh;
    left: 29.6vh;
  }
`;

/* Heart Branch Styles */
export const HeartBranch = styled.img`
  position: absolute;
  top: 3.5vh;
  left: 51.5vh;
  height: 30%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 1368px) {
    top: 2.3vh;
    left: 36.8vh;
  }

  @media screen and (min-width: 2300px) {
        top: 3.3vh;
        left: 50.6vh;
  }

`;

export const HeartActiveOverlay = styled.img`
  position: absolute;
  top: 3.5vh;
  left: 51.5vh;
  height: 30%;
  z-index: 3;
  pointer-events: none;

  @media screen and (max-width: 1368px) {
    top: 2.3vh;
    left: 36.8vh;
  }

  @media screen and (min-width: 2300px) {
    top: 3.3vh;
    left: 50.6vh
  }
`;


export const BrainBranch = styled.img`
  position: absolute;
  top: 21.4vh;
  left: 58.7vh;
  height: 30%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 1368px) {
    top: 15.3vh;
    left: 44.1vh;
  }

  @media screen and (min-width: 2300px) {
    top: 20.2vh;
    left: 59.2vh;
  }

`;

export const BrainActiveOverlay = styled.img`
  position: absolute;
  top: 21.45vh;
  left: 58.7vh;
  height: 30%;
  z-index: 3;
  pointer-events: none;

  @media screen and (max-width: 1368px) {
    top: 15.31vh;
    left: 44.1vh;
  }

  @media screen and (min-width: 2300px) {
    top: 20.2vh;
    left: 59.2vh;
  }
`;

export const BloodBranch = styled.img`
  position: absolute;
  top: 39.6vh;
  left: 51.9vh; 
  height: 30%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 1368px) {
    top: 29vh;
    left: 37.7vh;
  }
  @media screen and (min-width: 2300px) {
    top: 37.1vh;
    left: 50.4vh;
  }

`;

export const BloodActiveOverlay = styled.img`
  position: absolute;
  top: 39.6vh;
  left: 51.9vh;
  height: 30%;
  z-index: 3;
  pointer-events: none;

  @media screen and (max-width: 1368px) {
    top: 29vh;
    left: 37.7vh;
  }
  @media screen and (min-width: 2300px) {
    top: 37.1vh;
    left: 50.4vh;
  }
`;

export const ResultImgWrapper = styled.div`
  width: 45%;
  background-image: linear-gradient(to bottom, #1a969d, #5fccc4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;

  @media screen and (max-width: 1368px) {
    width: 45%;
  }

  @media screen and (min-width: 2300px) {
    width: 38%;
}
`;

export const ResultContent = styled.div`
    // display: flex;
`;

export const ResultTextImg = styled.img<ResultTextImgProps>`
    max-width: 80%;
    // padding-left: ${props => props.$variant === 'brain' ? '4rem' : '3rem'};
    // padding-top: ${props => props.$variant === 'brain' ? '1rem' : '2rem'};

    @media screen and (min-width: 2300px) {
        max-width: 100%;
        // max-height: 57vh;
        // padding: ${props => props.$variant === 'brain' ? '4rem 5.6rem 0 4rem' : '4rem'};
    }
`;


export const ResultHeadline = styled.div`
  font-family: 'Gotham', sans-serif;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
  font-size: 3.6rem;

  @media screen and (min-width: 2300px) {
    font-size: 5.6rem;
  }
`;

export const ResultDescription = styled.p`
  font-family: 'Gotham', sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 1rem;
  padding-top: 1rem;

  @media screen and (min-width: 2300px) {
    padding-right: 6rem;
    padding-top: 2rem;
    letter-spacing: -1px;
    font-size: 2.9rem;
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

  @media screen and (min-width: 2300px) {
      & > p {
        font-size: 2.9rem;
      }
  }
`;

export const BottomSubText = styled.div`
  font-weight: normal;
  color: black;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  margin-top: 0.5rem;
`;