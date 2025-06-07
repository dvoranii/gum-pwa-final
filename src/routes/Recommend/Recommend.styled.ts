
import { styled } from "styled-components";
import BG1 from "../../assets/recommend/bg-1.webp";

interface PartnersBGProps {
    $isFullWidthImage?: boolean;
}

export const Content = styled.div`
    padding-top: 2rem;

    @media screen and (min-width: 2300px) {
      padding-top: 3rem;
    }
`;

export const PartnersBG = styled.div<PartnersBGProps>`
  display: flex;
  gap: 2.4rem;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  background-image: url(${BG1});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 55vh;
  box-sizing: border-box;
  margin-top: 2.4rem;
  box-shadow: 0px 0px 12px rgba(54, 54, 54, 0.12);
  justify-content: ${props => props.$isFullWidthImage ? 'center' : 'normal'};
  align-items: ${props => props.$isFullWidthImage ? 'center' : 'normal'};

  @media screen and (min-width: 2300px) {
    min-height: 60vh;
  }
`;

export const FullWidthImage = styled.img`
  max-width: 76.8%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 24px 0 0 24px;
  margin: 0 auto;

  @media screen and (max-width: 1386px) {
      max-width: 85%;
  }

  @media screen and (min-width: 2300px) {
    max-width: 100%;
    height: 58vh;
    width: auto;
  }
`;

export const GumLogoCol = styled.div`
  width: 30%;
  min-width: 0;
  flex-shrink: 0;

  @media screen and (min-width: 2300px) {
    padding-left: 4rem;
  }

`;
export const GumLogo = styled.img`
  width: 100%;
  padding-top: 2.4vh;
`;

export const GumTextWrapper = styled.div`
  padding-top: 2rem;
  text-align: right;
  width: 100%;
  color: #00a16b;
  font-family: 'Gotham', sans-serif;

  h2 {
    font-size: clamp(1.8rem, 2.8vw, 4.4rem);
    letter-spacing: -1px;
  }

  h3 {
    font-size:clamp(1.2rem, 1.8vw, 2rem);
    letter-spacing: -1px;
  }
 
  @media screen and (min-width: 2300px) {
    padding-top: 5.6rem;
    & > h3 {
        font-weight: 600;
        font-size: 2.4rem;
      }
      & > h2 {
        font-weight: 700;
        font-size: 4.2rem;
      }
  }
`;

export const GraphicsCol = styled.div`
  width: 70%;
  min-width: 0;
  display: flex;

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

  h4 {
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
    font-size: clamp(1.8rem, 2.4vw, 3.6rem);
    padding-top: 1rem;
  }


  & > img {
      width: 80%;
      height: auto;
      max-width: 100%;
      object-fit: contain;
      aspect-ratio:761/770;
  }

  @media screen and (min-width: 2300px) {
    h4 {
      font-size: 3.6rem;
      padding-top: 1rem;
    }

    & > img {
      width: 80%;
    }
  }
`;

export const ColTextWrapper = styled.div`
    width: 100%;
    padding-left: 1.8rem;

    & > p {
      letter-spacing: -1.8px;
      line-height: 1.15;
      letter-spacing: -1.4px;
      padding-top: 0.25rem;
      font-size: clamp(1rem, 2.08rem ,1.5vw);
      font-weight: 500;
    }

    @media screen and (min-width: 2300px) {
      padding-left: 4rem;
    }
`;

export const Circle1Wrapper = styled.div`
    height: 100%;
    width: 42%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 50%;
    }
`;