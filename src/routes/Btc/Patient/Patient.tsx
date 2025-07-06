import * as S from "./Patient.styles"
import { useMemo, useState } from "react";
import Embrasure1 from "../../../assets/btc/patient/selections/embrasure-1.webp";
import Embrasure2 from "../../../assets/btc/patient/selections/embrasure-2.webp";
import Embrasure3 from "../../../assets/btc/patient/selections/embrasure-3.webp";
import Motivated from "../../../assets/btc/patient/selections/motivated.webp";
import Unmotivated from "../../../assets/btc/patient/selections/unmotivated.webp";
import Periodontal from "../../../assets/btc/patient/selections/periodontal.webp";
import Appliance from "../../../assets/btc/patient/selections/appliance.webp";
import Orthodontic from "../../../assets/btc/patient/selections/orthodontic.webp";

import Embrasure1Active from "../../../assets/btc/patient/selections/embrasure-1-active.webp";
import Embrasure2Active from "../../../assets/btc/patient/selections/embrasure-2-active.webp";
import Embrasure3Active from "../../../assets/btc/patient/selections/embrasure-3-active.webp";
import MotivatedActive from "../../../assets/btc/patient/selections/motivated-active.webp";
import UnmotivatedActive from "../../../assets/btc/patient/selections/unmotivated-active.webp";
import PeriodontalActive from "../../../assets/btc/patient/selections/periodontal-active.webp";
import ApplianceActive from "../../../assets/btc/patient/selections/appliance-active.webp";
import OrthodonticActive from "../../../assets/btc/patient/selections/orthodontic-active.webp";

import { getCombinationKey } from '../../../utils/patientResult';
import { recommendations, RecommendationSet } from "../../../utils/patientRecommendations";
import { RecommendationSlider } from "./RecommendationSlider/RecommendationSlider";

// import playSound from "../../../utils/playSound";
// import EmbrasureSound from "../../../assets/sounds/embrasure.mp3";
// import MotivatedSound from "../../../assets/sounds/motivated.mp3";
// import ApplianceSound from "../../../assets/sounds/appliance.mp3";
// import GoToProductSound from "../../../assets/sounds/gotoproduct.mp3";


type ImageKey = 
  | "embrasure1" | "embrasure2" | "embrasure3" 
  | "motivated" | "unmotivated"                
  | "periodontal" | "appliance" | "orthodontic"; 

const rowGroups: Record<string, ImageKey[]> = {
  row1: ["embrasure1", "embrasure2", "embrasure3"],
  row2: ["motivated", "unmotivated"],
  row3: ["periodontal", "appliance", "orthodontic"],
};

const imageSources = {
  embrasure1: { normal: Embrasure1, active: Embrasure1Active },
  embrasure2: { normal: Embrasure2, active: Embrasure2Active },
  embrasure3: { normal: Embrasure3, active: Embrasure3Active },
  motivated: { normal: Motivated, active: MotivatedActive },
  unmotivated: { normal: Unmotivated, active: UnmotivatedActive },
  periodontal: { normal: Periodontal, active: PeriodontalActive },
  appliance: { normal: Appliance, active: ApplianceActive },
  orthodontic: { normal: Orthodontic, active: OrthodonticActive },
};

