import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from '../../../../../../assets/toothbrush/Adult/Slide2/Brush-SensitiveCare.webp';
import ContentImage from '../../../../../../assets/toothbrush/patient/recommendations/DeepClean/517-SensitiveCare-BottomImg.webp';

export default function SensitiveCareSlide() {
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
            <S.Title $fontSize="clamp(24px, 6vw, 3.2rem)" $letterSpacing="-2px">Sensitive Care</S.Title>
            <S.Subtitle>TECHNIQUE®</S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList $letterSpace="-0.8px" $paddingRight="3.4rem;" $lineHeight="1.2">
            <li>
              <span>Unique Quad-Grip® handle and Dome Trim® bristles, combined with ultra-delicate bristles.</span>
            </li>
            <li>
              <span>Offers gentle yet effective solution for plaque removal and gum care.</span>
            </li>
          </S.BulletList>

          <S.ContentImageWrapper  $marginTop="1.2rem">
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