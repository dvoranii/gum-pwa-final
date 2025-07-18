import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from '../../../../../../assets/toothbrush/Adult/Slide1/Brush-DeepClean.webp';
import ContentImage from '../../../../../../assets/toothbrush/patient/recommendations/DeepClean/525-DeepClean-BottomImg.webp';

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
              <span>10x better plaque removal<sup>15</sup>.</span>
            </li>
            <li>
              <span>Now with Antibacterial Bristles<sup>16</sup>.</span>
            </li>
          </S.BulletList>

        <S.ContentImageWrapper>
          <S.ContentImage 
            $width="80%"
            src={ContentImage}
            alt="Deep Clean Technique features and benefits"
          />
        </S.ContentImageWrapper>

        </S.TextAndImgWrapper>
        
      </S.SlideContent>
    </S.Container>
  );
}