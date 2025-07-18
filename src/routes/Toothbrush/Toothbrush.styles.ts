import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Content = styled.div`
  height: 93%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BrushBG = styled.div`
  display: flex;
  align-items: flex-start;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0px 0px 12px rgba(54, 54, 54, 0.12);
  height: 82vh;
    
`;


export const ContentLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 40px 3.4rem;
  height: 100%;
  z-index: 99;
  flex: 1;

`;


export const ContentRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  flex:1;
`;


export const BrushesImg = styled.img`
  width: 85%; 
  height: auto; 
  object-fit: contain;
  max-height: 100%; 
  margin-left: -54px;
  margin-top: 1.2rem;

`;

export const IntroTitleWrapper = styled.div`
  padding-left: 20px;
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

export const IntroTitle = styled.h1`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: #00a16b;
  font-size: 3.4rem;
  line-height: 0.9;
  letter-spacing: -3px;
`;

export const RecommendedWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;

  h3 {
    font-family: "Gotham", sans-serif;
    color: ${colors.primary};
    font-weight: 300;
    font-size: clamp(28px, 1.6vw, 3.2rem);
    margin-top: 1.2rem;
    margin-left: 1.2rem;

    sup {
      font-size: 12px;
    }
  }
`;

export const Recommended = styled.img`
  width: 42%;
  height: auto;
`;

export const LinksWrapper = styled.div`
  display: flex;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  flex: 1;
  width: 65%;
`;


export const StyledLink = styled(Link)`
  display: flex;
  justify-content:  flex-start;
  text-decoration: none;
`;

export const LinkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const LinkImg = styled.img`
  width: 95%;
  height: auto;
`;

export const LinkText = styled.span`
  font-family: "Gotham", sans-serif;
  color: ${colors.secondaryGreen};
  font-size: clamp(16px, 1.5vw, 1.8rem);
  font-weight: 400;
`;