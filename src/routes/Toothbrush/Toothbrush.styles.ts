import styled from 'styled-components';

export const Content = styled.div`
  padding-top: 2rem;

  @media screen and (min-width: 2300px) {
    padding-top: 4rem;
  }
`;

export const BrushBG = styled.div`
  display: flex;
  align-items: flex-start;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  background-color: #ffffff;
  width: 100%;
  min-height: 400px;
  margin-top: 1.8rem;
  box-shadow: 0px 0px 12px rgba(54, 54, 54, 0.12);
  height: 80vh;

  @media screen and (min-width: 2300px) {
      // height: 72vh;
  }
    
`;


export const ContentLeft = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 1rem;
  z-index: 99;
`;


export const ContentRight = styled.div`
  height: 100%;
  display: flex;
  z-index: 1;
`;

export const BrushesImg = styled.img`
  margin-left: -120px;
  object-fit: cover;
  align-self: stretch;
  display: block;

  @media screen and (max-width: 1386px) {
  }

  @media screen and (min-width: 2300px) {
    margin-left: -366px;
    }
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

  @media screen and (max-width: 1386px) {
    width: 100%;
  }

 @media screen and (min-width: 2300px) {
    width: 102%
 }

`;

export const LinksWrapper = styled.div`
  display: flex;
  width: 90%;
  padding-top: 1.2rem;

  & > a {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 1386px) {
    width: 100%;
  }

  @media screen and (min-width: 2300px) {
     padding-left: 2rem;
     padding-top: 2rem;
     width: 100%;
 }
`;

export const LinkImg = styled.img`
  width: 75%;
  height: auto;

  @media screen and (max-width: 1386px) {
    width: 90%;
  }

  @media screen and (min-width: 2300px) {
    width: 80%
 }
`;