// ProxabrushSlide.tsx
import * as S from "./ProxabrushSlide.styles";
import { BulletPoint } from "../../../../../types/BulletPoint";

type ProxabrushSlideProps = {
  title: string;
  subtitle: string;
  subtitleSize?: string;
  sideImage: string;
  sideImageHeight?: string;
  bottomImage: string;
  bottomImageMarginLeft?: string;
  bullets: BulletPoint[];
  bulletMarginBottom?: string;
};

export default function ProxabrushSlide({
  title,
  subtitle,
  subtitleSize,
  sideImage,
  sideImageHeight = "85%",
  bottomImage,
  bottomImageMarginLeft,
  bullets,
  bulletMarginBottom
}: ProxabrushSlideProps) {
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
        <S.Title>{title}</S.Title>
        <S.Subtitle $fontSize={subtitleSize}>{subtitle}</S.Subtitle>

        <S.BulletList $marginBottom={bulletMarginBottom}>
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

        <S.ComparisonImage 
          src={bottomImage} 
          alt={`${title} comparison`} 
          $marginLeft={bottomImageMarginLeft}
        />
      </S.ImgAndTextWrapper>
    </S.Container>
  );
}