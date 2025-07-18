import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from '../../../../../../assets/toothbrush/Adult/Slide2/Brush-Enamel.webp';
import ContentImage from '../../../../../../assets/toothbrush/patient/recommendations/DeepClean/4471-EnamelClean-BottomImg.webp';

export default function EnamelCleanSlide() {
  return (
    <S.Container $padding="2.4rem 0 0 2.4rem">
      <S.SlideContent $gap="1.8rem">
        <S.ToothbrushImageWrapper>
          <S.ToothbrushImage 
            src={ToothbrushImage}
            alt="Enamel Clean Technique Toothbrush"
          />
        </S.ToothbrushImageWrapper>
        <S.TextAndImgWrapper>
          <S.TitlesWrapper>
            <S.Title $fontSize="clamp(24px, 6vw, 3.2rem)" $letterSpacing="-2px">Enamel Clean</S.Title>
            <S.Subtitle>TECHNIQUE®</S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList $letterSpace="-0.8px" $paddingRight="3.9rem;" $lineHeight="1.3">
            <li>
              <span>Micro-feathering splits each bristle into several fine tips.</span>
            </li>
            <li>
              <span>70% more enamel clean compared end rounded bristle<sup>17</sup>.</span>
            </li>
            <li>
              <span>Dome Trim® bristles are clinically designed to clean below the gumline<sup>18,19</sup>.</span>
            </li>
          </S.BulletList>

          <S.ContentImageWrapper $marginTop="2.4rem">
            <S.ContentImage 
              $width="72%"
              src={ContentImage}
              alt="Enamel Clean Technique features and benefits"
            />
          </S.ContentImageWrapper>
        </S.TextAndImgWrapper>
      </S.SlideContent>
    </S.Container>
  );
}