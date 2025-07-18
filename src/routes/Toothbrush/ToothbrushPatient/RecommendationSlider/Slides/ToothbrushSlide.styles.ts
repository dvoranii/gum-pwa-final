// Slides/ToothbrushSlide.styles.ts
import { styled } from "styled-components";
import { colors } from "../../../../../constants/colors";


interface ContainerProps {
    $padding?:string;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding:${props => props.$padding || "2.4rem 0 0 3.4rem"};
`;

interface SlideContainerProps {
    $gap?:string;
}

export const SlideContent = styled.div<SlideContainerProps>`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: ${props => props.$gap || "2.4rem"};
`;

export const TextAndImgWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    flex: 1;
    height: 100%;
    overflow:hidden;
`;

export const ToothbrushImageWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface ToothbrushImageProps {
  $height?: string;
}
export const ToothbrushImage = styled.img<ToothbrushImageProps>`
  width: auto;
  height: ${props => props.$height || "58vh"};
  max-height: 500px;
  object-fit: contain;
`;

interface ContentImageWrapperProps {
    $marginTop?:string;
    $justifyContent?:string;
}

export const ContentImageWrapper = styled.div<ContentImageWrapperProps>`
  flex: 1;
  display: flex;
  justify-content:${props=> props.$justifyContent || "flex-start"};
  align-items: flex-start;
  margin-top: ${props => props.$marginTop || "1.2rem"};
  width: 100%;
`;

interface ContentImageProps {
    $width?:string;
}

export const ContentImage = styled.img<ContentImageProps>`
  width: ${props => props.$width || "78%"};
  height: auto;
  object-fit: contain;
`;

// Legacy styles for text-based slides (if needed)
interface TopImageWrapperProps {
    $marginBottom?: boolean;
}

export const TopImageWrapper = styled.div<TopImageWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.$marginBottom ? "2rem" : "0"};
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
    $fontSize?:string;
    $letterSpacing?:string;
}

export const Title = styled.h2<TitleProps>`
  font-family: 'Gotham', sans-serif;
  font-weight: 600;
  font-size: ${props => props.$fontSize || "clamp(24px, 6vw, 3.6rem)" };
  color: ${colors.primary};
  letter-spacing: -3.5px;
  line-height: 0.8;
  padding-top: 0.7rem;
  letter-spacing: ${props => props.$letterSpacing || "-1px"};
`;

export const Subtitle = styled.h3`
  font-family: 'Gotham', sans-serif;
  font-weight: 400;
  font-size: clamp(18px, 4.3vw, 2.5rem);
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: -1px;
`;


interface BulletListProps {
    $letterSpace?:string;
    $paddingRight?:string;
    $lineHeight?:string;
}
export const BulletList = styled.ul<BulletListProps>`
  padding: 0;
  max-width: 600px;
  margin-inline-start: 20px;
  padding-top: 0.4rem;
  line-height:${props => props.$lineHeight || "1.4"};
  ${props => props.$letterSpace && `letter-spacing: ${props.$letterSpace};`}
  ${props => props.$paddingRight && `padding-right: ${props.$paddingRight};`}

  li {
    font-family: 'Gotham', sans-serif;
    font-size: clamp(16px, 1.9vw, 1.8rem);
    color: ${colors.primary};
    font-weight: 500;

    span {
      display: block;
      width: 100%;
      color: #666;
    }
  }

  sup {
    font-size: 12px;
  }
`;

export const TitlesWrapper = styled.div`
  margin-bottom: 0.4rem;
  margin-left: 0.6rem;
`;

