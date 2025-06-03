import styled from "styled-components";
import { colors } from "../../../constants/colors";


interface ColoredCircleProps {
    color?: string;
    hidden?: boolean;
}

export const ColoredCircle = styled.span<ColoredCircleProps>`
    color: ${(props) => props.color || '#000000'};
    font-size: 2.4rem;
    vertical-align: middle;
    margin-right: 5px;
    display: inline-block; 
    margin-top: -6px;
    visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
`;

export const IDBrushesContainer = styled.div`
    // padding-left: 5%; 
    position: relative;
`;

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
            height: 83vh !important;
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

export const SlideRow1 = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SlideRow2 = styled.div`
    padding-top: 1.2rem;
`;

export const Column = styled.div`
    display: flex;
    align-items: center;
    span {
        text-transform: uppercase;
    }
`;

export const InfoGridRow = styled.div`
    display: contents;
    line-height: 0.6;

    @media screen and (min-width: 2300px) {
        line-height: 0.8;
    }
`;

export const Row1WrapperInner = styled.div`
`;

export const Row1WrapperOuter = styled.div`
    display: flex;
    gap: 4.2rem;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid ${colors.black};
`;

export const Row1WrapperInner2 = styled.div`
    padding-bottom: 1.2rem;
    display: flex;
    width: 95%;
    border-bottom: 1px solid ${colors.black};

    p {
        font-family: "Gotham", sans-serif;
        font-weight: 500;
        color: ${colors.black};

    }

    @media screen and (min-width: 2300px) {
        padding-bottom: 2.4rem;
        p {
            font-size: clamp(1.2rem, 2vw, 1.8rem);
        }
    }
`;

export const TextWrapper = styled.div`
    flex: 1;

    p {
        font-family: "Gotham", sans-serif;
        font-weight: 500;
        color: ${colors.black};
    }

    @media screen and (min-width: 2300px) {
        p {
           font-size: clamp(1.2rem, 2vw, 1.8rem);
        }
    }
`;

export const TextWrapper2 = styled.div`

    p {
        font-family: "Gotham", sans-serif;
        font-weight: 500;
        color: ${colors.black};

    }

    @media screen and (min-width: 2300px) {
        p {
           font-size: clamp(1.2rem, 2vw, 1.8rem);
        }
    }
`;

// export const TextWrapper3 = styled.div`
//     border-bottom: 1px solid grey;
// `;

export const TextWrapperOuter = styled.div`
    border-bottom: 2px solid ${colors.primary};
    
    @media screen and (min-width: 2300px) {
        padding-bottom: 2.4rem;
    }
`;

export const TextAndImgWrapper = styled.div`
    flex: 2.5;

    @media screen and (min-width: 2300px) {
        flex: 3;
    }
`;
export const ImgInnerWrapper = styled.div`
    img{
        width: 90%;
    }

    @media screen and (min-width: 2300px) {
        img {
            width: 100%;
        }
    }
`;

export const ImgWrapper = styled.div`
    width: 100%;
    padding-top: 2.4rem;
    img {
        width: 90%;
    }

    @media screen and (min-width: 2300px) {
        img {
            width: 100%;
        }
    }
`;

export const ImgWrapper1 = styled.div`
    width: 70%;
    img {
        width: 90%;
    }

    @media screen and (min-width: 2300px) {         
        width: 100%;
        img {
            width: 100%;
        }
    }
`;

export const ImgWrapper2 = styled.div`
    width: 85%;
    display: flex;
    justify-content: flex-end;
    padding-top: 1.2rem;

    img {
        width: 70%;
    }

    @media screen and (min-width: 2300px) {
        padding-top: 2.4rem;
    }
`;

export const ImgWrapper3 = styled.div`
    flex: 1;
    img {
        width: 85%;
    }

    @media screen and (min-width: 2300px) {
        img {
            width: 100%;
        }
    }
`;

export const ImgWrapper4 = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
     img {
         width: 40%;
     }

     @media screen and (min-width: 2300px) {
        img {
            width: 50%;
        }
     }
`;

export const ImgWrapper5 = styled.div`
    flex:1;
    width: 100%;
    display: flex;
    justify-content: center;
    img {
        width: 50%;
    }
`;

export const ListContainer = styled.div`
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
        
    ul {
        font-family: 'Gotham', sans-serif;
        font-size:clamp(0.8rem, 0.9vw, 1.4rem);
        color: ${colors.black};
        padding: 0 0 1.2rem 0;
        list-style: none;
        line-height: 1.2;

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
            line-height: 1.5; 
        }

        span {
            font-weight: 500;
        }
    }

        @media screen and (min-width: 2300px) {
            ul {
                font-size: clamp(1.2rem, 2vw, 1.8rem);
            }
        }
    
    sup {
        font-size: 12px;
    }
`;

export const SlideWrapperInner = styled.div`
    max-width: 80vw;
    display: flex;
    flex-direction: column;

    h2 {
        font-family: "Gotham", sans-serif;
        color: ${colors.primary};
        font-size: clamp(16px, 1.4vw, 2.6rem);
        text-transform: uppercase;
    }
`;


export const Slide3WrapperInner = styled.div`
    display: flex;
    border-bottom: 1px solid grey;
    padding-bottom: 2.4rem;
    h2 {
        font-family: "Gotham", sans-serif;
        color: ${colors.primary};
        font-size: clamp(16px, 1.4vw, 2.6rem);
        text-transform: uppercase;
    }
`;

export const Slide3ImgAndTextWrapper = styled.div`
    flex: 3;
`;

export const Slide3WrapperOuter = styled.div`    
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;
    padding-top: 2.4rem;
`
;
export const CarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const InfoGrid =  styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    gap: 0.25rem;
    width: 80%;
    margin-top: auto;
    column-gap: 1rem;

    font-family: "Gotham", sans-serif;
    padding-top: 1.2rem;
    font-size: clamp(14px, 1vw, 1.4rem);
    color: #666666;
`;

export const InfoGrid2 = styled.div`
    display: grid;
    grid-template-columns: 0.35fr 3fr 1fr;
    width: 70%;
    font-family: "Gotham", sans-serif;
    padding-top: 1.2rem;
    font-size: clamp(14px, 1vw, 1.4rem);
    color: ${colors.black};
`;