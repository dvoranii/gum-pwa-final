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

        @media (min-width: 1600px) {
            width: calc(${props => props.$width} * 0.75);
        }
    }
`;

export const ColumnTitle = styled.h4`
    font-family: 'Gotham', sans-serif;
    font-weight: 700;
    font-size: clamp(16px, 1.8vw, 2.6rem);
    text-transform: uppercase;
    letter-spacing: -1px;
    color: ${colors.primary};
    padding-top: 0.4rem;

    span {
        font-weight: 300;
    }

    @media (min-width: 1600px) {
        padding-top: 0;
    }

    @media screen and (max-width: 1080px) {
        font-size: clamp(16px, 1.6vw, 2.4rem);
        padding-top: 0;
    }
`;

export const SlideColumn1 = styled.div`
    min-width: 50%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    position: relative;
`;

export const SlideColumn2 = styled.div`
    min-width: 50%; 
    display: flex;
    flex-direction: column;

    p {
        font-family: "Gotham", sans-serif;
        font-size:clamp(1.2rem, 1.2vw, 1.8rem);
        padding-top: 1.2rem;
        color: ${colors.black};
        font-weight: 500;
    }

    @media screen and (max-width: 1600px) {
        p {
            font-size: clamp(14px, 0.8vw,1.2rem);
            padding-bottom: 0.4rem;
            padding-top: 0.4rem;
        }
    }
`;

interface ListContainerProps {
    $padding?: string;
    $flexGrow?: string;
}

export const ListContainer = styled.div<ListContainerProps>`
    padding-right: 1.8rem;
    flex-grow: ${(props) => props.$flexGrow ? props.$flexGrow : "1"}; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
        
    ul {
        font-family: 'Gotham', sans-serif;
        font-size: clamp(14px, 0.8vw,1.2rem);
        color: ${colors.black};
        padding-bottom: 0.4rem;
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
            line-height: 1.2; 
        }

        span {
            font-weight: 500;
        }
    }
    
    sup {
        font-size: 12px;
    }

`;

interface InfoGridProps {
    $marginTop?: string;
    $gridCols?: string;
    $paddingTop?:string;
}

export const InfoGrid =  styled.div<InfoGridProps>`
    border-top: 1px solid grey;
    display: grid;
    grid-template-columns: ${(props) => props.$gridCols ? props.$gridCols : "8fr 1fr 1fr" };
    gap: 0.25rem;
    width: 100%;
    margin-top: ${(props) => props.$marginTop ? props.$marginTop : 'auto'};
    column-gap: 1rem;

    font-family: "Gotham", sans-serif;
    padding-top: 1.2rem;
    font-size: clamp(12px, 1vw, 1.4rem);
    color: #666666;

    @media screen and (max-width: 1600px) {
         padding-top:${(props) => props.$paddingTop ? props.$paddingTop : '0.4rem'};
    }
`;

export const InfoGridRow = styled.div`
    display: contents;
`;

export const Column = styled.div``;
export const Column2 = styled.div`

    @media screen and (max-width: 1080px) {
        font-size: clamp(10px, 0.8vw, 1.2rem);
    }
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

export const ShopifyIconImg = styled.img`
  width: 60px; 
  margin: 10px 0;
  display: block; 

  @media (max-width: 1600px) {
    width: 30px;
  }
`;