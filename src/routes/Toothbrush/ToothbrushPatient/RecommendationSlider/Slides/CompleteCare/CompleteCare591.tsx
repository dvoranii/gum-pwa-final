import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from '../../../../../../assets/toothbrush/591-CompleteCare.webp';
import ContentImage from '../../../../../../assets/toothbrush/patient/recommendations/DeepClean/591-CompleteCare-BottomImg.webp';

export default function CompleteCare591Slide() {
  return (
    <S.Container $padding="2.4rem 0 0 2.4rem">
      <S.SlideContent $gap="0.8rem">
        <S.ToothbrushImageWrapper>
          <S.ToothbrushImage 
            src={ToothbrushImage}
            alt="Complete Care Technique Toothbrush"
            $height="61vh"
          />
        </S.ToothbrushImageWrapper>
        <S.TextAndImgWrapper>
          <S.TitlesWrapper>
            <S.Title $fontSize="clamp(24px, 6vw, 3.2rem)" $letterSpacing="-2px">Complete Care</S.Title>
            <S.Subtitle>TECHNIQUE®</S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList $letterSpace="-0.8px" $paddingRight="1.6rem;" $lineHeight="1.2">
            <li>
              <span>Raised bristles at tip providing greater access to posterior regions.</span>
            </li>
            <li>
              <span>Clean hard-to-reach surfaces.</span>
            </li>
          </S.BulletList>

          <S.ContentImageWrapper  $marginTop="1.8rem">
            <S.ContentImage
              $width="72%" 
              src={ContentImage}
              alt="Complete Care Technique features and benefits"
            />
          </S.ContentImageWrapper>
        </S.TextAndImgWrapper>
      </S.SlideContent>
    </S.Container>
  );
}