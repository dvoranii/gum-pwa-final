import { styled } from "styled-components";

export const Content = styled.div`
    padding-top: 2rem;

    @media screen and (min-width: 2300px) {
      padding-top: 3rem;
    }
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

  @media screen and (min-width: 2300px) {
    margin-top: 3rem;
    height: 60vh;
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

      @media screen and (min-width: 2300px) {
        right:108px;
        top: 90px;
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
  padding: 2rem 4rem;

  @media screen and (max-width: 1080px) {
    padding: 2rem;
  }
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
      left: 45.1vh;
    }
`;



export const ToothImg = styled.img`
    position: absolute;
    top: 19.1vh;
    left: 30.2vh;
    width: 21.6vh;
    height: auto;

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

  @media screen and (min-width: 2300px) {
    top: 18.1vh;
    left: 29.6vh;
  }
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
  background-image: linear-gradient(to bottom, #1a969d, #5fccc4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
`;

export const ResultContent = styled.div`
    // display: flex;
`;

export const ResultTextImg = styled.img`
    max-width: 88%;

    // @media screen and (min-width: 2300px) {
    //     max-width: 100%;
    // }
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