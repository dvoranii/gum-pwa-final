import { styled } from "styled-components";
import { colors } from "../../../constants/colors";

export const FlossWrapperOuter = styled.div`
    position: relative;
`;

interface SlideWrapperProps {
    $width?: string;
}

export const SlideWrapper = styled.div<SlideWrapperProps>`
    display: flex;
    gap: 1.4rem;
    width: ${(props) => props.$width ? props.$width : "90%"}; 

    small {
        font-family: 'Gotham', sans-serif;
        font-weight: 400;
        font-size:clamp(1.2rem, 1.2vw, 1.8rem);
        font-style: italic;
        color: ${colors.primary};
    }
`;

interface ImgWrapperProps {
    $width: string;
    $marginLeft?: string;

}

export const ImgWrapper = styled.div<ImgWrapperProps>`
    img {
        width: ${(props) => props.$width};
        margin-left: ${(props) => props.$marginLeft ? props.$marginLeft : "0"};

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
    letter-spacing: -0.5px;
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
    margin-left: 12px;
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
    $width?: string;
    $flexGrow?: string;
    $paddingTop?: string;
    $listFontSize?: string;
    $listPaddingBottom?:string;
}

export const ListContainer = styled.div<ListContainerProps>`
    padding-right: 1.8rem;
    flex-grow: ${(props) => props.$flexGrow ? props.$flexGrow : "1"}; 
    width: ${(props) => props.$width ? props.$width : "100%"}; 
    padding-top: ${(props) => props.$paddingTop ? props.$paddingTop : "0"}; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 12px;
        
    ul {
        font-family: 'Gotham', sans-serif;
        font-size: ${(props) => props.$listFontSize ? props.$listFontSize : " clamp(14px, 0.8vw,1.2rem);" };
        color: ${colors.black};
        padding-bottom: ${(props) => props.$listPaddingBottom ? props.$listPaddingBottom : "0.4rem;"}; 
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
            font-size: 14px; 
            color: ${colors.black};
            vertical-align: middle;
            line-height: 1.2; 
        }

        span {
            font-weight: 500;
        }
    }
    
    sup {
        font-size: 8px;
    }

`;

interface InfoGridProps {
    $marginTop?: string;
    $gridCols?: string;
    $paddingTop?:string;
    $width?: string;
}

export const InfoGrid =  styled.div<InfoGridProps>`
    border-top: 1px solid grey;
    display: grid;
    grid-template-columns: ${(props) => props.$gridCols ? props.$gridCols : "8fr 1fr 1fr" };
    gap: 0.25rem;
    width:${(props) => props.$width ?  props.$width : "100%"};
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
