import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from "../../../../../../assets/toothbrush/Adult/Slide1/Brush-DeepClean.webp";
import ContentImage from "../../../../../../assets/toothbrush/patient/recommendations/525-DeepClean-BottomImg-updated.png";

export default function DeepCleanSlide() {
  return (
    <S.Container>
      <S.SlideContent>
        <S.ToothbrushImageWrapper>
          <S.ToothbrushImage
            src={ToothbrushImage}
            alt="Deep Clean Technique Toothbrush"
          />
        </S.ToothbrushImageWrapper>
        <S.TextAndImgWrapper>
          <S.TitlesWrapper>
            <S.Title $letterSpacing="-4px">Deep Clean</S.Title>
            <S.Subtitle>TECHNIQUE®</S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList>
            <li>
              <span>Extremely Tapered Bristles</span>
            </li>
            <li>
              <span>
                10x better plaque removal.<sup>15</sup>
              </span>
            </li>
            <li>
              <span>
                Now with Antibacterial Bristles.<sup>16</sup>
              </span>
            </li>
          </S.BulletList>

          <S.ContentImageWrapper $width="100%" $marginTop="0.4rem">
            <S.ContentImage
              $width="85%"
              src={ContentImage}
              alt="Deep Clean Technique features and benefits"
            />
          </S.ContentImageWrapper>
        </S.TextAndImgWrapper>
      </S.SlideContent>
    </S.Container>
  );
}
