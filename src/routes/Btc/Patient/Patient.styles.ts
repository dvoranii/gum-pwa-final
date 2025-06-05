import { styled } from "styled-components";

interface GumInterproximalSolutionProps {
  $show: boolean;
}

export const PatientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.4rem;
  padding-top: 1.2rem;
  height: 85vh;

  // @media screen and (max-width: 1386px) {
  //   height: 79vh;
  // }

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

  h2 {
    font-family: "Gotham", sans-serif;
    font-weight: 600;
    font-size: clamp(18px, 2vw, 3.6rem);
    color: #00a16b;
  }

  @media screen and (min-width: 2300px) {
    width: 44%;
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
`;

export const Row = styled.div`
  display: flex;
  gap: 1.2rem;
  padding-top: 1.2rem;

  @media screen and (min-width: 2300px) {
    padding-top: 2.4rem;
  }
`;

export const Row2 = styled.div`
  display: flex;
  gap: 1.2rem;
  padding-top:1.2rem;

  @media screen and (min-width: 2300px) {
  padding-top: 2.4rem;
  }
 
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
  padding: 1rem;
  margin-top: 2.4rem;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  visibility: ${(props) => props.$show ? "visible" : "hidden"};

  p {
    font-family: "Gotham", sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-size: clamp(18px, 1.4vw, 2.4rem);
    font-weight: 200;
    color: #ffffff;
    letter-spacing: 1.5px;
  }

  @media screen and (min-width: 2300px) {
      p {
        font-size: clamp(18px, 1.8vw, 2.4rem);
      }
  }
`;
