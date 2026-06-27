import { styled } from "styled-components";
import { colors } from "../../../../constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

type ColumnProps = {
  $isSingleColumn?: boolean;
  $colGap?: string;
  $colMarginLeft?: string;
  $colZIndex?: number;
  $flexBasis?: string;
};

export const Column = styled.div<ColumnProps>`
  flex: 0 0 ${(props) => props.$flexBasis || "50%"};
  min-width: 0;
  width: 50%;
  ${(props) =>
    props.$colZIndex !== undefined && `z-index: ${props.$colZIndex};`}
  max-width: ${(props) => (props.$isSingleColumn ? "50%" : "100%")};
  display: flex;
  gap: ${(props) => (props.$colGap ? props.$colGap : "0")};
  height: 100%;
  align-items: center;
  ${(props) => props.$colMarginLeft && `margin-left: ${props.$colMarginLeft};`}
`;

type BrushImgProps = {
  $containerWidth?: string;
  $brushImgWidth?: string;
  $brushImgHeight?: string;
  $wrapperWidth?: string;
  $marginTop?: string;
};

export const BrushImgWrapper = styled.div<BrushImgProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$wrapperWidth || "80%"};
  height: 100%;

  img {
    width: ${(props) => props.$brushImgWidth || "auto"};
    height: ${(props) => props.$brushImgHeight || "auto"};
    ${(props) => props.$marginTop && `margin-top: ${props.$marginTop};`}
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const TextAndImgWrapperOuter = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

type TextAndImgWrapperProps = {
  $hasMultipleSpecRows?: boolean;
  $height?: string;
};

export const TextAndImgWrapper = styled.div<TextAndImgWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${(props) => props.$height || "80%"};
  position: relative;
  flex: 1;

  @media screen and (max-width: 1080px) {
    min-height: 490px;
    padding: 0;
  }
`;

type DiagramsWrapperProps = {
  $diagramWidth?: string;
};

export const DiagramsWrapper = styled.div<DiagramsWrapperProps>`
  display: flex;
  flex-direction: column;

  img {
    object-fit: contain;
  }
`;

export const DiagramImg = styled.img<DiagramsWrapperProps>`
  width: ${(props) => props.$diagramWidth ?? "95%"};
`;

export const BannerImg = styled.img`
  width: 85%;
  margin-bottom: 0.5rem;
  align-self: flex-start;
`;

type TextWrapperProps = {
  $marginBottom?: string;
  $paddingTop?: string;
};

export const TextWrapper = styled.div<TextWrapperProps>`
  flex-grow: 1;
  min-height: 0;

  h2 {
    font-family: "Gotham", sans-serif;
    color: ${colors.primary};
    margin-bottom: ${(props) => props.$marginBottom ?? "0.4rem"};
    padding-top: ${(props) => props.$paddingTop ?? "0.6rem"};
    font-size: 1.25rem;

    sup {
      font-size: 16px;
      vertical-align: top;
    }
  }

  p {
    font-family: "Gotham", sans-serif;
    color: ${colors.black};
    font-weight: 400;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.25;

    & + p {
      margin-bottom: 0;
    }

    span {
      font-weight: 600;
    }
  }

  ul {
    padding-left: 1.2rem;
    font-family: "Gotham", sans-serif;
    color: ${colors.black};
    font-weight: 400;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.25;

    li {
      margin-bottom: 0.2rem;
    }
  }

  sup {
    font-weight: 300;
    font-size: 8px;
    vertical-align: super;
  }

  @media screen and (max-width: 1080px) {
    ul {
      font-size: 0.9rem;
    }
  }
`;

export const ImprintSection = styled.div`
  margin-bottom: 0.6rem;
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
  color: #c4a032;
  font-weight: 600;
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 0.25rem;
  letter-spacing: -0.5px;
`;

export const ImprintLine = styled.div`
  height: 1.5px;
  background: #c4a032;
  width: 23vh;
  position: relative;
  margin-left: -20px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: #c4a032;
    border-radius: 50%;
  }
`;

export const ImprintAndBadgeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  min-height: 100px;
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

export const ColorCircle = styled.div<{
  color: string;
  $secondaryColor?: string;
}>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${(props) => props.color};
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.$secondaryColor &&
    `
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50%;
            background: ${props.$secondaryColor};
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
  gap: 2px;

  span {
    letter-spacing: 0.4px;
  }

  span:first-child {
    font-weight: 300;
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

type BrushSpecsWrapperProps = {
  $width?: string;
};

export const BrushSpecsWrapper = styled.div<BrushSpecsWrapperProps>`
  border-top: 1px solid ${colors.black};
  padding: 0.6rem 0;
  width: ${(props) => props.$width || "95%"};
  box-sizing: border-box;
  gap: 0.6rem;
  font-size: 0.8rem;
  margin-top: auto;
`;

export const BrushSpecsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr 1.3fr 1.3fr;
  gap: 0.5rem;
  place-items: start;
  width: 80%;

  &:nth-child(2) {
    margin-top: 0.3rem;
  }

  @media screen and (max-width: 1080px) {
    width: 85%;
  }
`;

export const SpecItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &:first-child {
    align-items: flex-start;
    padding-left: 0.4rem;
  }
`;

export const SpecLabel = styled.span`
  font-family: "Gotham", sans-serif;
  color: ${colors.black};
  margin-bottom: 0.3rem;
`;

export const SpecValue = styled.span`
  font-family: "Gotham", sans-serif;
  color: ${colors.black};
`;

export const ShopifyIconWrapper = styled.div``;

export const DescriptionBold = styled.span`
  font-weight: 600;
`;

export const TitleLight = styled.span`
  font-weight: 400;
`;
