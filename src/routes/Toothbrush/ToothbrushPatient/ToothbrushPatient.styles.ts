import styled from "styled-components";

interface ResultsContainerProps {
  $show: boolean;
}

export const MainTitle = styled.h1`
    font-family: "Gotham", sans-serif;
    font-weight: 600;
    font-size: clamp(18px, 2.4vw, 3.6rem);
    color: #00a16b;

    @media screen and (min-width: 2300px) {
        font-size: 2.4vw;
    }
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
  padding-top: 1.2rem;
  height: 85vh;
  width: 100%;

  @media screen and (max-width: 1386px) {
    height: 72vh;
  }

  @media screen and (min-width: 2300px) {
     padding-top: 2.4rem;
     height: 80vh;
  }
`;

export const ChoicesContainerOuter = styled.div`
  display: flex;
  width: 37%;
  padding-top: 1.2rem;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1386px) {
    width: 45%;
  }

  @media screen and (min-width: 2300px) {
    width: 44%;
  }
`;

export const ChoicesContainerInner = styled.div`
  margin-left: 8%;
`;

export const ChoicesImgWrapper = styled.div`
    position: relative;

    &:nth-of-type(1) {
        margin-top: 2.4rem;
    }
    &:nth-of-type(n+2) {
        margin-top: -72px;
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
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
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