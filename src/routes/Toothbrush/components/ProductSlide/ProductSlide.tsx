import ShopifyIcon from "../../../../components/ShopifyIcon/ShopifyIcon";
import * as S from "./ProductSlide.styles";
import { ProductSlideProps, SpecItem} from "./ProductSlide.types";

export const ProductSlide: React.FC<ProductSlideProps> = ({
  brushImage,
  diagramImage,
  title,
  description,
  highlightText,
  showAntibacterialBadge = false,
  imprintColors = [],
  specs = [],
  isSingleColumn = false,
  showImprintText = true,
  textWrapperMarginTop,
  textWrapperH2MarginBottom,
  textWrapperPaddingRight,
  useBulletPoints,
  padding,
  paddingRight,
  diagramWidth,
  maxHeight,
  minHeight,
  diagramMarginBottom,
  brushImgWidth,
  colGap,
  listPaddingLeft,
  colMargLeft,
  imgMinWidth,
  shopifyIconProps
}) => {    

 const hasMultipleSpecRows = specs.length > 1;

  return (
    <S.Column $isSingleColumn={isSingleColumn} $colGap={colGap} $colMarginLeft={colMargLeft}>
      <S.BrushImgWrapper $brushImgWidth={brushImgWidth} $imgMinWidth={imgMinWidth}>
        <img src={brushImage} alt={typeof title === "string" ? title : 'Product'} />
      </S.BrushImgWrapper>
      <S.TextAndImgWrapperOuter>
      <S.TextAndImgWrapper $hasMultipleSpecRows={hasMultipleSpecRows} $padding={padding} $paddingRight={paddingRight}>
        <S.DiagramsWrapper $diagramWidth={diagramWidth} $diagramMarginBottom={diagramMarginBottom}>
          <img src={diagramImage} alt={typeof title === 'string' ? `${title} diagram` : 'Product diagram'} />
        </S.DiagramsWrapper>
        <S.TextWrapper 
          $marginTop={textWrapperMarginTop} 
          $marginBottom={textWrapperH2MarginBottom} 
          $textWrapperPaddingRight={textWrapperPaddingRight} 
          $maxHeight={maxHeight}
          $minHeight={minHeight}
          $listPaddingLeft={listPaddingLeft}
        >
          <h2>{title}</h2>
            {useBulletPoints ? (
              <ul>
                {description.map((content, index) => ( 
                  <li key={index}>
                    {content} 
                  </li>
                ))}
              </ul>
            ) : (
              description.map((content, index) => ( 
                <p key={index}>
                  {content} 
                </p>
              ))
            )}
            {highlightText && <p><span>{highlightText}</span></p>}
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
                {imprintColors.map(([primaryColor, secondaryColor], index) => (
                    <S.ColorCircle 
                    key={index} 
                    color={primaryColor} 
                    $secondaryColor={secondaryColor || undefined} 
                    />
                ))}
            </S.ColorCircles>
            </S.ImprintLeftColumn>
            
            {showAntibacterialBadge ? (
              <S.AntibacterialBadge>
                <span>Now with</span>
                <span>Antibacterial</span>
                <span>Bristles<sup>7</sup></span>
              </S.AntibacterialBadge>
            ) : (
              <S.BadgePlaceholder />
            )}
          </S.ImprintAndBadgeWrapper>
        </S.ImprintSection>

        <S.BrushSpecsWrapper>
        {Array.isArray(specs) && specs.map((row: SpecItem[], rowIndex: number) => (
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
            <ShopifyIcon {...shopifyIconProps}/>
          </S.ShopifyIconWrapper>
        )}
      </S.TextAndImgWrapper>
      </S.TextAndImgWrapperOuter>
    </S.Column>
  );
};