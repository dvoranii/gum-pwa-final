import * as S from "./SoftPicks.styles";
import { BulletPoint } from "../../../../../types/BulletPoint";

type ResponsiveValue = {
  default: string;
  small?: string;
};

type SoftPicksSlideProps = {
  title: string;
  subtitle: string;
  subtitleSize?: string | ResponsiveValue;
  sideImage: string;
  sideImageHeight?: string;
  bottomImage?: string;
  bottomImageMargin?: string;
  bottomImageWidth?: string;
  bullets: BulletPoint[];
  gap?: string;
  advanced?: boolean;
};

export default function SoftPicksSlide({
  title,
  subtitle,
  subtitleSize,
  sideImage,
  sideImageHeight,
  bottomImage,
  bottomImageMargin,
  bottomImageWidth,
  bullets,
  gap,
  advanced,
}: SoftPicksSlideProps) {
  return (
    <S.Container $gap={gap}>
      <S.ImgWrapper $advanced={advanced}>
        <S.MainImage
          src={sideImage}
          alt={`${title} ${subtitle}`}
          $height={sideImageHeight}
        />
      </S.ImgWrapper>

      <S.ImgAndTextWrapper>
        <S.Title>{title}</S.Title>
        <S.Subtitle $fontSize={subtitleSize}>{subtitle}</S.Subtitle>

        <S.BulletList>
          {bullets.map((bullet, index) => (
            <li key={index}>
              {bullet.lines ? (
                bullet.lines.map((line, i) => <span key={i}>{line}</span>)
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
            $marginLeft={bottomImageMargin}
            $width={bottomImageWidth}
          />
        )}
      </S.ImgAndTextWrapper>
    </S.Container>
  );
}
