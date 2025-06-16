import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Content = styled.div`
  padding-top: 2rem;

  @media screen and (min-width: 2300px) {
    padding-top: 4rem;
  }
`;

export const BrushBG = styled.div`
  display: flex;
  align-items: flex-start;
  border-top-left-radius: 48px;
  border-bottom-left-radius: 48px;
  background-color: #ffffff;
  width: 100%;
  margin-top: 1.8rem;
  box-shadow: 0px 0px 12px rgba(54, 54, 54, 0.12);
  height: 82vh;


  @media screen and (max-width: 1386px) {
      margin-top: 0;
  }
    
`;


export const ContentLeft = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  padding: 0 0 40px 6.4rem;
  height: 100%;
  z-index: 99;

  @media screen and (max-width: 1386px) {
    padding-left: 3.2rem;
  }
`;


export const ContentRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;


export const BrushesImg = styled.img`
  width: 60%; 
  height: auto; 
  object-fit: contain;
  max-height: 100%; 

  @media screen and (min-width: 2300px) {
    width: 70%;
  }
`;

export const IntroTitleWrapper = styled.div`
  padding-left: 20px;
  flex: 1;
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 2300px) {
    padding-left: 2.4rem;
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
  flex: 1;
  display: flex;
  align-items: center;

  h3 {
    font-family: "Gotham", sans-serif;
    color: ${colors.primary};
    font-weight: 400;
    font-size: clamp(24px, 1.6vw, 3.2rem);
    margin-top: 1.2rem;
    margin-left: 1.2rem;
  }
`;

export const Recommended = styled.img`
  width: 50%;
  height: auto;
`;

export const LinksWrapper = styled.div`
  display: flex;
  // gap: 1.8rem;
  // margin-left: -3.2rem;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  flex: 1;

  @media screen and (max-width: 1386px) {
    width: 100%;
  }

  @media screen and (min-width: 2300px) {
     padding-left: 2rem;
     width: 100%;
     gap: 3rem;
     margin-left: 0;
 }
`;


export const StyledLink = styled(Link)`
  display: flex;
  justify-content:  flex-start;
`;

export const LinkImg = styled.img`
  width: 70%;
  height: auto;
  aspect-ratio: 244/291;

  @media screen and (max-width: 1386px) {
    width: 80%;
  }

  @media screen and (min-width: 2300px) {
    width: 12vw;
 }
`;