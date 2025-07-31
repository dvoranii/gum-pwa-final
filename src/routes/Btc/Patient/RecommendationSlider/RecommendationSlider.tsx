import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import * as S from "./RecommendationSlider.styles";

import { RecommendationSet } from "../../../../utils/patientRecommendations";

import {
  Proxabrush1314,
  Proxabrush1414,
  Proxabrush1614,
  Proxabrush611,
  Sulcusbrush642,
} from "./ProxabrushSlide";

import { AdvancedSoftPicks, ComfortFlexSoftPicks } from "./SoftPicks";

import {
  EcoCleanFlosser,
  ComfortSlideFlosser,
  TwistedMintFlosser,
  ProfessionalCleanFlosser,
} from "./FlosserSlide";
import {
  ProWeaveAndEEZThru,
  EasyThreadFloss,
  ComfortSlideFloss,
  DualDefenceFloss,
  ProWeaveFloss,
  DeepCleanFloss,
} from "./StringFloss";

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: false,
  prevNextButtons: true,
  pageDots: true,
  contain: true,
  cellAlign: "center",
};

type RecommendationSlideProps = {
  priorityText: string;
  productName: string;
  productCode: string;
};

const RecommendationSlide = ({
  priorityText,
  productName,
  productCode,
}: RecommendationSlideProps) => {
  switch (productCode) {
    // Proxabrush
    case "1314":
      return <Proxabrush1314 />;
    case "1414":
      return <Proxabrush1414 />;
    case "1614":
      return <Proxabrush1614 />;
    case "611":
      return <Proxabrush611 />;
    case "642":
      return <Sulcusbrush642 />;

    // Soft Picks
    case "650":
      return <AdvancedSoftPicks />;
    case "670":
      return <ComfortFlexSoftPicks />;

    // Flossers
    case "831":
      return <EcoCleanFlosser />;
    case "887":
      return <ComfortSlideFlosser />;
    case "828":
      return <TwistedMintFlosser />;
    case "891":
      return <ProfessionalCleanFlosser />;

    // String Floss
    case "1815 + 840":
      return <ProWeaveAndEEZThru />;
    case "3210":
      return <EasyThreadFloss />;
    case "2010":
      return <ComfortSlideFloss />;
    case "2008":
      return <DualDefenceFloss />;
    case "1815":
      return <ProWeaveFloss />;
    case "2030":
      return <DeepCleanFloss />;

    default:
      return (
        <S.Slide>
          <S.FallbackText>
            {priorityText} recommendation: {productName} (Code: {productCode})
          </S.FallbackText>
        </S.Slide>
      );
  }
};

export const RecommendationSlider = ({
  recommendations,
}: {
  recommendations: RecommendationSet;
}) => {
  return (
    <S.CarouselWrapper>
      <Flickity
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        static={false}
      >
        <RecommendationSlide
          priorityText="Priority 1"
          productName={recommendations.priority1.product}
          productCode={recommendations.priority1.code}
        />

        <RecommendationSlide
          priorityText="Priority 2"
          productName={recommendations.priority2.product}
          productCode={recommendations.priority2.code}
        />

        {recommendations.priority3.product && (
          <RecommendationSlide
            priorityText="Priority 3"
            productName={recommendations.priority3.product}
            productCode={recommendations.priority3.code}
          />
        )}
      </Flickity>
    </S.CarouselWrapper>
  );
};
