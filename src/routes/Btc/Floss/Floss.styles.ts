import { styled } from "styled-components";
import { colors } from "../../../constants/colors";

export const FlossWrapperOuter = styled.div`
    position: relative;
`;

export const SlideWrapper = styled.div`
    display: flex;
    gap: 2.4rem;
    width: 90%;

    small {
        font-family: 'Gotham', sans-serif;
        font-weight: 400;
        font-size:clamp(1.2rem, 1.2vw, 1.8rem);
        font-style: italic;
        color: ${colors.primary};
    }
`;

interface ImgWrapperProps {
    $width: string

}

export const ImgWrapper = styled.div<ImgWrapperProps>`
    img {
        width: ${(props) => props.$width};
    }
`;

export const ColumnTitle = styled.h4`
    font-family: 'Gotham', sans-serif;
    font-weight: 700;
    font-size: clamp(16px, 1.8vw, 2.6rem);
    text-transform: uppercase;
    letter-spacing: -1px;
    color: ${colors.primary};
    padding-top: 1.2rem;
`;

export const SlideColumn1 = styled.div`
    min-width: 50%;
    display: flex;
    flex-direction: column; 
`;

export const SlideColumn2 = styled.div`
    min-width: 50%; 
    display: flex;
    flex-direction: column;
`;

export const ListContainer = styled.div`

    padding-right: 1.8rem;
    width: 90%;
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
        
    ul {
        font-family: 'Gotham', sans-serif;
        font-size:clamp(1.2rem, 1.2vw, 1.8rem);
        color: ${colors.black};
        padding: 1.2rem 0;
        list-style: none;
        line-height: 1.3;

        li {
            position: relative;
            padding-left: 1.2rem;
        }

        li::before {
            content: "•";
            position: absolute;
            left: 0;
            font-size: 18px; 
            color: ${colors.black};
            vertical-align: middle;
            line-height: 1.3; 
        }

        span {
            font-weight: 500;
        }
    }
    
    sup {
        font-size: 12px;
    }
`;


export const InfoGrid =  styled.div`
    border-top: 1px solid grey;
    display: grid;
    grid-template-columns: 8fr 1fr 1fr;
    gap: 0.25rem;
    width: 100%;
    margin-top: auto;
    column-gap: 1rem;

    font-family: "Gotham", sans-serif;
    padding-top: 1.2rem;
    font-size: clamp(14px, 1vw, 1.4rem);
    color: #666666;
`;

export const InfoGridRow = styled.div`
    display: contents;
`;

export const Column = styled.div``;


export const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    position: relative;

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


export const CarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;