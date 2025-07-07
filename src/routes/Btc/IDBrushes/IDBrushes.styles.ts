import styled from "styled-components";
import { colors } from "../../../constants/colors";


interface ColoredCircleProps {
    color?: string;
    hidden?: boolean;
}

export const ColoredCircle = styled.span<ColoredCircleProps>`
    color: ${(props) => props.color || '#000000'};
    font-size: 2rem;
    vertical-align: middle;
    margin-right: 5px;
    display: inline-block; 
    margin-top: -6px;
    visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
`;

export const IDBrushesContainer = styled.div`
    position: relative;
`;


export const SlideRow1 = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SlideRow2 = styled.div`
    padding-top: 0.8rem;
    position: relative;
`;

interface ColumnProps {
    $centered?: boolean;
}

export const Column = styled.div<ColumnProps>`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.$centered ? 'center' : ""};
    span {
        text-transform: uppercase;
    }
`;

export const InfoGridRow = styled.div`
    display: contents;
    line-height: 0.6;

`;

export const InfoGridRow2 = styled.div`
    display: contents;
    line-height: 1.5;
    font-family: "Gotham", sans-serif;
    color: ${colors.black};
`;

export const Row1WrapperInner = styled.div`
`;

export const Row1WrapperOuter = styled.div`
    display: flex;
    gap: 1.4rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid ${colors.black};
`;

interface Row1WrapperInner2Props {
    $paddingBottom?: string;
}

export const Row1WrapperInner2 = styled.div<Row1WrapperInner2Props>`
    padding-bottom: ${(props) => props.$paddingBottom ? props.$paddingBottom : "0.8rem"};
    gap: 1.2rem;
    display: flex;
    width: 95%;
    border-bottom: 1px solid ${colors.black};

    p {
        font-family: "Gotham", sans-serif;
        font-weight: 500;
        color: ${colors.black};

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


export const TextWrapperOuter = styled.div`
    border-bottom: 2px solid ${colors.primary};
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

`;

export const ImgWrapper1 = styled.div`
    width: 64%;
    display: flex;
    justify-content: center;

    img {
        width: 100%;
    }

    @media screen and (max-width: 1080px) {
        width: 86%;
    }
`;

export const ImgWrapper2 = styled.div`
    width: 100%;
    display: flex;
    padding-top: 0.4rem;
    position: relative;

     > img {
        width: 86%;
    }
`;

export const ImgWrapper3 = styled.div`
    flex: 1;
    img {
        width: 85%;
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

export const DiagramSection = styled.div`
    width: 100%;
    max-width: 420px;
    padding-top: 2.4rem;
`;

export const BristlesWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 4px;
`;

export const BristlesTextWrapper = styled.div`
    flex: 1;
    padding-top: 1.2rem;
    
    p {
        font-family: "Gotham", sans-serif;
        font-weight: 500;
        color: #666;
        font-style: italic;
        font-size: 14px;

        sup {
            font-size: 8px;
            font-weight: 300;
            font-style: normal;
        }
    }

    @media screen and (max-width: 1080px) {
        p {
            font-size: 12px;
        }
    }
`;

export const BristlesImagesContainer = styled.div`
    display: flex;
    gap: 14px;
    flex: 1;
`;

export const BristlesImgWrapper = styled.div`
    flex: 1;
    min-width: 128px;
    
    img {
        width: 100%;
        height: auto;
        display: block;
    }

    @media screen and (max-width: 1080px) {
        min-width: 112px;
    }
`;

export const BristleLabel = styled.div`
    text-align: center;
    margin-top: 8px;
    font-family: "Gotham", sans-serif;
    font-size: 14px;
    color: #666;
    font-style: italic;
`;

export const FeatureCallouts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
`;

export const NylonCallout = styled.div`
    border: 1px solid ${colors.primary};
    border-radius: 30px;
    padding: 20px;
    flex: 1;
    
    p {
        font-family: "Gotham", sans-serif;
        font-size: 16px;
        color: ${colors.primary};
        margin: 0;
        text-align: center;
        font-weight: 300;
    }
`;

export const AntibacterialCallout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AntibacterialBadge = styled.div`
    background: ${colors.primary};
    color: white;
    border-radius: 50%;
    width: 110px;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Gotham", sans-serif;
    font-weight: 500;
    text-align: center;
    line-height: 1.2;
    
    span {
        font-size: 13px;
        display: block;

        sup {
            font-weight: 300;
            font-size: 6px;
        }
    }
    
`;

interface ListContainerProps {
    $paddingBottom?: string;
}

export const ListContainer = styled.div<ListContainerProps>`
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
        
    ul {
        font-family: 'Gotham', sans-serif;
        font-size:clamp(0.8rem, 0.9vw, 1.4rem);
        color: ${colors.black};
        padding-bottom: 1.2rem;
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

    @media screen and (max-width: 1080px) {
        ul {
            padding-bottom: ${(props) => props.$paddingBottom}
        }
    }
    
    sup {
        font-size: 8px;
    }
`;

export const SlideWrapperInner = styled.div`
    max-width: 80vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: -25px;

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
    padding-top: 2.4rem;`
;

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

interface InfoGridProps {
    $gridColumns?: string; 
}

export const InfoGrid =  styled.div<InfoGridProps>`
    display: grid;
    grid-template-columns: ${(props) => props.$gridColumns ? props.$gridColumns : "4fr 1fr 1fr"};
    gap: 0.55rem;
    width: 85%;
    margin-top: auto;
    column-gap: 1rem;
    font-family: "Gotham", sans-serif;
    padding-top: 0.8rem;
    font-size: clamp(12px, 1vw, 1.4rem);
    color: #666666;

    @media screen and (max-width: 1080px) {
        gap: 0.25rem;
    }
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

export const InfoGrid3 = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 0.85fr 1.1fr 1fr 1fr 1.2fr 1fr;
    width: 83%;
    margin-left: 30px;
    margin-top: 1.2rem;
`;

export const ColouredCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
`;

export const CaptionWrapper = styled.div`
    padding-top: 1.2rem;
    small {
        color: ${colors.black};
        font-family: "Gotham", sans-serif;
        font-size: 16px;
    }
`;