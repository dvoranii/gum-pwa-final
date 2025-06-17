import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const FlossersContainer = styled.div`
   position: relative;
`;

export const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

    .carousel {
        width: 100%;
        width: 100%;

        .flickity-viewport {
            height: 80vh !important;
        }
        
        .flickity-page-dots {
            top: unset;
            bottom: -28px;
            right: 94px;
            left: unset;
            width: auto;
            text-align: right;
            z-index: 10; 

            @media screen and (min-width: 2300px) {
                bottom: -48px;
                right: 170px;
            }
            
            .dot {
                width: 16px;
                height: 16px;
                opacity: 1 !important;
                background: ${colors.dotBG};
                margin: 0 6px;
                
                &.is-selected {
                    background: ${colors.dotBGActive};
                }

                @media screen and (min-width: 2300px) {
                    width: 25px;
                    height: 25px;
                    margin: 0 10px;
                }
            }
        }

        .flickity-button {
            display: none;
        }

    }
`;

export const SlideWrapper = styled.div`
    display: flex;
    gap: 2.4rem;
    width: 90%;
    height: 100%;
`;

export const CarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


`;

export const SlideColumn1 = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 1.2rem;

    h4 {
      font-weight: 300;
      font-family: "Gotham", sans-serif;
      font-size: clamp(18px, 1.8vw, 2.4rem);
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

    @media screen and (max-width: 1180px) {  
        padding-top: 0;  
        h4 {
            font-size: clamp(18px, 1.6vw, 2.4rem);
        }
    }
    
    @media screen and (min-width: 2300px) {
        padding-top: 2.4rem;
        min-width: 40%;
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
   border-bottom: 1px solid grey;
   img {
      padding: 1rem;
      width: 90%;
    }

   @media screen and (max-width: 1368px) {
      img {
         width: 100%;
      }
   }

   @media screen and (min-width: 2300px) {
      img {
         width: 100%;
      }
    }

`;

export const ImgWrapper2 = styled.div`
    padding-top: 1.8rem;
    img {
        width: 50%;
    }
`;

export const ListContainer = styled.div`
    width: 92%;

    ul {
        font-family: 'Gotham', sans-serif;
        font-size:clamp(0.9rem, 1.2vw, 1.8rem);
        color: ${colors.black};
        line-height: 1.2;
        margin-inline-start: 16px;

        span {
            font-weight: 500;
        }

         sup {
            font-size: 12px;
         }
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
    padding-top: 1.2rem;
    font-size: clamp(14px, 1vw, 1.4rem);
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

