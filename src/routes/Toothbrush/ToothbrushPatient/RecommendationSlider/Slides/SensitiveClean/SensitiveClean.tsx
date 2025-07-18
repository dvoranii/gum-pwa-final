import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from '../../../../../../assets/toothbrush/Adult/Slide1/Brush-SensitiveClean.webp';
import ContentImage from '../../../../../../assets/toothbrush/patient/recommendations/DeepClean/528-SensitiveClean-BottomImg.webp';

export default function SensitiveCleanSlide() {
  return (
    <S.Container $padding="2.4rem 0 0 2.4rem">
      <S.SlideContent $gap="1.6rem">
        <S.ToothbrushImageWrapper>
          <S.ToothbrushImage 
            src={ToothbrushImage}
            alt="Sensitive Clean Technique Toothbrush"
          />
        </S.ToothbrushImageWrapper>
        <S.TextAndImgWrapper>
          <S.TitlesWrapper>
            <S.Title $fontSize="clamp(24px, 6vw, 3.2rem)" $letterSpacing="-2px">Sensitive Clean</S.Title>
            <S.Subtitle>TECHNIQUE®</S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList $letterSpace="-0.8px" $paddingRight="1.6rem;" $lineHeight="1.3">
            <li>
              <span>6x better clean with ultra-soft bristles<sup>17</sup>.</span>
            </li>
            <li>
              <span>Specially designed for sensitivity.</span>
            </li>
            <li>
              <span>Extremely tapered bristles are very fine in diameter.</span>
            </li>
            <li>
              <span>Now with Antibacterial Bristles<sup>16</sup>.</span>
            </li>
          </S.BulletList>

          <S.ContentImageWrapper $marginTop="0">
            <S.ContentImage 
              $width="90%"
              src={ContentImage}
              alt="Sensitive Clean Technique features and benefits"
            />
          </S.ContentImageWrapper>
        </S.TextAndImgWrapper>
      </S.SlideContent>
    </S.Container>
  );
}