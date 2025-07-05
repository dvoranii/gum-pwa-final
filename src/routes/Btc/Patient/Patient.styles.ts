import { styled } from "styled-components";

interface GumInterproximalSolutionProps {
  $show: boolean;
}

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
  height: 78vh;
  width: 100%;

  @media screen and (min-width: 1500px) {
    height: 85vh;
  }
`;

export const ChoicesContainerOuter = styled.div`
  display: flex;
  width: 45%;
  padding-top: 1.2rem;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: "Gotham", sans-serif;
    font-weight: 600;
    font-size: clamp(18px, 2.6vw, 3.6rem);
    color: #00a16b;
    text-align: center;
    padding-bottom: 0.4rem;
    letter-spacing: -1px;
  }

  @media screen and (max-width: 1080px) {

    h1 {
      font-size: 2.4vw;
    }
  }
`;

export const ChoicesContainerInner = styled.div`
  margin-left: 8%;
`;

interface ResultsContainerProps {
  $show: boolean;
}

export const ResultsContainer = styled.div<ResultsContainerProps>`
  width: 55%;
  background: white;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.21);
  margin-bottom: -24px;

  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transform: translateX(${({ $show }) => ($show ? '0' : '20px')});
  transition: all 0.25s ease-out;
  pointer-events: ${({ $show }) => ($show ? 'all' : 'none')};
  visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};

`;

export const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 0.4rem;

  @media screen and (min-width: 2300px) {
    padding-top: 1.4rem;
  }
`;

export const Row2 = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 0.4rem;
 
`;

export const ImgWrapper = styled.div`
  img {
    width: 100%;
  }
`;

export const ImgWrapper2 = styled.div`
display: flex;
 justify-content: flex-end;
  img {
    width: 65%;
    height: auto;
  }
`;

export const ImgWrapper3 = styled.div`
  display: flex;
 justify-content: flex-start;
  img {
    width: 65%;
    height: auto;
  }
`;

export const GumInterproximalSolution = styled.div<GumInterproximalSolutionProps>`
  width: 100%;
  background: #02a6a7;
  padding: 0.8rem;
  margin-top: 1.2rem;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  transition: all 150ms ease;
  opacity: ${(props) => props.$show ? "1" : "0"};
  visibility: ${(props) => props.$show ? "visible" : "hidden"};

  p {
    font-family: "Gotham", sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-size: clamp(18px, 1.4vw, 2.2rem);
    font-weight: 400;
    color: #ffffff;
    letter-spacing: 2.5px;
  }

`;
