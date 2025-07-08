import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const FlossersContainer = styled.div`
   position: relative;
`;


interface SlideWrapperProps {
    $gap?: string;
    $marginLeft?: string;
}

export const SlideWrapper = styled.div<SlideWrapperProps>`
    display: flex;
    gap: ${props => props.$gap || "2.4rem"};
    width: 90%;
    height: 100%;
    ${props => props.$marginLeft && `margin-left: ${props.$marginLeft}`};
`;

export const SlideColumn1 = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 0rem;

    h4 {
      font-weight: 300;
      font-family: "Gotham", sans-serif;
      font-size: clamp(18px, 1.6vw, 2.4rem);
      color: ${colors.primary};

      span:nth-of-type(1) {
         font-weight: 600;
         text-transform: none;
      }

      span:nth-of-type(2) {
         text-transform: uppercase;
         font-weight: 400;
      }

      span:nth-of-type(3) {  
         text-transform: uppercase; 
         font-weight: 600;
      }

      span:nth-of-type(4) {  
         text-transform: uppercase; 
         font-weight: 900;
      }
    }
    
`;

export const SlideColumn2 = styled.div`
    width: 55%; 
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const ImgWrapper = styled.div`
   width: 100%;
   position: relative;
   border-bottom: 1px solid grey;
   > img {
      padding: 1rem;
      width: 100%;
    }

`;

export const ImgWrapper2 = styled.div`
    padding-top: 1.8rem;
    position: relative;
    img {
        width: 50%;
    }
`;

export const ListContainer = styled.div`
    width: 92%;
    margin-top: 12px;

    ul {
        font-family: 'Gotham', sans-serif;
        font-size:clamp(0.9rem, 1.2vw, 1.8rem);
        color: ${colors.black};
        line-height: 1.2;
        margin-inline-start: 16px;
        list-style: none;

        li {
            position: relative;
            padding-left: 1.2rem;
        }

        li::before {
            content: "•";
            position: absolute;
            left: 0;
            font-size: 14px; 
            color: ${colors.black};
            vertical-align: middle;
            line-height: 1.2; 
        }

        span {
            font-weight: 500;
        }

         sup {
            font-size: 8px;
         }
   }

   @media screen and (max-width: 1080px) {
    margin-top: 4px;
   }

`;

interface InfoGridProps {
    $width?: string;
}

export const InfoGrid =  styled.div<InfoGridProps>`
    display: grid;
    grid-template-columns:3fr 1fr;
    gap: 0.25rem;
    width: ${(props) => props.$width ? props.$width : "100%"};
    column-gap: 1rem;

    font-family: "Gotham", sans-serif;
    padding-top: 0.8rem;
    font-size: clamp(12px, 1vw, 1.4rem);
    color: ${colors.black};
`;

export const Row = styled.div`
    display: contents;
`;

export const Column = styled.div``;

interface TitleListWrapperProps {
    $paddingTop?: string;
}

export const TitleListWrapper = styled.div<TitleListWrapperProps>`
    padding-top: ${(props) => props.$paddingTop ? props.$paddingTop : "1.2rem"};
`;

