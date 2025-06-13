import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

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
  height: 82vh;

  @media screen and (max-width: 1024px) {
      height: 80vh;
  }
  
  @media screen and (max-width: 1366px) {
    margin-top: 0;
  }
    
  @media screen and (min-width: 2300px) {
    padding-bottom: 3.4rem;
  }
`;


export const ContentLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
`;


export const ContentRight = styled.div`
  width: 50%;
  height: 100%;
`;

export const FlossersImg = styled.img`
  width: 100%;
  height: auto;
  margin-left: -88px;
  

  @media screen and (max-width: 1386px) {
    width: 100%;
    margin-left: 0;
    padding-top: 4rem;
  }

  @media screen and (min-width: 2300px) {
    width: 100%;
    padding-top: 146px;
    margin-left: -18px;
    }
`;

export const IntroTitleWrapper = styled.div`
  padding-left: 20px;
  z-index: 99;
  flex: 1;
  display: flex;
  align-items: flex-end;

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
  width: 40%;
  height: auto;

  @media screen and (max-width: 1386px) {
    width: 100%;
  }

//  @media screen and (min-width: 2300px) {
//     width: 100%
//  }

`;

interface StyledLinkProps {
  $flexPosition?: string;
}

export const LinksWrapper = styled.div`
  display: flex;
  gap: 1.8rem;
  margin-left: -3.2rem;
  -webkit-tap-highlight-color: transparent;
  flex: 1;
  align-items: center;

  @media screen and (max-width: 1386px) {
    width: 100%;
  }

  @media screen and (min-width: 2300px) {
     padding-left: 2rem;
     padding-top: 2rem;
     width: 100%;
     gap: 3rem;
     margin-left: 0;
 }
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  display: flex;
  justify-content: ${(props) => props.$flexPosition || 'center'};
`;

export const LinkImg = styled.img`
  width: 70%;
  height: auto;
  aspect-ratio: 244/291;

  @media screen and (min-width: 2300px) {
    width: 12vw;
 }
`;