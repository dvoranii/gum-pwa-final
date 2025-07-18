import * as S from "./StringFloss.styles";
import { BulletPoint } from "../../../../../types/BulletPoint";

type StringFlossSlideProps = {
  title: string;
  titleSize?: string;
  subtitle: string;
  subtitleSize?: string;
  topImage: string;
  topImageWidth?: string;
  topImageMarginBottom: string;
  bullets: BulletPoint[];
  bulletMargin?: string;
  listMarginBottom?: string;
  bulletItemsFontSize?: string;
  isCombination?: boolean;
  secondTitle?: string;
  secondSubtitle?: string;
  combinationTitleSize?: string; 
  combinationSubtitleSize?: string;
  contentPadding?: string;
  contentMarginTop?: string;
  containerMarginTop?:string;
};

export default function StringFlossSlide({
  title,
  titleSize,
  subtitle,
  subtitleSize,
  topImage,
  topImageWidth,
  topImageMarginBottom,
  bullets,
  bulletMargin,
  listMarginBottom,
  isCombination = false,
  secondTitle,
  secondSubtitle,
  combinationTitleSize = "clamp(20px, 5vw, 2.8rem)",
  combinationSubtitleSize = "clamp(16px, 3.5vw, 1.8rem)",
  contentPadding,
  contentMarginTop,
  bulletItemsFontSize,
  containerMarginTop
}: StringFlossSlideProps) {
  return (
    <S.Container $marginTop={containerMarginTop}>
      <S.TopImageWrapper $marginBottom={topImageMarginBottom}>
        <S.MainImage 
          src={topImage}
          alt={`${title} ${subtitle}`}
          $width={topImageWidth}
        />
      </S.TopImageWrapper>

      <S.ContentWrapper $padding={contentPadding} $marginTop={contentMarginTop}>
        {isCombination ? (
          <S.CombinationTitleWrapper>
            <S.TitlesWrapper>
              <S.Title $fontSize={combinationTitleSize}>{title}</S.Title>
              <S.Subtitle $fontSize={combinationSubtitleSize}>{subtitle}</S.Subtitle>
            </S.TitlesWrapper>
            
            <S.PlusSign>+</S.PlusSign>

            <S.TitlesWrapper>
              <S.Title $fontSize={combinationTitleSize}>{secondTitle}</S.Title>
              <S.Subtitle $fontSize={combinationSubtitleSize}>{secondSubtitle}</S.Subtitle>
            </S.TitlesWrapper>
          </S.CombinationTitleWrapper>
        ) : (
          <S.TitlesWrapper>
            <S.Title $fontSize={titleSize}>{title}</S.Title>
            <S.Subtitle $fontSize={subtitleSize}>{subtitle}</S.Subtitle>
          </S.TitlesWrapper>
        )}

        <S.BulletList $marginInlineStart={bulletMargin} $fontSize={bulletItemsFontSize} $listItemMarginBottom={listMarginBottom}>
          {bullets.map((bullet, index) => (
            <li key={index}>
              {bullet.lines ? (
                bullet.lines.map((line, i) => (
                  <span key={i}>{line}</span>
                ))
              ) : (
                <span>{bullet.text}</span>
              )}
            </li>
          ))}
        </S.BulletList>
      </S.ContentWrapper>
    </S.Container>
  );
}