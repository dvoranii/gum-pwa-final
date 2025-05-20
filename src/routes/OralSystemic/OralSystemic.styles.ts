import { styled } from "styled-components";

export const Content = styled.div`
    padding-top: 1rem;

    & > h1 {
    font-family: 'Gotham', sans-serif;
    font-weight: 700;
    color: #00a16b;
    font-size: 3.2rem;
    letter-spacing: -1px;
    
    @media screen and (min-width: 2300px) {
      font-size: 6rem;
    }
  }

  & > ul {
    font-family: 'Gotham', sans-serif;
    font-weight: 700;
    color: #019257;
    font-size: 1.54rem;
    margin-bottom: 2rem;
    margin-inline-start: 1.5rem;
    letter-spacing: -1px;

    @media screen and (min-width: 2300px) {
      font-size: 3rem;
    }

    & > li {
      margin-bottom: 0.5rem;
      
      & > span {
        color: black;
        font-weight: 600;
        margin-left: -4px;
      }
    }
  }
`;


export const OralSystemicImgWrapperOuter = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2rem;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  width: 100%;
  background: white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);

  & > * {
    flex: 0 0 auto;
  }
`;

export const ImagesWrapperInner = styled.div<{ showResults?: boolean }>`
  position: relative;
  z-index: 99;
  width: ${props => props.showResults ? '55%' : '40%'};

  @media screen and (min-width: 2300px) {
   width: ${props => props.showResults ? '65%' : '46%'};
  }

`;

export const CarouselWrapper = styled.div`
  background-color: #00a16b;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

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
      
      .dot {
        width: 20px;
        height: 20px;
        opacity: 1 !important;
        background: #ffffff;
        
        &.is-selected {
          background: #4fcccd;
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
  justify-content: center;
  padding: 1rem;
`;

export const SlideImage = styled.img`
  max-width: 100%;
  max-height: 90%;
  object-fit: contain;
`;

export const BaseImg = styled.img`
  height: 60vh;
  display: block;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;

  @media screen and (min-width: 2300px) {
    height: 60vh;

  }
`;

export const ToothActiveOverlay = styled.img`
  position: absolute;
  top: 20.6vh;
  left: 31vh;
  height: 35.2%;
  z-index: 1;
  cursor: pointer;

  @media screen and (min-width: 2300px) {
    height: 35.8%;
    left: 30.8vh;
    top: 20.4vh;
  }
`;

/* Heart Branch Styles */
export const HeartBranch = styled.img`
  position: absolute;
  top: 3vh;
  left: 49.1vh;
  height: 36%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s ease;

  @media screen and (min-width: 2300px) {
    top: 2.6vh;
    left: 48.4vh;
  }

`;

export const HeartActiveOverlay = styled.img`
  position: absolute;
  top: 3.9vh;
  left: 54.95vh;
  height: 29.8%;
  z-index: 3;
  pointer-events: none;

  @media screen and (min-width: 2300px) {
    top: 3.6vh;
    left: 54.3vh;
  }
`;


export const BrainBranch = styled.img`
  position: absolute;
  top: 21.3vh;
  left: 52.1vh;
  height: 31%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s ease;

  @media screen and (min-width: 2300px) {
      top: 21.3vh;
      left: 52.2vh;
  }

`;

export const BrainActiveOverlay = styled.img`
  position: absolute;
  top: 21.95vh;
  left: 61.9vh;
  height: 28.9%;
  z-index: 3;
  pointer-events: none;

  @media screen and (min-width: 2300px) {
    top: 22.15vh;
    left: 62vh;
  }
`;

export const BloodBranch = styled.img`
  position: absolute;
  top: 38.7vh;
  left: 49vh;
  height: 34%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s ease;

  @media screen and (min-width: 2300px) {
    top: 37.8vh;
    left: 49.8vh;
  }

`;

export const BloodActiveOverlay = styled.img`
  position: absolute;
  top: 42vh;
  left: 54.7vh;
  height: 28.4%;
  z-index: 3;
  pointer-events: none;

  @media screen and (min-width: 2300px) {
    top: 41.1vh;
    left: 55.5vh;
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

  @media screen and (min-width: 2300px) {
    width: 35%;
}
`;

export const ResultContent = styled.div`
  text-align: center;
  max-width: 80%;
`;


export const ResultPercentage = styled.div`
  font-family: 'Gotham', sans-serif;
  font-weight: 700;
  color: #ffffff;
  font-size: 5.5rem;
  margin: 1.5rem 0 0.5rem 0;
`;

export const ResultDescription = styled.p`
  font-family: 'Gotham', sans-serif;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.6;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const BottomText = styled.div`
  & > p {
    font-family: 'Gotham', sans-serif;
    font-weight: 700;
    color: #00a16b;
    font-size: clamp(1rem, 2.25vw, 1.5rem);
    margin-top: 2rem;
  }

  @media screen and (min-width: 2300px) {
      & > p {
        font-size: 2.8rem;
      }
  }
`;

export const BottomSubText = styled.div`
  font-weight: normal;
  color: black;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  margin-top: 0.5rem;
`;