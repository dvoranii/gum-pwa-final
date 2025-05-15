import { styled } from "styled-components";

export const OralSystemicHomeContainer = styled.div`
  & > h1 {
    font-family: 'Gothic', sans-serif;
    font-weight: 700;
    color: #019257;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  & > ul {
    font-family: 'Gothic', sans-serif;
    font-weight: 700;
    color: #019257;
    margin-inline-start: 20px;
    font-size: 1.25rem;
    margin-bottom: 2rem;
    padding-left: 1rem;

    & > li {
      margin-bottom: 0.5rem;
      
      & > span {
        color: black;
        font-weight: normal;
      }
    }
  }
`;

export const OralSystemicImgWrapperOuter = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
  background: white;
`;

export const ImagesWrapperInner = styled.div`
  position: relative;
  flex: 0 0 50vw;
  height: fit-content;
`;

export const BaseImg = styled.img`
  width: 100%;
  display: block;
`;

export const ToothActiveOverlay = styled.img`
  position: absolute;
  top: 7.9vw;
  left: 11.9vw;
  height: 34.2%;
  z-index: 1;
  cursor: pointer;
`;

/* Heart Branch Styles */
export const HeartBranch = styled.img`
  position: absolute;
  top: 1vw;
  left: 19vw;
  height: 36%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const HeartActiveOverlay = styled.img`
  position: absolute;
  top: 1.4vw;
  left: 21.35vw;
  height: 29.8%;
  z-index: 3;
  pointer-events: none;
`;

/* Brain Branch Styles */
export const BrainBranch = styled.img`
  position: absolute;
  top: 8.3vw;
  left: 20.1vw;
  height: 31%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const BrainActiveOverlay = styled.img`
  position: absolute;
  top: 8.65vw;
  left: 24vw;
  height: 28.9%;
  z-index: 3;
  pointer-events: none;
`;

/* Blood Branch Styles */
export const BloodBranch = styled.img`
  position: absolute;
  top: 14.6vw;
  left: 19.1vw;
  height: 34%;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const BloodActiveOverlay = styled.img`
  position: absolute;
  top: 15.9vw;
  left: 21.4vw;
  height: 28.4%;
  z-index: 3;
  pointer-events: none;
`;

export const ResultImgWrapper = styled.div`
  flex: 1;
  background: #e6f2ff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
`;

export const ResultContent = styled.div`
  text-align: center;
  max-width: 80%;
`;

export const ResultTitle = styled.h3`
  font-family: 'Gothic', sans-serif;
  color: #003366;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const ResultPercentage = styled.div`
  font-family: 'Gothic', sans-serif;
  font-weight: 700;
  color: #019257;
  font-size: 2.5rem;
  margin: 1.5rem 0;
`;

export const ResultDescription = styled.p`
  font-family: 'Gothic', sans-serif;
  color: #003366;
  line-height: 1.6;
  font-size: 1.1rem;
`;

export const BottomText = styled.div`
  font-family: 'Gothic', sans-serif;
  font-weight: 700;
  color: #019257;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  margin-top: 2rem;
`;

export const BottomSubText = styled.div`
  font-weight: normal;
  color: black;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  margin-top: 0.5rem;
`;