import { styled } from "styled-components";
import { colors } from "../../../../../constants/colors";


interface ContainerProps {
    $gap?: string;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  padding: 0 1.2rem;
  gap: ${(props) => props.$gap ? props.$gap : "0"};
`;

export const ImgWrapper = styled.div`
  height: 78vh;
  display: flex;
  align-items: flex-end;
`;

export const ImgAndTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -12px;
`;

export const MainImage = styled.img<{ $height?: string }>`
  height: ${props => props.$height || "90%"};
  width: auto;
  object-fit: contain;
  margin-bottom: 2rem;
  z-index: 999;
`;

export const Title = styled.h2`
  font-family: 'Gotham', sans-serif;
  font-weight: 600;
  font-size: clamp(24px, 6vw, 3.8rem);
  color: ${colors.primary};
  letter-spacing: -2px;
  text-align: left;
  padding-top: 2.4rem;

  @media screen and (max-width: 1080px) {
     font-size: clamp(24px, 6vw, 3.4rem);
  }
`;

type ResponsiveValue = {
  default: string;
  small?: string;
}

interface SubtitleProps {
  $fontSize?: string | ResponsiveValue;
}

export const Subtitle = styled.h3<SubtitleProps>`
  font-family: 'Gotham', sans-serif;
  font-weight: 400;
  font-size: ${props => 
    typeof props.$fontSize === 'string' 
      ? props.$fontSize 
      : props.$fontSize?.default || "clamp(18px, 4.3vw, 3.2rem)"};
  color: ${colors.primary};
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: -2px;
  text-align: left;
  margin-top: -12px;

  @media screen and (max-width: 1080px) {
    font-size: ${props =>
      typeof props.$fontSize === 'object' && props.$fontSize.small
        ? props.$fontSize.small
        : "clamp(28px, 2vw, 1.8rem)"};
  }
`;

export const BulletList = styled.ul`
  padding: 0;
  margin-bottom: 0.4rem;
  text-align: left;

  li {
    font-family: 'Gotham', sans-serif;
    font-size: clamp(16px, 2vw, 1.8rem);
    color: ${colors.primary};
    font-weight: 500;
    line-height: 1.3;
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
  max-width: 68%;
  margin-bottom: 1.4rem;
  margin-left: ${(props) => props.$marginLeft ? props.$marginLeft : "-12px"};
`;