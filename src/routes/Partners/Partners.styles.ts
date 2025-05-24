
import { styled } from "styled-components";

export const Content = styled.div`
    padding-top: 2rem;

    @media screen and (min-width: 2300px) {
      padding-top: 3rem;
    }
`;

export const PartnersBG = styled.div`
  display: flex;
  gap: 2.4rem;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  background-color: #ffffff;
  padding: 2rem 2rem 4rem 2rem;
  width: 100%;
  margin-top: 2.4rem;
  box-shadow: 0px 0px 12px rgba(54, 54, 54, 0.12);

  @media screen and (min-width: 2300px) {
    padding: 6.4rem 0;
  }
`;

export const GumLogoCol = styled.div`
  width: 30%;
  padding-left: 4rem;

`;
export const GumLogo = styled.img`
  width: 100%;

  @media screen and (min-width: 2300px) {
    padding-top: 9rem;
  }
`;

export const TextWrapper = styled.div`

  padding-top: 2rem;
  text-align: right;
  width: 100%;
  color: #00a16b;
  font-family: 'Gotham', sans-serif;
 
  @media screen and (min-width: 2300px) {
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
  display: flex;
`;

export const ImgTextWrapper = styled.div`
  color: #00a16b;
  font-family: 'Gotham', sans-serif;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
  }

  p {
    line-height: 1.2;
    letter-spacing: -1px;
    padding-top: 0.5rem;
  }

  & > img {
      width: 100%;
  }

  @media screen and (min-width: 2300px) {
    h4 {
      font-size: 3.6rem;
      padding-top: 1rem;
    }

    p {
      font-size: 2.08rem;
      font-weight: 500;
    }

    & > img {
      max-width: 375px;
    }
  
  }
`;

export const ColTextWrapper = styled.div`
    padding-left: 2.4rem;
`;