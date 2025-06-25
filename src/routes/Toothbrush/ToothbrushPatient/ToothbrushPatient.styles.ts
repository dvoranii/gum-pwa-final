import styled from "styled-components";

interface ResultsContainerProps {
  $show: boolean;
}

export const MainTitle = styled.h1`
    font-family: "Gotham", sans-serif;
    font-weight: 600;
    font-size: clamp(18px, 2.8vw, 3.6rem);
    color: #00a16b;
    letter-spacing: -1.5px;
    padding-left: 5px;
    padding-bottom: 12px;
    line-height: 1;

`;

export const PatientContainerOuter = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
`;

export const PatientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.4rem;
  height: 70vh;
  width: 100%;
`;

export const ChoicesContainerOuter = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  justify-content: center;

`;

export const ChoicesContainerInner = styled.div`
  margin-left: 10%;
  margin-top: -45px;
`;

export const ChoicesImgWrapper = styled.div`
    position: relative;
    width: 80%;

    &:nth-of-type(1) {
        margin-top: 1.2rem;
    }
    &:nth-of-type(n+2) {
        margin-top: -36px;
    }

    img {
        width: 100%;
    }
`;

interface InteractiveOverlayProps {
    $positionLeft: boolean;
}

export const InteractiveOverlay = styled.div<InteractiveOverlayProps>`
    position: absolute;
    width: 44%;
    height: 100%;
    top:0;
    ${props => props.$positionLeft ? 'left: 0;' : 'right: 10%;'}
    border-radius: 50%;
    z-index: 99;
`;

export const ResultsContainer = styled.div<ResultsContainerProps>`
  width: 55%;
  min-height: 300px;
  background: white;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.21);

  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transform: translateX(${({ $show }) => ($show ? '0' : '20px')});
  transition: all 0.25s ease-out;
  pointer-events: ${({ $show }) => ($show ? 'all' : 'none')};
  visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};

  @media screen and (max-width: 1386px) {
    width: 52%;
  }
`;