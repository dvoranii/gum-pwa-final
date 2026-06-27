import { styled } from "styled-components";
import { BaseCarouselSlide } from "../../../styles/shared-styles";
import { colors } from "../../../constants/colors";

export const AdultWrapperOuter = styled.div`
  position: relative;
`;

export const CarouselSlide = styled(BaseCarouselSlide)`
  padding: 1rem;
`;

interface SlideContainerProps {
  $columns?: number;
  $width?: string;
  $colGap?: string;
}

export const SlideContainer = styled.div<SlideContainerProps>`
  width: ${(props) => props.$width || "90%"};
  height: 100%;
  display: grid;
  place-content: center;
  grid-template-columns: repeat(${(props) => props.$columns || 3}, 1fr);
  column-gap: ${(props) => (props.$colGap ? props.$colGap : "1.2rem")};
  margin-left: 14px;
`;
export const BrushAndTextWrapper = styled.div``;

export const Column = styled.div`
  min-width: 0;
  display: flex;
  gap: 0.4rem;
  height: 100%;
  align-items: center;
`;

interface TextAndImgWrapperOuterProps {
  $height?: string;
}

export const TextAndImgWrapperOuter = styled.div<TextAndImgWrapperOuterProps>`
  height: ${(props) => props.$height || "100%"};
  display: flex;
  align-items: flex-end;
  flex: 1;
`;

interface TextAndImgWrapperProps {
  $height?: string;
  $padding?: string;
}

export const TextAndImgWrapper = styled.div<TextAndImgWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* ← was center */
  height: ${(props) => props.$height || "77%"};
  position: relative;
  flex: 1;

  @media screen and (max-width: 1080px) {
    padding: 0;
  }
`;

interface DiagramsWrapperProps {
  $marginBottom?: string;
  $width?: string;
}

export const DiagramsWrapper = styled.div<DiagramsWrapperProps>`
  img {
    margin-bottom: ${(props) => props.$marginBottom || "1.2rem"};
    width: ${(props) => props.$width || "55%"};
  }
`;

interface TextWrapperProps {
  $listFontSize?: string;
}

export const TextWrapper = styled.div<TextWrapperProps>`
  flex-grow: 1;
  min-height: 0;

  h2 {
    font-family: "Gotham", sans-serif;
    color: ${colors.primary};
    margin-bottom: 0.6rem;
    font-size: 1.25rem;
  }

  ul {
    padding-left: 1.2rem;
    font-family: "Gotham", sans-serif;
    color: ${colors.black};
    font-weight: 400;
    margin-bottom: 0.5rem;
    font-size: ${(props) => props.$listFontSize || "1rem"};
    line-height: 1.15;

    li {
      margin-bottom: 0.2rem;
    }
  }
`;

interface BrushSpecsGridProps {
  $paddingTop?: string;
  $gap?: string;
}

export const BrushSpecsGrid = styled.div<BrushSpecsGridProps>`
  display: grid;
  grid-template-columns: 1fr 1.3fr 1.3fr 1.3fr;
  gap: ${(props) => props.$gap || "0.5rem"};
  place-items: start;
  width: 100%;
  ${(props) => props.$paddingTop && `padding-top: ${props.$paddingTop};`}
`;
