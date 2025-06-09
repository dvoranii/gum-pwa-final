import * as S from "./ToothbrushPatient.styles";

import Subgingival from "../../../assets/toothbrush/patient/selections/subgingival.webp";
import SubgingivalActive from "../../../assets/toothbrush/patient/selections/subgingival-active.webp";

import Sensitivity from "../../../assets/toothbrush/patient/selections/sensitivity.webp";
import SensitivityActive from "../../../assets/toothbrush/patient/selections/sensitivity-active.webp";

import Reach from "../../../assets/toothbrush/patient/selections/reach.webp";
import ReachActive from "../../../assets/toothbrush/patient/selections/reach-active.webp";
import { useState } from "react";
import { RecommendationSlider } from "./RecommendationSlider/RecommendationSlider";

type ImageKey = | "subgingival" | "sensitivity" | "reach";

export default function ToothbrushPatient() {

  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const toggleImage = (imageKey: ImageKey) => {
    setActiveImage(prev => {
      if (prev === imageKey) {
        setShowResults(false);
        return null;
    }

    setShowResults(true);
    return imageKey;
    })
  };

  return (
  <S.PatientContainerOuter>
  <S.PatientContainer>
    <S.ChoicesContainerOuter>
      <S.ChoicesContainerInner>
        <S.MainTitle>Your Patients'<br/>
        Unique Brushing Needs
        </S.MainTitle>

        <S.ChoicesImgWrapper >
          {/* invisible touch target for overlapping images */}
          <S.InteractiveOverlay onPointerDown={() => toggleImage('subgingival')} $positionLeft={true}/>
          <img src={activeImage === "subgingival" ? SubgingivalActive: Subgingival}/>
        </S.ChoicesImgWrapper>

        <S.ChoicesImgWrapper >
          <S.InteractiveOverlay onPointerDown={() => toggleImage('sensitivity')} $positionLeft={false}/>
          <img src={activeImage === "sensitivity" ? SensitivityActive : Sensitivity}/>
        </S.ChoicesImgWrapper>

        <S.ChoicesImgWrapper onPointerDown={() => toggleImage('reach')}>
          <img src={activeImage === "reach" ? ReachActive : Reach}/>
        </S.ChoicesImgWrapper>

      </S.ChoicesContainerInner>
    </S.ChoicesContainerOuter>

    <S.ResultsContainer $show={showResults}>
      {showResults && activeImage && (
        <RecommendationSlider selection={activeImage}/>
      )}
    </S.ResultsContainer>
    
    </S.PatientContainer>
    </S.PatientContainerOuter>
  );
}