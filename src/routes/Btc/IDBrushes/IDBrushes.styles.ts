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
    padding-top: 0.5rem;
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
    line-height: 0.5;

    
    @media screen and (max-width: 1080px) {
        line-height: 0.6;        
    }

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
`;

export const TextWrapper2 = styled.div`

    p {
        font-family: "Gotham", sans-serif;
        font-weight: 500;
        color: ${colors.black};

    }

`;


export const TextWrapperOuter = styled.div`
    border-bottom: 2px solid ${colors.primary};
`;

export const TextAndImgWrapper = styled.div`
    flex: 2.5;

`;
export const ImgInnerWrapper = styled.div`
    img{
        width: 90%;
        margin-top: 0.4rem;
    }
`;

export const BristleAndAntibacterialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    gap: 4px;
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
        width: 90%;
        object-fit: contain;
    }

    @media screen and (max-width: 1080px) {
        width: 70%;
    }
`;

export const ImgWrapper2 = styled.div`
  width: 66%;
  max-width: 800px;
  display: flex;
  padding-top: 0.4rem;
  position: relative;
  margin-left: 74px;

  > img {
    width: 100%;
    height: auto;
  }
`;

export const SizingDiagramContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const BristlesAndAntiBacterialWrapper = styled.div`
    display: flex;

    img {
        width: 67%;
        padding: 4px;
        object-fit: contain;
    }
`;

interface BristlesAndNylonWrapperProps {
    $flex?:string;
}

export const BristlesAndNylonWrapper = styled.div<BristlesAndNylonWrapperProps>`
    flex: ${props => props.$flex || "1"};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    padding-right: 2.4rem;
`;


export const BristlesImgWrapper2 = styled.div`
    display: flex;
    justify-content: center;

    img {
        max-width: 110px;
    }
`;

export const ImgWrapper5 = styled.div`
    flex:1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    img {
        width: 50%;
        max-width: 110px;
        object-fit: contain;
    }
`;

export const DiagramSection = styled.div`
    width: 100%;
    max-width: 420px;
    padding-top: 2rem;
    padding-right: 3.2rem;

    @media screen and (max-width: 1080px) {
        padding-top: 1.2rem;
    }
`;

export const BristlesWrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const BristlesTextWrapper = styled.div`
    flex: 1;
    padding-top: 1.2rem;
    
    p {
        font-family: "Gotham", sans-serif;
        font-weight: 500;
        color: #777;
        font-style: italic;
        font-size: 12px;

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
    flex: 1;
    margin-right: -12px;
`;

export const BristlesImgWrapper = styled.div`
    flex: 1;
    min-width: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        width: 90%;
        height: auto;
        display: block;
    }

    @media screen and (max-width: 1080px) {
        min-width: 112px;
    }
`;

export const BristleLabel = styled.div`
    text-align: center;
    margin-top: 4px;
    font-family: "Gotham", sans-serif;
    font-size: 12.5px;
    color: #666;
    font-style: italic;
`;

export const FeatureCallouts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 14px;
    gap: 20px;
`;


interface NylonCalloutProps {
    $padding?:string;
    $fontSize?:string;
    $marginRight?: string;
    $marginTop?: string;
    $width?: string;
}

export const NylonCallout = styled.div<NylonCalloutProps>`
    border: 1px solid ${colors.primary};
    border-radius: 30px;
    padding: ${props => props.$padding || "20px 12px"};
    flex: 1;
    width: ${props => props.$width || "90%"};
    ${props => props.$marginRight && `margin-right: ${props.$marginRight}`};
    ${props => props.$marginTop && `margin-top: ${props.$marginTop}`};
    
    p {
        font-family: "Gotham", sans-serif;
        font-size: ${props => props.$fontSize || "14px"};
        color: ${colors.primary};
        margin: 0;
        text-align: center;
        font-weight: 300;
        line-height: 1.3;
    }

    @media screen and (max-width: 1080px) {
        width: 97%;
        margin-right: 0;
    }
`;

export const AntibacterialCallout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


interface AntibacterialBadgeProps {
    $width?: string;
    $fontSize?: string;
}
export const AntibacterialBadge = styled.div<AntibacterialBadgeProps>`
    background: ${colors.primary};
    color: white;
    border-radius: 50%;
    width:${props => props.$width || '100px'};
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Gotham", sans-serif;
    font-weight: 500;
    text-align: center;
    line-height: 1.2;
    aspect-ratio: 1;
    
    span:first-of-type {
        margin-top: 8px;
    }
    span {
        font-size: ${props => props.$fontSize || "12px"};
        display: block;
        letter-spacing: 0.4px;

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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
        
    ul {
        font-family: 'Gotham', sans-serif;
        font-size:clamp(0.8rem, 0.9vw, 1.4rem);
        color: ${colors.black};
        padding-bottom: ${props => props.$paddingBottom || "1.2rem"};
        list-style: none;
        line-height: 1.2;

        li {
            position: relative;
            padding-left: 0.8rem;
        }

        li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: ${colors.black};
            vertical-align: middle;
            line-height: 1.3; 
        }

        span {
            font-weight: 500;
        }
    }
    
    sup {
        font-size: 8px;
    }

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