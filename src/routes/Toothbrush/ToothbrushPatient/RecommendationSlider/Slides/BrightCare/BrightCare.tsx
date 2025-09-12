import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from "../../../../../../assets/toothbrush/4594-BrightCare.webp";

export default function BrightCareSlide() {
  return (
    <S.Container $padding="2.4rem 0 0 1.8rem">
      <S.SlideContent $gap="1rem">
        <S.ToothbrushImageWrapper>
          <S.ToothbrushImage
            src={ToothbrushImage}
            alt="Complete Care Technique Toothbrush"
          />
        </S.ToothbrushImageWrapper>
        <S.TextAndImgWrapper>
          <S.TitlesWrapper>
            <S.Title $fontSize="clamp(24px, 6vw, 3rem)" $letterSpacing="-2px">
              G<span>•</span>U<span>•</span>M Bright Care<sup>TM</sup>
            </S.Title>
            <S.Subtitle>TOOTHBRUSH</S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList
            $letterSpace="-0.8px"
            $paddingRight="2.8rem;"
            $lineHeight="1.2"
          >
            <li>
              <span>
                Brightline<sup>TM</sup> Grip Bristles show
                <br /> a 28% improvement in tooth whiteness after use.
                <sup>21</sup>
              </span>
            </li>
            <li>
              <span>
                Raised Super Tip® bristles at the tip provide access to
                posterior regions and clean hard-to-reach surfaces.
              </span>
            </li>
            <li>
              <span>
                Dome Trim® bristles are clinically designed to clean below
                <br /> the gumline.<sup>18, 19</sup>
              </span>
            </li>
          </S.BulletList>
          <small>The trademark BrightLine is owned by PMM.</small>
        </S.TextAndImgWrapper>
      </S.SlideContent>
    </S.Container>
  );
}
