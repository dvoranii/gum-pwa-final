import { styled } from "styled-components";
import { colors } from "../../../../../constants/colors";


interface ContainerProps {

  $marginTop?:string;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${props=> props.$marginTop || "0"};
`;

interface TopImageWrapperProps {
    $marginBottom?: string;
}

export const TopImageWrapper = styled.div<TopImageWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.$marginBottom || "2rem"};
`;

interface ContentWrapperProps {
    $padding?: string;
    $marginTop?: string;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  width: 100%;
  padding: ${(props) => props.$padding ? props.$padding : "0 1.5rem"};
  margin-top: ${(props) => props.$marginTop ? props.$marginTop : "0"};
`;

export const MainImage = styled.img<{ $width?: string }>`
  width: ${props => props.$width || "80%"};
  height: auto;
  object-fit: contain;
`;

interface TitleProps {
  $fontSize?: string;
}

export const Title = styled.h2<TitleProps>`
  font-family: 'Gotham', sans-serif;
  font-weight: 600;
  font-size: ${props => props.$fontSize || "clamp(24px, 6vw, 3.2rem)"};
  color: ${colors.primary};
  letter-spacing: -2px;
  line-height: 1;
`;

interface SubtitleProps {
  $fontSize?: string;
}

export const Subtitle = styled.h3<SubtitleProps>`
  font-family: 'Gotham', sans-serif;
  font-weight: 400;
  font-size: ${props => props.$fontSize || "clamp(18px, 4.3vw, 2.2rem)"};
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: -1px;

`;

interface BulletListProps {
    $marginInlineStart?: string;
    $fontSize?: string;
    $listItemMarginBottom?: string; 
}

export const BulletList = styled.ul<BulletListProps>`
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
  margin-inline-start: ${(props) => props.$marginInlineStart || "0"};
  padding-top: 0.4rem;
  line-height: 1.3;

  li {
    margin-bottom:${(props) => props.$listItemMarginBottom ? props.$listItemMarginBottom : "0" };
    font-family: 'Gotham', sans-serif;
    font-size: ${(props) => props.$fontSize ? props.$fontSize : "clamp(16px, 1.9vw, 1.8rem)"};
    color: ${colors.primary};
    font-weight: 500;

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

export const CombinationTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const TitlesWrapper = styled.div``;

export const CombinationSubtitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const PlusSign = styled.span`
  font-family: 'Gotham', sans-serif;
  font-weight: 600;
  font-size: clamp(24px, 6vw, 3.2rem);
  color: ${colors.primary};
  align-self: center;
`;