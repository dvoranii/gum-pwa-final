import { styled } from "styled-components";
import { colors } from "../../../../../constants/colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1.2rem;
  gap: 1.8rem;
`;

export const ImgWrapper = styled.div`
    height: 78vh;
    display: flex;
    align-items: flex-end;
`;
export const ImgAndTextWrapper = styled.div``;

export const MainImage = styled.img<{ $height?: string }>`
  height: ${props => props.$height || "85%"}; 
  width: auto;
  object-fit: contain;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-family: 'Gotham', sans-serif;
  font-weight: 600;
  font-size: clamp(24px, 6vw, 3.8rem);
  color: ${colors.primary};
  letter-spacing: -2px;
  text-align: left;
  padding-top: 2.4rem;
`;

interface SubtitleProps {
  $fontSize?: string;
}

export const Subtitle = styled.h3<SubtitleProps>`
  font-family: 'Gotham', sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.$fontSize ? props.$fontSize : "clamp(18px, 4.3vw, 3.2rem)" };
  color: ${colors.primary};
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: -2px;
  text-align: left;
  margin-top: -12px;
`;

interface BulletListProps {
  $marginBottom?: string;
}

export const BulletList = styled.ul<BulletListProps>`
  padding: 0;
  margin-bottom: ${(props) => props.$marginBottom ? props.$marginBottom : "2rem"};
  text-align: left;

  li {
    font-family: 'Gotham', sans-serif;
    font-size: clamp(16px, 2vw, 1.8rem);
    color: ${colors.primary};
    font-weight: 500;
    line-height:1.2;
    letter-spacing: -0.5px;

    span {
        display: block;
        width: 100%;
        color: #666;
    }

    sup {
      font-size: 12px;
    }
    
  }
`;


interface ComparisonImageProps {
  $marginLeft?: string;
}

export const ComparisonImage = styled.img<ComparisonImageProps>`
  max-width: 100%;
  align-self: center;
  margin-top: auto;
  margin-bottom: 2rem;
  margin-left: ${(props) => props.$marginLeft ? props.$marginLeft : "0"};
`;

export const StyledSegment = styled.span<{ $color?: string }>`
  color: ${colors.primary || '#666'};
  display: inline;
`;