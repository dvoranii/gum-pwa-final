import styled from 'styled-components';

export const Content = styled.div`
  padding-top: 2rem;

  @media screen and (min-width: 2300px) {
    padding-top: 4rem;
  }
`;

export const BtcBG = styled.div`
  display: flex;
  align-items: flex-start;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  margin-top: 1.8rem;
  box-shadow: 0px 0px 12px rgba(54, 54, 54, 0.12);

  @media screen and (min-width: 2300px) {
    padding-bottom: 6.4rem;
  }
`;


export const ContentLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 1rem;
`;
export const ContentRight = styled.div`
  width: 50%;
`;

export const IntroTitleWrapper = styled.div`
  padding-left: 20px;

  @media screen and (min-width: 2300px) {
    padding-left: 4.8rem;
    padding-top: 2rem;
  }
`;

export const IntroTitle = styled.h1`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: #00a16b;
  font-size: 4.2rem;
  line-height: 0.9;
  letter-spacing: -3px;

  @media screen and (min-width: 2300px) {
    font-size: 7.4rem;
  }
`;

export const RecommendedWrapper = styled.div`
  width: 100%;
`;
export const Recommended = styled.img`
  width: 80%;
  height: auto;

 @media screen and (min-width: 2300px) {
    width: 100%
 }

`;

export const LinksWrapper = styled.div`
  display: flex;
  padding-top: 1.2rem;

  & > a {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 2300px) {
     padding-left: 2rem;
     padding-top: 2rem;
 }
`;

export const LinkImg = styled.img`
  width: 75%;
  height: auto;

  @media screen and (min-width: 2300px) {
    width: 80%
 }
`;