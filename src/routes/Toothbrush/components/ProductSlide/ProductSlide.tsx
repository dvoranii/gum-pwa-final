import ShopifyIcon from "../../../../components/ShopifyIcon/ShopifyIcon";
import * as S from "./ProductSlide.styles";
import {
  ProductSlideProps,
  SpecItem,
} from "../../../../types/ProductSlide.types";

export const ProductSlide: React.FC<ProductSlideProps> = ({
  brushImage,
  diagramImage,
  bannerImage,
  title,
  description,
  highlightText,
  showAntibacterialBadge = false,
  imprintColors = [],
  specs = [],
  isSingleColumn = false,
  showImprintText = true,
  textWrapperH2MarginBottom,
  textWrapperH2PaddingTop,
  useBulletPoints,
  textAndImgWrapperHeight,
  diagramWidth,
  brushImgWidth,
  brushImgHeight,
  colGap,
  colMargLeft,
  shopifyIconProps,
  colZIndex,
  brushWrapperWidth,
  brushMarginTop,
}) => {
  const hasMultipleSpecRows = specs.length > 1;

  return (
    <S.Column
      $isSingleColumn={isSingleColumn}
      $colGap={colGap}
      $colMarginLeft={colMargLeft}
      $colZIndex={colZIndex}
    >
      <S.BrushImgWrapper
        $brushImgWidth={brushImgWidth}
        $brushImgHeight={brushImgHeight}
        $wrapperWidth={brushWrapperWidth}
        $marginTop={brushMarginTop}
      >
        <img
          src={brushImage}
          alt={typeof title === "string" ? title : "Product"}
        />
      </S.BrushImgWrapper>
      <S.TextAndImgWrapperOuter>
        <S.TextAndImgWrapper
          $hasMultipleSpecRows={hasMultipleSpecRows}
          $height={textAndImgWrapperHeight}
        >
          <S.DiagramsWrapper>
            {bannerImage && (
              <S.BannerImg src={bannerImage} alt="Brand recommendation badge" />
            )}
            <S.DiagramImg
              src={diagramImage}
              $diagramWidth={diagramWidth}
              alt={
                typeof title === "string"
                  ? `${title} diagram`
                  : "Product diagram"
              }
            />
          </S.DiagramsWrapper>
          <S.TextWrapper
            $marginBottom={textWrapperH2MarginBottom}
            $paddingTop={textWrapperH2PaddingTop}
          >
            {title && <h2>{title}</h2>}
            {useBulletPoints ? (
              <ul>
                {description.map((content, index) => (
                  <li key={index}>{content}</li>
                ))}
              </ul>
            ) : (
              description.map((content, index) => <p key={index}>{content}</p>)
            )}
            {highlightText && (
              <p>
                <span>{highlightText}</span>
              </p>
            )}
          </S.TextWrapper>

          <S.ImprintSection>
            <S.ImprintAndBadgeWrapper>
              <S.ImprintLeftColumn>
                {showImprintText ? (
                  <S.ImprintTextWrapper>
                    <S.ImprintText>AVAILABLE for IMPRINT</S.ImprintText>
                    <S.ImprintLine />
                  </S.ImprintTextWrapper>
                ) : (
                  <S.ImprintTextPlaceholder />
                )}
                <S.ColorCircles>
                  {imprintColors.map(
                    ([primaryColor, secondaryColor], index) => (
                      <S.ColorCircle
                        key={index}
                        color={primaryColor}
                        $secondaryColor={secondaryColor || undefined}
                      />
                    )
                  )}
                </S.ColorCircles>
              </S.ImprintLeftColumn>

              {showAntibacterialBadge ? (
                <S.AntibacterialBadge>
                  <span>Now with</span>
                  <span>Antibacterial</span>
                  <span>
                    Bristles<sup>16</sup>
                  </span>
                </S.AntibacterialBadge>
              ) : (
                <S.BadgePlaceholder />
              )}
            </S.ImprintAndBadgeWrapper>
          </S.ImprintSection>

          <S.BrushSpecsWrapper>
            {Array.isArray(specs) &&
              specs.map((row: SpecItem[], rowIndex: number) => (
                <S.BrushSpecsGrid key={`row-${rowIndex}`}>
                  {row.map((item, colIndex) => (
                    <S.SpecItem key={colIndex}>
                      {rowIndex === 0 && item.label && (
                        <S.SpecLabel>{item.label}</S.SpecLabel>
                      )}
                      <S.SpecValue>{item.value}</S.SpecValue>
                    </S.SpecItem>
                  ))}
                </S.BrushSpecsGrid>
              ))}
          </S.BrushSpecsWrapper>

          {shopifyIconProps && (
            <S.ShopifyIconWrapper>
              <ShopifyIcon {...shopifyIconProps} />
            </S.ShopifyIconWrapper>
          )}
        </S.TextAndImgWrapper>
      </S.TextAndImgWrapperOuter>
    </S.Column>
  );
};