export default function BtcPatient() {

  const [activeImages, setActiveImages] = useState<Record<ImageKey, boolean>>({
    embrasure1: false,
    embrasure2: false,
    embrasure3: false,
    motivated: false,
    unmotivated: false,
    periodontal: false,
    appliance: false,
    orthodontic: false,
  });

  const [showResults, setShowResults] = useState(false);

  const selectedEmbrasure = useMemo(() => {
    if (activeImages.embrasure1) return "embrasure1";
    if (activeImages.embrasure2) return "embrasure2";
    if (activeImages.embrasure3) return "embrasure3";
  }, [activeImages])

  const selectedMotivation = useMemo(() => {
    if (activeImages.motivated) return "motivated";
    if (activeImages.unmotivated) return "unmotivated";
  }, [activeImages])

    const selectedCondition = useMemo(() => {
    if (activeImages.periodontal) return "periodontal";
    if (activeImages.appliance) return "appliance";
    if (activeImages.orthodontic) return "orthodontic";
  }, [activeImages]);

  const currentRecommendations = useMemo(() => {
    if (!selectedEmbrasure || !selectedMotivation) return null;

    const key = getCombinationKey(selectedEmbrasure, selectedMotivation, selectedCondition);

    return recommendations[key] || null;
  }, [selectedEmbrasure, selectedMotivation, selectedCondition]);


  const toggleImage = (imageKey: ImageKey, rowIndex: number) => {
    if (rowIndex > 0) {
      const previousRowKey = `row${rowIndex}`;
      const hasPreviousRowSelection = rowGroups[previousRowKey].some(
        key => activeImages[key]
      );

      if (!hasPreviousRowSelection) return;
    }

      // switch(rowIndex) {
      //   case 0: 
      //     playSound(EmbrasureSound);
      //     break;
      //   case 1: 
      //     playSound(MotivatedSound);
      //     break;
      //   case 2: 
      //     playSound(ApplianceSound);
      //     break;
      //   default:
      //     break;
      // }

    setActiveImages(prev => {
      const newState = { ...prev };
      const currentRowKey = `row${rowIndex + 1}`;

      rowGroups[currentRowKey].forEach(key => newState[key] = false);
      newState[imageKey] = !prev[imageKey];
      
      const shouldClearSubsequentRows = 
        !newState[imageKey] || 
        (rowIndex > 0 && !rowGroups[`row${rowIndex}`].some(k => newState[k])); // Case 2: Previous row became unselected
      
      if (shouldClearSubsequentRows) {
        for (let i = rowIndex + 1; i < Object.keys(rowGroups).length; i++) {
          const nextRowKey = `row${i + 1}`;
          rowGroups[nextRowKey].forEach(key => newState[key] = false);
        }
      }
      
      return newState;
    });

    setShowResults(false);
  };

  const hasRowSelection = (rowIndex: number) => {
    const rowKey = `row${rowIndex + 1}`;
    return rowGroups[rowKey].some(key => activeImages[key]);
  }

  const showResultButton = hasRowSelection(0) && hasRowSelection(1);

  const handleShowResults = () => {
    // playSound(GoToProductSound);
    setShowResults(true);
  }

  return (
    <S.PatientContainerOuter>
    <S.PatientContainer>
      <S.ChoicesContainerOuter>
        <S.ChoicesContainerInner>
          <h1>Your Patients' Unique Needs</h1>
          
          {/* Row 1 */}
          <S.Row>
            {rowGroups.row1.map(key => (
              <S.ImgWrapper key={key} onClick={() => toggleImage(key, 0)}>
                <img 
                  src={activeImages[key] ? imageSources[key].active : imageSources[key].normal}
                  alt={`${key.replace(/([A-Z])/g, ' $1').trim()} option`}
                />
              </S.ImgWrapper>
            ))}
          </S.Row>

          {/* Row 2 */}
          <S.Row2>
            <S.ImgWrapper2
              onPointerDown={() => toggleImage("motivated", 1)}
            >
              <img src={activeImages.motivated ? imageSources.motivated.active : imageSources.motivated.normal}/>
            </S.ImgWrapper2>
            <S.ImgWrapper3
              onPointerDown={() => toggleImage("unmotivated", 1)}
            >
              <img src={activeImages.unmotivated ? imageSources.unmotivated.active : imageSources.unmotivated.normal}/>
            </S.ImgWrapper3>
          </S.Row2>

          {/* Row 3 */}
          <S.Row>
            {rowGroups.row3.map(key => (
              <S.ImgWrapper 
                key={key} 
                onClick={() => toggleImage(key, 2)}
               
              >
                <img 
                  src={activeImages[key] ? imageSources[key].active : imageSources[key].normal}
                  alt={`${key} case`}
                />
              </S.ImgWrapper>
            ))}
          </S.Row>
        </S.ChoicesContainerInner>

          <S.GumInterproximalSolution $show={showResultButton} onClick={handleShowResults}>
            <p>Gum Interproximal Solutions</p>
          </S.GumInterproximalSolution>

      </S.ChoicesContainerOuter>
        <S.ResultsContainer $show={showResults}>
          {showResults && currentRecommendations && (
            <>
            <RecommendationSlider recommendations={currentRecommendations}/>
            </>
          )}
        </S.ResultsContainer>
    </S.PatientContainer>
    </S.PatientContainerOuter> 
  );
}