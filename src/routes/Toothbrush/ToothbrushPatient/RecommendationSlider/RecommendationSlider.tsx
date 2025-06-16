import * as S from "./RecommendationSlider.styled";

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import _525_TechDeepClean from "../../../../assets/toothbrush/patient/recommendations/525-DeepClean.webp";
import _528_TechSensitiveClean from "../../../../assets/toothbrush/patient/recommendations/528-SensitiveClean.webp";
import _4471_TechEnamelClean from "../../../../assets/toothbrush/patient/recommendations/4471-EnamelClean.webp";
import _517_TechSensitiveCare from "../../../../assets/toothbrush/patient/recommendations/517-SensitiveCare.webp";
import _394_ToothAndTongue from "../../../../assets/toothbrush/patient/recommendations/394-T&T.webp";
import _595_CompleteCare from "../../../../assets/toothbrush/patient/recommendations/595-CompleteCare.webp";
import _591_CompleteCare from "../../../../assets/toothbrush/patient/recommendations/591-CompleteCare.webp";
import _4594_BrightCare  from "../../../../assets/toothbrush/patient/recommendations/4594-BrightCare.webp";
import { JSX } from "react";

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: false,
  prevNextButtons: true,
  pageDots: true,
  contain: true,
  cellAlign: 'center'
};

interface SlideConfig  {
    src: string;
    alt: string;
    key: string;
}

interface RecommendationSliderProps {
    selection: string | null;
}

const SLIDE_CONFIGS: Record<string, SlideConfig[]> = {
  subgingival: [
    { src: _525_TechDeepClean, alt: "Tech Deep Clean", key: "deep-clean" },
    { src: _528_TechSensitiveClean, alt: "Tech Sensitive Clean", key: "sensitive-clean" },
    { src: _4471_TechEnamelClean, alt: "Tech Enamel Clean", key: "enamel-clean" }
  ],
  sensitivity: [
    { src: _528_TechSensitiveClean, alt: "Tech Sensitive Clean", key: "sensitive-clean" },
    { src: _517_TechSensitiveCare, alt: "Tech Sensitive Care", key: "sensitive-care" },
    { src: _595_CompleteCare, alt: "Complete Care", key: "complete-care" }
  ],
  reach: [
    { src: _591_CompleteCare, alt: "Complete Care", key: "complete-care" },
    { src: _394_ToothAndTongue, alt: "Tooth and Tongue Cleaner", key: "tooth-tongue" },
    { src: _4594_BrightCare, alt: "Bright Care", key: "bright-care" }
  ]
};

const createSlides = (selection: string | null): JSX.Element[] => {
  if (!selection || !SLIDE_CONFIGS[selection]) return [];
  
  return SLIDE_CONFIGS[selection].map((slide) => (
    <S.Slide key={slide.key}>
      <S.ProductImage src={slide.src} alt={slide.alt} />
    </S.Slide>
  ));
};

export const RecommendationSlider = ({selection}: RecommendationSliderProps) => {

    const slides = createSlides(selection);

    return(
        <S.CarouselWrapper>
            <Flickity
                key={selection || 'default'}
                className={'carousel'}
                elementType={'div'}
                options={flickityOptions}
                disableImagesLoaded={false}
                static={false}
            >
            {slides}
            </Flickity>
        </S.CarouselWrapper>
    );
}