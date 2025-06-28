import * as S from "./FlosserSlide.styles";

type BulletPoint = {
  text?: string;
  lines?: string[];
};

type FlosserSlideProps = {
  title: string;
  titleSize?: string; 
  subtitle: string;
  subtitleSize?: string;
  sideImage: string;
  sideImageHeight?: string;
  bottomImage?: string; 
  bullets: BulletPoint[];
};

export default function FlosserSlide({
  title,
  titleSize,
  subtitle,
  subtitleSize,
  sideImage,
  sideImageHeight,
  bottomImage,
  bullets,
}: FlosserSlideProps) {
  return (
    <S.Container>
      <S.ImgWrapper>
        <S.MainImage 
          src={sideImage}
          alt={`${title} ${subtitle}`}
          $height={sideImageHeight}
        />
      </S.ImgWrapper>

      <S.ImgAndTextWrapper>
      <S.Title $fontSize={titleSize}>{title}</S.Title>
      <S.Subtitle $fontSize={subtitleSize}>{subtitle}</S.Subtitle>

        <S.BulletList>
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

        {bottomImage && (
          <S.ComparisonImage 
            src={bottomImage} 
            alt={`${title} comparison`} 
          />
        )}
      </S.ImgAndTextWrapper>
    </S.Container>
  );
}