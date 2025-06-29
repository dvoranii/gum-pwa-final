import { styled } from "styled-components";
import { colors } from "../../../../constants/colors";

type ColumnProps = {
  $isSingleColumn?: boolean;
};

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;


export const Column = styled.div<ColumnProps>`
    flex:1;
    // width: ${props => props.$isSingleColumn ? '100%' : '50%'};
    width: 50%;
    max-width: ${props => props.$isSingleColumn ? '50%' : '100%'};
    display: flex;
    gap: 1.2rem;
    height: 100%;
`;

export const BrushImgWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    img {
        height: 90%;
        width: auto;
    }
`;

type TextAndImgWrapperProps = {
  $hasMultipleSpecRows?: boolean;
};

export const TextAndImgWrapper = styled.div<TextAndImgWrapperProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 2rem 0 1rem;
    height: 95%;
    position: relative;
    padding-bottom: ${props => props.$hasMultipleSpecRows ? '5.2rem' : '4.2rem'};
`;

export const DiagramsWrapper = styled.div`
    img {
        width: 100%;
    }
`;

export const TextWrapper = styled.div`
    max-height: 180px;
    flex-grow: 0.5;
    h2 {
        font-family: "Gotham", sans-serif;
        color: ${colors.primary};
        margin-bottom: 0.4rem;
        font-size: 1.2rem;
        padding-top: 0.4rem;
        text-transform: uppercase;
    }
    
    p {
        font-family: "Gotham", sans-serif;
        color: ${colors.black};
        font-weight: 400;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        line-height: 1.4;
        
        span {
            font-weight: 600;
        }

        sup { 
            font-weight: 300;
            font-size: 0.5em; 
            vertical-align: super; 
        }
    }

    @media screen and (max-width: 1080px) {
        max-height: 220px;
    }
`;

export const ImprintSection = styled.div`
`;

export const ImprintTextPlaceholder = styled.div`
    height: 27.33px; 
    visibility: hidden;
`;

export const ImprintTextWrapper = styled.div`
    position: relative;
    margin-bottom: 1rem;
`;

export const ImprintText = styled.div`
    font-family: "Gotham", sans-serif;
    color: #c1a22d;
    font-weight: 500;
    font-size: 0.9rem;
    font-style: italic;
    margin-bottom: 0.5rem;
`;

export const ImprintLine = styled.div`
    height: 2px;
    background: #c1a22d;
    width: 83%;
    position: relative;
    margin-left: -20px;
    
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background: #c1a22d;
        border-radius: 50%;
    }
`;

export const ImprintAndBadgeWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const ImprintLeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const ColorCircles = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-left: -14px;
`;

export const ColorCircle = styled.div<{ color: string; secondaryColor?: string }>`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${props => props.color};
    border: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;

    ${props => props.secondaryColor && `
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50%;
            background: ${props.secondaryColor}
        }
    `}
`;

export const AntibacterialBadge = styled.div`
    background: ${colors.primary};
    color: white;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Gotham", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.1;
    margin-right: 10px;

    span {
        letter-spacing: 0.4px;
    }
    
    span:first-child {
        font-weight: 200;
        margin-bottom: 2px;
    }
    
    span:nth-child(2) {
        font-weight: 500;
    }
    
    span:last-child {
        font-weight: 500;
    }

    span:last-child sup { 
        font-weight: 300;
        font-size: 0.5em; 
        vertical-align: super; 
    }
`;

export const BadgePlaceholder = styled.div`
    width: 100px;
    height: 100px; 
    margin-right: 10px;
    visibility: hidden;
`;

export const BrushSpecsWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid ${colors.black};
    padding: 0.8rem 0;
    width: 90%;
    box-sizing: border-box;
    gap: 0.3rem;
`;

export const BrushSpecsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    place-items: start;
    width: 90%;
`;

export const SpecItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const SpecLabel = styled.span`
    font-family: "Gotham", sans-serif;
    color: ${colors.black};
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
`;

export const SpecValue = styled.span`
    font-family: "Gotham", sans-serif;
    color: ${colors.black};
    font-size: 0.7rem;
`;


// External styles
export const DescriptionBold = styled.span`
    font-weight: 600;
`;

export const TitleLight = styled.span`
    font-weight: 200;
`;