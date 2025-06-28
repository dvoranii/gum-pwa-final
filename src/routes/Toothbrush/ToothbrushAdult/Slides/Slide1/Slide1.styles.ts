import { styled } from "styled-components";
import { colors } from "../../../../../constants/colors";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
export const Column1 = styled.div`
    flex:1;
    width: 50%;
    display: flex;
    gap: 1.2rem;
    height: 100%;
`;
export const Column2 = styled.div`
    flex:1;
    width: 50%;
    display: flex;
    gap: 1.2rem;
    height: 100%;
`;

export const BrushImgWrapper = styled.div`
    display: flex;
    align-items: center;
    img {
        height: 90%;
        width: auto;
    }
`;

export const TextAndImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem 0 1rem;
    height: 100%;
    position: relative;
`;

export const DiagramsWrapper = styled.div`
    img {
        width: 100%;
    }
`;

export const TextWrapper = styled.div`

    h2 {
        font-family: "Gotham", sans-serif;
        color: ${colors.primary};
        margin-bottom: 1rem;
        font-size: 1.5rem;
        
        span {
            font-weight: 200;
        }
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
`;

export const ImprintSection = styled.div`
    margin-top: 1rem;
`;

export const ImprintTextWrapper = styled.div`
    position: relative;
    margin-bottom: 1rem;
`;

export const ImprintText = styled.div`
    font-family: "Gotham", sans-serif;
    color: #B8860B;
    font-weight: 500;
    font-size: 0.9rem;
    font-style: italic;
    margin-bottom: 0.5rem;
`;

export const ImprintLine = styled.div`
    height: 2px;
    background: #B8860B;
    width: 76%;
    position: relative;
    margin-left: -20px;
    
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background: #B8860B;
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
`;

export const ColorCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.color};
    border: 1px solid rgba(0, 0, 0, 0.1);
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
    
    span:first-child {
        font-weight: 200;
        margin-bottom: 2px;
    }
    
    span:nth-child(2) {
        font-weight: 600;
    }
    
    span:last-child {
        font-weight: 600;
    }

    span:last-child sup { 
        font-weight: 300;
        font-size: 0.5em; 
        vertical-align: super; 
    }
`;

export const BrushSpecsWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;rus
    right: 0;
    border-top: 1px solid ${colors.black};
    padding: 0.8rem 0;
    width: 90%;
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