import * as S from "./RecommendationSlider.styled";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

import DeepCleanSlide from "./Slides/DeepClean/DeepClean";
import SensitiveCleanSlide from "./Slides/SensitiveClean/SensitiveClean";
import EnamelCleanSlide from "./Slides/EnamelClean/EnamelClean";
import CompleteCare595Slide from "./Slides/CompleteCare/CompleteCare595";
import CompleteCare591Slide from "./Slides/CompleteCare/CompleteCare591";
import BrightCareSlide from "./Slides/BrightCare/BrightCare";
import SensitiveCareSlide from "./Slides/SensitiveCare/SensitiveCare";
import ToothAndTongueSlide from "./Slides/ToothAndTongue/ToothAndTongue";

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: false,
  prevNextButtons: true,
  pageDots: true,
  contain: true,
  cellAlign: "center",
  on: {
    ready: function (this: Flickity) {
      setTimeout(() => {
        this.resize();
      }, 100);
    },
  },
};

interface RecommendationSliderProps {
  selection: string | null;
}

const SLIDE_COMPONENTS: Record<string, React.ComponentType> = {
  "deep-clean": DeepCleanSlide,
  "sensitive-clean": SensitiveCleanSlide,
  "enamel-clean": EnamelCleanSlide,
  "sensitive-care": SensitiveCareSlide,
  "tooth-tongue": ToothAndTongueSlide,
  "complete-care-595": CompleteCare595Slide,
  "complete-care-591": CompleteCare591Slide,
  "bright-care": BrightCareSlide,
};

const SLIDE_CONFIGS: Record<string, string[]> = {
  subgingival: ["deep-clean", "sensitive-clean", "enamel-clean"],
  sensitivity: ["sensitive-clean", "sensitive-care", "complete-care-595"],
  reach: ["complete-care-591", "tooth-tongue", "bright-care"],
};

const RecommendationSlide = ({ slideKey }: { slideKey: string }) => {
  const SlideComponent = SLIDE_COMPONENTS[slideKey];

  if (!SlideComponent) {
    return (
      <S.Slide>
        <S.FallbackText>Slide not found: {slideKey}</S.FallbackText>
      </S.Slide>
    );
  }

  return (
    <S.Slide>
      <SlideComponent />
    </S.Slide>
  );
};

export const RecommendationSlider = ({
  selection,
}: RecommendationSliderProps) => {
  if (!selection || !SLIDE_CONFIGS[selection]) {
    return (
      <S.CarouselWrapper>
        <S.Slide>
          <S.FallbackText>
            Please select a recommendation category
          </S.FallbackText>
        </S.Slide>
      </S.CarouselWrapper>
    );
  }

  return (
    <S.CarouselWrapper>
      <Flickity
        key={selection || "default"}
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        static={false}
      >
        {SLIDE_CONFIGS[selection].map((slideKey) => (
          <RecommendationSlide key={slideKey} slideKey={slideKey} />
        ))}
      </Flickity>
    </S.CarouselWrapper>
  );
};
